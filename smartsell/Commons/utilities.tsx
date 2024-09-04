import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, AlertButton, Dimensions } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { request } from 'react-native-permissions';
import DeviceInfo from 'react-native-version-info';
import { LanguageModel, LocationService } from '../models/commonModels';
import AppDatabase from './DataBaseHelper';

export const window = Dimensions.get('window');

export const MENU_DASH_KPI = 'MENU_DASH_KPI';
export const MENU_SURVEY_SW = 'MENU_SURVEY_SW';
export const MENU_TASK_NEW = 'MENU_TASK_NEW';
export const MENU_PLANNING = 'MENU_PLANNING';
export const MENU_VISIT = 'MENU_VISIT';
export const MENU_SYNC = 'MENU_SYNC';
export const MENU_POSM_AST = 'MENU_POSM_AST';

export const getAppversion = () => {
  return DeviceInfo.appVersion;
};

export const getBuildversion = () => {
  return DeviceInfo.buildVersion;
};

export const getBundleIdentifier = () => {
  return DeviceInfo.bundleIdentifier;
};
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
        } else {
          reject('not found');
        }
      })
      .catch(error => {
        reject('not found');
      });
  });
};

export const showAlert = (
  title: string,
  message: string,
  firstTitle?: string,
  secondTitle?: string,
  cancelTitle?: string,
  firstCallBack?: Function,
  secondCallBack?: Function,
  cancelCallback?: Function,
  isCancelable = false,
) => {
  const arrButtons: AlertButton[] = [];
  if (firstTitle) {
    arrButtons.push({
      text: firstTitle,
      onPress: () => {
        firstCallBack && firstCallBack();
      },
    });
  }
  if (secondTitle) {
    arrButtons.push({
      text: secondTitle,
      onPress: () => {
        secondCallBack && secondCallBack();
      },
    });
  }
  if (cancelTitle) {
    arrButtons.push({
      text: cancelTitle,
      style: 'cancel',
      onPress: () => {
        cancelCallback && cancelCallback();
      },
    });
  }
  if (arrButtons.length > 0) {
    Alert.alert(title, message, arrButtons, { cancelable: isCancelable });
  }
};

export async function requestLocationPermission(
  permissions: any,
  permissionsName: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    request(permissions)
      .then(result => {
        if (result === 'granted') {
          return resolve('granted');
        } else {
          return reject(
            permissionsName +
            ' permission not Granted. Go to settings to enable it',
          );
        }
      })
      .catch(e => {
        console.log(e);
        return reject(
          permissionsName +
          ' permission not Granted. Go to settings to enable it',
        );
      });
  });
}

export const getLocation = (timeout: number) => {
  return new Promise((resolve, reject) => {

    Geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      error => {
        reject(error);
      },
      {
        timeout: timeout,
        maximumAge: 50000,
        enableHighAccuracy: true,
        accuracy: { android: 'high', ios: 'best' },
      },
    );
  });
};

export const getLocationListener = (
  frequency: number,
): Promise<string | LocationService> => {
  return new Promise((resolve, reject) => {
    const id: number = Geolocation.watchPosition(
      position => {
        if (!position.mocked) {
          const location: LocationService = {
            location: position,
            id: id,
            msg: '200',
          };
          console.log(position);
          resolve(location);
        } else {
          const location: LocationService = {
            location: position,
            id: id,
            msg: 'Mocked location is truned on',
          };
          console.log(position);
          reject(location);
        }
      },
      error => {
        console.log(error);
        reject(error.message);
      },
      {
        enableHighAccuracy: true,
        accuracy: { android: 'high', ios: 'best' },
        interval: frequency,
        distanceFilter: 1,
      },
    );
  });
};

export const clearGeoWatcher = (id: number) => {
  Geolocation.clearWatch(id);
  Geolocation.stopObserving();
};

export const getLanguageList = (): Promise<string | Array<LanguageModel>> => {
  return new Promise((resolve, reject) => {
    AppDatabase.executeFetch(
      "Select listCode,listName from StandardListMaster where ListType = 'LANGUAGE_TYPE'",
    )
      .then(result => {
        resolve(result as Array<LanguageModel>);
      })
      .catch(error => {
        reject(error);
      });
  });
};
