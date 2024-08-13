import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '../../Login/LoginView';
import {RootStackPramsList} from './RootStackPramsList';
const Stack = createNativeStackNavigator<RootStackPramsList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginView} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigation;
