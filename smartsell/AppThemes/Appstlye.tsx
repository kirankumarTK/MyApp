import {Dimensions, StyleSheet} from 'react-native';
import AppColor from './AppColor';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const appIconsize = 25;
const appElevation = 2;
const titleFontSize = 18;
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
    height: '20%',
    width: '100%',
    backgroundColor: AppColor.secondaryColor,
  },
  Drawer_Text_View: {
    color: AppColor.textColor,
    fontSize: titleFontSize,
    fontWeight: 'bold',
    marginStart: 10,
  },
  Drawer_View: {
    padding: 10,
    flexDirection: 'row',
  },
  Drawer_Icon: {
    alignSelf: 'center',
  },
  AppBar_view: {
    backgroundColor: AppColor.secondaryColor,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title_view: {
    fontSize: titleFontSize,
    color: AppColor.white,
    fontWeight: 'bold',
  },
  absolute_start: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20,
  },
  dialog_bg: {
    backgroundColor: AppColor.black,
    opacity: 0.7,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    backgroundColor: AppColor.white,
    width: '70%',
    borderRadius: 10,
    padding: 20,
  },
  dialog_list: {
    marginTop: 20,
    marginStart: 10,
    height: 100,
  },
  dialog_button_container: {
    position: 'absolute',
    bottom: 0,
    end: 0,
    flexDirection: 'row',
  },
  dialog_button_ok: {
    color: AppColor.colorPrimaryDark,
    fontSize: buttonFontSize,
    margin: 15,
    elevation: appElevation,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  dialog_button_cancel: {
    color: AppColor.black,
    fontSize: buttonFontSize,
    margin: 15,
    elevation: appElevation,
    textTransform: 'uppercase',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: AppColor.secondaryColor,
  },
  map: {
    flex: 0.8,
  },
  storeList: {
    flex: 1.2,
    marginRight : 5,
    marginLeft : 5,
  },
  list_item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: AppColor.white,
    elevation: appElevation,
    margin: 5,
    marginTop: 2,
    padding: 10,
  },
  margin_top: {
    marginTop: 5,
  },
  padding_default: {
    padding: 5,
  },
  retailer_details_view: {
    flex: 0.8,
    marginRight: 20,
    
  },
  retailer_score_view: {
    flex: 1.2,
    marginRight: 5,
  },
  Store_Name: {
    color: AppColor.textColor,
    fontSize: titleFontSize,
    fontWeight: 'bold',
  },
  todayRouteSwitchContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  app_small_text_gray: {
    fontSize: 10,
    marginStart: 10,
    marginTop: 5,
    fontWeight: 'bold',
    color: AppColor.gray,
  },
  fabButton: {
    position: 'absolute',
    backgroundColor: AppColor.secondaryColor,
    borderRadius: 100,
    bottom: 25,
    right: 20,
    padding: 20,
    elevation: appElevation,
    shadowColor: AppColor.gray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  toast: {
    position: 'absolute',
    bottom: 50,
    maxWidth: screenWidth / 1.5,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: AppColor.light_gray,
    opacity: 0.7,
    borderRadius: 50,
    padding: 15,
  },
  toastText: {
    color: '#000',
    fontSize: 16,
  },
});

export default {style, screenHeight, screenWidth, appIconsize, appElevation};
