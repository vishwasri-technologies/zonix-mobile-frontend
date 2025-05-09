import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HostelCard from './src/components/Banner';
import SignupScreen from './src/components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/components/Login';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HostelCard">
        <Stack.Screen name="HostelCard" component={HostelCard} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

