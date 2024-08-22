import {Dimensions, StyleSheet} from 'react-native';
import AppColor from './AppColor';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const appIconsize = 25;
const appElevation = 2;
const titleFontSize = 20;
const buttonFontSize = 15;

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
    fontSize: buttonFontSize,
    fontWeight: 'bold',
  },
  app_small_text: {
    color: AppColor.textColor,
    fontSize: 10,
    fontWeight: 'bold',
  },
  login_page_copyright_view: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 10,
  },
  DrawerProfile_BG: {
    height : '20%',
    width : '100%',
    backgroundColor : AppColor.secondaryColor,
  },
  Drawer_Text_View : {
    color: AppColor.textColor,
    fontSize: titleFontSize,
    fontWeight: 'bold',
    alignSelf : 'flex-start',
    flex: 1
  },
  Drawer_View : {
   padding : 10,
   flexDirection : 'row'
  },
  Drawer_Icon : {
   flex : 0.2,
   alignSelf : 'center'
  },
});

export default {style, screenHeight, screenWidth, appIconsize, appElevation};
