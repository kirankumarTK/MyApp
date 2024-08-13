import {Dimensions, StyleSheet} from 'react-native';
import AppColor from './AppColor';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const appIconsize = 25;
const appElevation = 5;

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
    height: '35%',
    width: '70%',
    alignSelf: 'center',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  login_app_image: {
    width: '70%',
    height: '25%',
    alignSelf :'center',
    resizeMode: 'contain',
    backgroundColor: AppColor.cardBackgroundcolor,
  },
  settingIcon: {
    position : 'absolute',
    color : AppColor.iconColor,
    alignSelf :'flex-end',
    top : 10,
    right : 10,
  },
  loginButtonStyle : {
    backgroundColor : AppColor.secondaryColor,
    width : 150,
    height : 50,
    padding : 5,
    borderRadius : 50,
    elevation : appElevation,
    alignSelf : 'center',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 30,
    marginBottom : 20
  }
});

export default {style, screenHeight, screenWidth, appIconsize};
