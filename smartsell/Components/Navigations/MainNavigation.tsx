import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '../../screens/Login/LoginView';
import {RootStackPramsList} from './RootStackPramsList';
import HomeView from '../../screens/HomePage/HomeView';
import CameraComponent from '../Camera/CameraComponent';
const Stack = createNativeStackNavigator<RootStackPramsList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name='Home' component={HomeView}/>
        <Stack.Screen name='Camera' component={CameraComponent}/>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigation;
