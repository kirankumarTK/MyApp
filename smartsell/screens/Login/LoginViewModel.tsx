import {useCallback, useEffect, useState, version} from 'react';
import {
  getAppversion,
  getAsyncData,
  showAlert,
  storeAsyncData,
} from '../../Commons/utilities';
import {Alert} from 'react-native';
import {TFunction} from 'i18next';
import AysncKeys from '../../Commons/AsyncKeys';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackPramsList} from '../../Components/Navigations/RootStackPramsList';

export const LoginViewModel = (t: TFunction<'translation', undefined>) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackPramsList, 'Login'>>();

  useEffect(() => {
    isAppavailLableForUpdate().then(isUpdateAvailable => {
      if (isUpdateAvailable) {
        showAlert(
          '',
          t('update_available'),
          'ok',
          '',
          '',
          undefined,
          undefined,
          undefined,
        );
      } else {
        saveCurrentVersion();
      }
    });
  }, []);

  //check newer version of APP is available
  const isAppavailLableForUpdate = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      getAsyncData(AysncKeys.appVersion)
        .then(result => {
          resolve(getAppversion() > result ? true : false);
        })
        .catch(error => {
          resolve(false);
        });
    });
  };

  const saveCurrentVersion = () => {
    storeAsyncData(AysncKeys.appVersion, getAppversion());
  };

  const onLoginPress = useCallback(() => {
    navigation.navigate('Home');
  }, []);
  return {onLoginPress};
};
