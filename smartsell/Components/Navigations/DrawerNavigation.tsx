import {createDrawerNavigator} from '@react-navigation/drawer';
import StatusView from '../../screens/Status/StatusView';
import { window } from '../../Commons/utilities';

const Drawer = createDrawerNavigator();

const Drawernavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Status"
      detachInactiveScreens={true}
      screenOptions={{
        drawerPosition: 'left', drawerType: "front", headerShown: true, drawerStyle: {
          width: window.width * 0.78,
        },
      }}>
      <Drawer.Screen name="Status" component={StatusView} />
    </Drawer.Navigator>
  );
};

export default Drawernavigation;
