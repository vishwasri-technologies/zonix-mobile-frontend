// MainTabs.js
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import HomeScreen from '.src/components/Homepage.js';
// import SmartNotifications from '.src/components/Hostel1.js';
// import ProfileScreen from '.src/components/Profile.js';
// import HelpScreen from '.src/';

// const Tab = createBottomTabNavigator();

// export default function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: '#8F87F1',
//           height: 70,
//           borderTopLeftRadius: 25,
//           borderTopRightRadius: 25,
//           position: 'absolute',
//         },
//         tabBarIcon: ({ focused }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = 'home-outline';
//           } else if (route.name === 'Hostel') {
//             iconName = 'sparkles-outline';
//           } else if (route.name === 'Profile') {
//             iconName = 'person-outline';
//           } else if (route.name === 'Help') {
//             iconName = 'help-circle-outline';
//           }

//           return <Ionicons name={iconName} size={26} color="#fff" />;
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Hostel" component={SmartNotifications} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Help" component={HelpScreen} />
//     </Tab.Navigator>
//   );
// }
