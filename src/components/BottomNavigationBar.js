// // BottomNavigationBar.js
// import React from 'react';
// import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

// const BottomNavigationBar = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
//         <Image source={require('./assets/Home.png')} style={styles.icon} />
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('Hostel1')}>
//         <Image source={require('./assets/star.png')} style={styles.icon} />
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
//         <Image source={require('./assets/person.png')} style={styles.icon} />
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')}>
//         <Image source={require('./assets/hp.png')} style={styles.icon} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default BottomNavigationBar;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#9A83F3', // Light purple background
//     paddingVertical: 12,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     elevation: 10,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
//   },
// });





























// import React from 'react';
// import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // ✅ Import the hook

// const BottomNavigationBar = () => {
//   const navigation = useNavigation(); // ✅ Get navigation object

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
//         <Image source={require('./assets/Home.png')} style={styles.icon} />
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('Hostel1')}>
//         <Image source={require('./assets/star.png')} style={styles.icon} />
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
//         <Image source={require('./assets/person.png')} style={styles.icon} />
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')}>
//         <Image source={require('./assets/hp.png')} style={styles.icon} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default BottomNavigationBar;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#9A83F3',
//     paddingVertical: 12,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     elevation: 10,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
//   },
// });







































import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavigationBar = () => {
  const navigation = useNavigation(); // Hook to access navigation

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={require('./assets/Home.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Hostel1', {
            hostel: {
              name: 'Hostel 1',
              image: require('./assets/hostel1.jpg'),
              price: '₹300/day',
              contactName: 'John Doe',
              contactNumber: '+91 987-654-3210',
              rating: 4.2,
            },
          })
        }
      >
        <Image source={require('./assets/star.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Image source={require('./assets/person.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')}>
        <Image source={require('./assets/hp.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // bottomNav: {
  //   // flexDirection: 'row',
  //   // backgroundColor: '#9575CD',
  //   // padding: 10,
  //   // justifyContent: 'space-around',
  //   // borderTopLeftRadius: 20,
  //   // borderTopRightRadius: 20,
  //   // width:430,
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   height: 80,
  //   backgroundColor: '#8F87F1',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems:'center',
  //   elevation: 15,
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowOffset: { width: 0, height: -2 },
  //   shadowRadius: 5,
  //   width:'100%',
  // },
//   bottomNav: {
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   right: 0,
//   height: 90,
//   backgroundColor: '#8F87F1',
//   flexDirection: 'row',
//   justifyContent: 'space-around',
//   alignItems: 'center',
//   borderTopLeftRadius: 30, // Add this
//   borderTopRightRadius: 30, // Add this
//   elevation: 15,
//   shadowColor: '#000',
//   shadowOpacity: 0.1,
//   shadowOffset: { width: 0, height: -2 },
//   shadowRadius: 5,
//   overflow: 'hidden', // Makes sure the border radius is applied
// },
bottomNav: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 80,
  backgroundColor: '#8F87F1',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',

  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,

  overflow: 'hidden', // Ensures radius clips content
  elevation: 15,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: -2 },
  shadowRadius: 5,
},


  icon: {
    // width: 28,
    // height: 28,
    // tintColor: 'white',
  width: 38,
  height: 38,
  tintColor: '#fff',
  },
});

export default BottomNavigationBar;
























































































// import React from 'react';
// import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const BottomNavigationBar = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.navigate('HomeScreen ')}>
//         <Image source={require('./assets/Home.png')} style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('Hostel1', {
//             hostel: {
//               name: 'Hostel 1',
//               image: require('./assets/hostel1.jpg'),
//               price: '₹300/day',
//               contactName: 'John Doe',
//               contactNumber: '+91 987-654-3210',
//               rating: 4.2,
//             },
//           })
//         }
//       >
//         <Image source={require('./assets/star.png')} style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
//         <Image source={require('./assets/person.png')} style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')}>
//         <Image source={require('./assets/hp.png')} style={styles.icon} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default BottomNavigationBar;

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 70,
//     backgroundColor: '#8F87F1', // Purple background
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 0,
//     borderRadius: 0,
//     elevation: 10, // For Android shadow
//     shadowColor: '#000', // iOS shadow
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: -2 },
//     shadowRadius: 6,
//   },
//   icon: {
//     width: 28,
//     height: 28,
//     tintColor: '#fff',
//   },
// });

