import {APP_LOGIN_BG, APP_LOGO_BG} from '@env';
import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Appstlye from '../AppThemes/Appstlye';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppColor from '../AppThemes/AppColor';
const LoginView = () => {
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

          <TouchableOpacity style = {Appstlye.style.loginButtonStyle}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </React.Fragment>
  );
};

export default LoginView;
