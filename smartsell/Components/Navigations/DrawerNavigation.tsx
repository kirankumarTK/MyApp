import { createDrawerNavigator } from '@react-navigation/drawer';
import AppColor from '../../AppThemes/AppColor';
import Appstlye from '../../AppThemes/Appstlye';
import { MENU_DASH_KPI, MENU_PLANNING, window } from '../../Commons/utilities';
import { DrawerNavigationModel } from '../../models/commonModels';
import RoutePlanningView from '../../screens/RoutePlanning/RoutePlanningView';
import StatusView from '../../screens/Status/StatusView';
import HomeDrawerView from './HomeDrawerView';
import { DrawerStackPramsList, RootStackPramsList } from './RootStackPramsList';
import Appbar from './Appbar';

const Drawer = createDrawerNavigator<DrawerStackPramsList>();
const Drawernavigation : React.FC<DrawerNavigationModel> = ({homeMenuList}) => {
  return (
    <Drawer.Navigator
      initialRouteName= {MENU_DASH_KPI}
      detachInactiveScreens={true}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'front',
        headerShown: true,
        header : (props) => <Appbar props = {props}/>,
        headerTintColor: AppColor.buttonTextColor,
        headerStyle: {
          backgroundColor: AppColor.secondaryColor,
          elevation: Appstlye.appElevation,
        },
        drawerStyle: {
          width: window.width * 0.65,
        },
      }}
      drawerContent={props => <HomeDrawerView props={props} homeMenuList={(homeMenuList)}/>}>
      <Drawer.Screen name={MENU_DASH_KPI} component={StatusView} />
      <Drawer.Screen name={MENU_PLANNING} component={RoutePlanningView} />
    </Drawer.Navigator>
  );
};

export default Drawernavigation;
