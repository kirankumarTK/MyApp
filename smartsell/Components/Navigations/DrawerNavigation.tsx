import {createDrawerNavigator} from '@react-navigation/drawer';
import StatusView from '../../screens/Status/StatusView';
import {window} from '../../Commons/utilities';
import AppColor from '../../AppThemes/AppColor';
import Appstlye from '../../AppThemes/Appstlye';
import HomeDrawerView from './HomeDrawerView';
import { DrawerNavigationModel, HhtMenuMasterBO } from '../../models/commonModels';

const Drawer = createDrawerNavigator();

const Drawernavigation : React.FC<DrawerNavigationModel> = ({homeMenuList}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Status"
      detachInactiveScreens={true}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'front',
        headerShown: true,
        headerTintColor: AppColor.buttonTextColor,
        headerStyle: {
          backgroundColor: AppColor.secondaryColor,
          elevation: Appstlye.appElevation,
        },
        drawerStyle: {
          width: window.width * 0.78,
        },
      }}
      drawerContent={props => <HomeDrawerView props={props} homeMenuList={(homeMenuList)}/>}>
      <Drawer.Screen name="Status" component={StatusView} />
    </Drawer.Navigator>
  );
};

export default Drawernavigation;
