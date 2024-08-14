import {APP_LOGIN_BG, APP_LOGO_BG} from '@env';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Appstlye from '../../AppThemes/Appstlye';
import translation from '../../Commons/i18n';
import {getBuildversion} from '../../Commons/utilities';
import {LoginViewModel} from './LoginViewModel';

const LoginView = () => {
  const {t} = useTranslation();
  const {onLoginPress} = LoginViewModel(t);

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
              onLoginPress();
            }}
            style={Appstlye.style.loginButtonStyle}>
            <Text style={Appstlye.style.buttonText}>{t('login')}</Text>
          </TouchableOpacity>

          <View style={Appstlye.style.login_page_copyright_view}>
            <Text style={[Appstlye.style.app_small_text]}>
              {t('version') + getBuildversion()}
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
