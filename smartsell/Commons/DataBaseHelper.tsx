import {DATABASE_NAME} from '@env';
import {AppState, AppStateStatus} from 'react-native';
import Sqlite, {openDatabase} from 'react-native-sqlite-storage';

export interface Database {
  createInsertQuery(
    tableName: string,
    columns: any[],
    objectArray: any[],
  ): string;
  createUpdateQuery(
    tableName: string,
    columns: any[],
    objectArray: any[],
    idColumn: string,
  ): string[];

  executeQuery(query: string): Promise<any>;
  executeFetch(query: string): Promise<any[]>;
  executeTransaction(queries: string[]): Promise<any>;
  deleteDatabase(name?: string): Promise<void>;
}

let sqliteInstance: Sqlite.SQLiteDatabase | undefined;
async function getDatabaseInstance(): Promise<Sqlite.SQLiteDatabase> {
  if (sqliteInstance == undefined) {
    return createSqliteInstance();
  }
  return Promise.resolve(sqliteInstance);
}

async function createSqliteInstance(): Promise<Sqlite.SQLiteDatabase> {
  Sqlite.DEBUG(__DEV__ ? true : false);
  Sqlite.enablePromise(true);
  sqliteInstance = await Sqlite.openDatabase({
    name: DATABASE_NAME,
    createFromLocation: 1,
    location : 'default'
  });
  await prepareDatabase(sqliteInstance);
  return sqliteInstance;
}

async function prepareDatabase(database: Sqlite.SQLiteDatabase): Promise<void> {
  return Promise.resolve();
}

function createInsertQuery(
  tableName: string,
  columns: any[],
  objectArray: any[],
): string {
  const strColumns: string = columns.join(',');
  const strQuery = `INSERT INTO ${tableName} (${strColumns})`;

  const arrRows: string[] = objectArray.map((row: any) => {
    const arrRow: any[] = columns.map((column: string, index: number) => {
      const value: any = Array.isArray(row) ? row[index] : row[column];

      if (value === null || value === undefined) {
        return "''";
      } else if (Array.isArray(value) || typeof value === 'object') {
        return "'" + JSON.stringify(value) + "'";
      } else if (typeof value === 'string') {
        const finalString = value.split("'").join("''");
        return "'" + finalString + "'";
      } else if (typeof value === 'boolean') {
        return value ? 1 : 0;
      } else {
        return value;
      }
    });

    return arrRow.join(',');
  });

  return `${strQuery} SELECT ${arrRows.join(' UNION ALL SELECT ')}`;
}

function createUpdateQuery(
  tableName: string,
  columns: any[],
  objectArray: any[],
  idColumn: string,
): string[] {
  const arrQueries: string[] = objectArray.map(row => {
    let strQuery = `UPDATE ${tableName} SET `;

    const arrUpdates = columns.map(column => {
      const value = row[column];
      if (value === null) {
        return column + "=''";
      } else if (typeof value === 'string') {
        let finalString = value.split("'").join("''");
        if (column.toLowerCase() === 'sites') {
          finalString = ',' + finalString + ',';
        }
        return column + "='" + finalString + "'";
      } else if (typeof value === 'boolean') {
        return column + (value ? '=1' : '=0');
      } else {
        return column + '=' + value;
      }
    });

    strQuery += arrUpdates.join(',');
    return `${strQuery} WHERE ${idColumn} = '${row[idColumn]}'`;
  });

  return arrQueries;
}

async function executeFetch(query: string): Promise<Sqlite.ResultSet[]> {
  return new Promise((resolve, reject) => {
    getDatabaseInstance().then((database: Sqlite.SQLiteDatabase) => {
      database
        .executeSql(query)
        .then(([result]) => {
          const items: Sqlite.ResultSet[] = [];
          for (let i = 0; i < result.rows.length; i++) {
            items.push(result.rows.item(i));
          }
          resolve(items);
        })
        .catch(EFerror => {
          console.log(EFerror);
          reject(EFerror);
        });
    });
  });
}

async function executeQuery(query: string): Promise<any> {
  return new Promise((resolve, reject) => {
    getDatabaseInstance().then((database: Sqlite.SQLiteDatabase) => {
      database
        .executeSql(query)
        .then(([result]) => {
          resolve(result);
        })
        .catch(EQerror => {
          console.log(EQerror);
          reject(EQerror);
        });
    });
  });
}

async function executeTransaction(arrQuery: string[]): Promise<any> {
  return new Promise((resolve, reject) => {
    getDatabaseInstance().then((database: Sqlite.SQLiteDatabase) => {
      database
        .transaction(tx => {
          for (let i = 0; i < arrQuery.length; i++) {
            tx.executeSql(arrQuery[i]);
          }
        })
        .then(success => {
          resolve(success);
        })
        .catch(Eerror => {
          console.log(Eerror);
          reject(Eerror);
        });
    });
  });
}

// Close the connection to the database
function closeDatabase(): Promise<void> {
  return new Promise(resolve => {
    if (sqliteInstance === undefined) {
      console.log('[db] No need to close DB again');
      resolve();
    } else {
      sqliteInstance
        .close()
        .then(() => {
          console.log('[db] Database closed.');
          sqliteInstance = undefined;
          subs.remove();
          resolve();
        })
        .catch(error => {
          console.log('Error in closing db: ', error);
          resolve();
        });
    }
  });
}

// Close the connection to the database
function deleteDatabase(name?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    closeDatabase().then(() => {
      const dbToDelete = name ?? DATABASE_NAME;

      Sqlite.deleteDatabase({
        name: dbToDelete,
        createFromLocation: 1,
      })
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error.message ?? '');
        });
    });
  });
}

// Listen to app state changes.
//Close the database when the app is put into the background (or enters the "inactive" state)
//ILog("[db] Adding listener to handle app state changes");
const subs = AppState.addEventListener('change', handleAppStateChange);

// Handle the app going from foreground to background, and vice versa.
function handleAppStateChange(nextAppState: AppStateStatus) {
  if (nextAppState === 'inactive') {
    // App has moved from the foreground into the background (or become inactive)
    console.log('[db] App has become inactive - closing DB.');
    closeDatabase();
  } else if (nextAppState === 'active') {
    // App has moved to become active
    console.log('[db] App has become active - opening DB.');
    createSqliteInstance();
  }
}

// Export the functions which fulfill the Database interface contract
const AppDatabase: Database = {
  createInsertQuery,
  createUpdateQuery,
  executeQuery,
  executeFetch,
  executeTransaction,
  deleteDatabase,
};

export default AppDatabase;
