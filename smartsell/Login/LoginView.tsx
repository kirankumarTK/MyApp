import {APP_LOGIN_BG, APP_LOGO_BG} from '@env';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeviceInfo from 'react-native-version-info';
import Appstlye from '../AppThemes/Appstlye';
import translation from '../Commons/i18n';
import {getAsyncData, storeAsyncData} from '../Commons/utilities';

const LoginView = () => {
  const {t} = useTranslation();

  useEffect(() => {
    storeAsyncData('Test', 'Kirankumar T K').then(()=> {

    });
    getAsyncData('Test')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <React.Fragment>
      <ImageBackground
        style={Appstlye.style.centerAlign}
        source={require(APP_LOGIN_BG)}>
        <View style={[Appstlye.style.cardView, Appstlye.style.login_page]}>
          <Image
            source={require(APP_LOGO_BG)}
            style={Appstlye.style.login_app_image}
          />
          <Icon
            name="settings"
            size={Appstlye.appIconsize}
            style={Appstlye.style.settingIcon}
          />

          <TouchableOpacity
            onPress={() => {
              translation.switchLanguage('en');
            }}
            style={Appstlye.style.loginButtonStyle}>
            <Text style={Appstlye.style.buttonText}>{t('login')}</Text>
          </TouchableOpacity>

          <View style={Appstlye.style.login_page_copyright_view}>
            <Text style={[Appstlye.style.app_small_text]}>
              {t('version') + DeviceInfo.appVersion}
            </Text>
            <Text style={[Appstlye.style.app_small_text]}>
              {t('copy_right')}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </React.Fragment>
  );
};

export default LoginView;
