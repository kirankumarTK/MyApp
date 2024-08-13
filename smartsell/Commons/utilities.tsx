import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAsyncData = (key: string, value: any): Promise<void> => {
  return new Promise(resolve => {
    if (key.length > 0) {
      const valueTemp =
        typeof value === 'string' ? value : JSON.stringify(value);
      AsyncStorage.setItem(key, valueTemp)
        .then(() => {
          resolve();
        })
        .catch(error => {
          DLog(error);
          resolve();
        });
    }
  });
};

export const getAsyncData = (key: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then((response: any) => {
        if (response != null && response !== undefined) {
          resolve(response);
          DLog(response)
        }
      })
      .catch(error => {
        reject('not found');
      });
  });
};
