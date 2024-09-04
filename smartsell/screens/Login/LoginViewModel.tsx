import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TFunction } from 'i18next';
import { useCallback, useEffect, useState } from 'react';
import AysncKeys from '../../Commons/AsyncKeys';
import translation from '../../Commons/i18n';
import {
  getAppversion,
  getAsyncData,
  getLanguageList,
  showAlert,
  storeAsyncData,
} from '../../Commons/utilities';
import { RootStackPramsList } from '../../Components/Navigations/RootStackPramsList';
import { LanguageModel } from '../../models/commonModels';
import { useAppDispatch } from '../../redux/hooks';
import { setSelectedLanguage } from '../../redux/LanguageSlice';

export const LoginViewModel = (t: TFunction<'translation', undefined>) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackPramsList, 'Login'>>();

  const [isSettingVisible, showDialog] = useState<boolean>(false);

  const [languageList, setLanguage] = useState<Array<LanguageModel>>([]);

  const dispatch = useAppDispatch();

 

  useEffect(() => {
    getAsyncData(AysncKeys.languageCode)
      .then(code => {
        translation.switchLanguage(code);
        dispatch(setSelectedLanguage(code));
      })
      .catch(error => {});
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

  const onSettingPressed = useCallback(() => {
    console.log(languageList);
    if (languageList?.length > 0) {
      showDialog(true);
    } else {
      getLanguageList()
        .then(result => {
          setLanguage(result as Array<LanguageModel>);
          showDialog(true);
        })
        .catch(error => {
          //need to show Toast msg
          showDialog(false);
        });
    }
  }, [languageList]);

  const onSettingNegative = useCallback(() => {
    showDialog(false);
  }, []);

  const onSettingPostive = (languageCode: string) => {
    storeAsyncData(AysncKeys.languageCode, languageCode)
      .then(result => {
        translation.switchLanguage(languageCode);
        dispatch(setSelectedLanguage(languageCode));
        showDialog(false);
      })
      .catch(error => {
        showDialog(false);
      });
  };

  return {
    onLoginPress,
    isSettingVisible,
    onSettingPressed,
    languageList,
    onSettingPostive,
    onSettingNegative,
  };
};
