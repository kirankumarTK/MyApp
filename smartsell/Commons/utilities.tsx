import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, AlertButton, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-version-info';

export const window = Dimensions.get("window");


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
    Alert.alert(title, message, arrButtons, {cancelable: isCancelable});
  }
};
