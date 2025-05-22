// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HostelCard from './src/components/Banner';
// import SignupScreen from './src/components/Signup';
// import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from './src/components/Login';
// import CreatePasswordScreen from './src/components/Forgot Password';
// import HomeScreen from './src/components/Homepage.js';
// import Hostel1 from './src/components/Hostel1.js';
// import ProfileScreen from './src/components/Profile.js';
// import  HelpScreen from './src/components/Help.js';
// import ContactThankYou from './src/components/Feedback.js';
// import Hostel1Info from './src/components/Hostel1Info.js';
// import BookingScreen from './src/components/BookingScreen.js';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HostelCard">
//         <Stack.Screen name="HostelCard" component={HostelCard} options={{ headerShown: false }}/>
//         <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Hostel1" component={Hostel1} options={{ headerShown: false }} />
//         <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="ContactThankYou" component={ContactThankYou} options={{ headerShown: false }} />
//         <Stack.Screen name="Hostel1Info" component={Hostel1Info} options={{ headerShown: false }} />
//         <Stack.Screen name="BookingScreen" component={BookingScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




































import React from 'react'; // Import React
import { StatusBar } from 'react-native'; // Import StatusBar
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Import all your screen components. Ensure these paths are correct.
import HostelCard from './src/components/Banner';
import SignupScreen from './src/components/Signup';
import LoginScreen from './src/components/Login';
import CreatePasswordScreen from './src/components/Forgot Password';
import HomeScreen from './src/components/Homepage.js';
import Hostel1 from './src/components/Hostel1.js';
import ProfileScreen from './src/components/Profile.js';
import HelpScreen from './src/components/Help.js';
import ContactThankYou from './src/components/Feedback.js';
import Hostel1Info from './src/components/Hostel1Info.js';
import BookingScreen from './src/components/BookingScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* StatusBar component added here */}
      <StatusBar
        barStyle="dark-content" // Can be 'dark-content', 'light-content', or 'default'
        backgroundColor="#f1eafa" // Set a background color that matches your app's theme
      />
      <Stack.Navigator initialRouteName="HostelCard">
        <Stack.Screen name="HostelCard" component={HostelCard} options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Hostel1" component={Hostel1} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ContactThankYou" component={ContactThankYou} options={{ headerShown: false }} />
        <Stack.Screen name="Hostel1Info" component={Hostel1Info} options={{ headerShown: false }} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}















































// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';

// import HostelCard from './src/components/Banner';
// import SignupScreen from './src/components/Signup';
// import LoginScreen from './src/components/Login';
// import CreatePasswordScreen from './src/components/Forgot Password';
// import MainTabs from './src/components/MainTabs.js'; // import new tab navigator

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HostelCard" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="HostelCard" component={HostelCard} />
//         <Stack.Screen name="SignupScreen" component={SignupScreen} />
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} />
//         <Stack.Screen name="MainTabs" component={MainTabs} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
