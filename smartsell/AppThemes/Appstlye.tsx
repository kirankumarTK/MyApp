import {Dimensions, StyleSheet} from 'react-native';
import AppColor from './AppColor';
import { RFPercentage } from 'react-native-responsive-fontsize';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const appIconsize = 20;
const appElevation = 2;
const titleFontSize = 15;


const style = StyleSheet.create({
  cardView: {
    backgroundColor: AppColor.cardBackgroundcolor,
    elevation: appElevation,
    borderColor: AppColor.colorPrimaryDark,
  },
  centerAlign: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    width: '100%',
    flex: 1,
  },
  login_page: {
    height: '30%',
    width: '65%',
    alignSelf: 'center',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  login_app_image: {
    width: '70%',
    height: '25%',
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: AppColor.cardBackgroundcolor,
  },
  settingIcon: {
    position: 'absolute',
    color: AppColor.iconColor,
    alignSelf: 'flex-end',
    top: 10,
    right: 10,
  },
  loginButtonStyle: {
    backgroundColor: AppColor.secondaryColor,
    width: 100,
    height: 40,
    padding: 5,
    borderRadius: 50,
    elevation: appElevation,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: AppColor.buttonTextColor,
    fontSize: titleFontSize,
    fontWeight: 'bold',
  },
  app_small_text: {
    color: AppColor.textColor,
    fontSize: RFPercentage(0.9),
    fontWeight: 'bold',
  },
  login_page_copyright_view: {
    position: 'absolute',
    alignItems : 'center',
    alignSelf : 'center',
    bottom: 10,
  },
});

export default {style, screenHeight, screenWidth, appIconsize};
