// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ImageBackground,
//   ScrollView,
// } from 'react-native';
// import BottomNavigationBar from './BottomNavigationBar';
// import { useNavigation } from '@react-navigation/native';


// export default function ProfileScreen() {
//   const navigation = useNavigation();
//   return (
//     <ImageBackground
//       source={require('./assets/backg.png')} // Replace with your background image
//       style={styles.background}
//       resizeMode="cover"
//     >
//     <View style={styles.overlay}>
//     <View style={{ flex: 1 }}>
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Curved top section */}
//         <View style={styles.topCurve}>
//           <Image
//             source={require('./assets/Profile.jpg')} // Replace with your profile image
//             style={styles.profileImage}
//           />
//         </View>

//         {/* Name & Phone */}
//         <Text style={styles.name}>Arjun</Text>
//         <Text style={styles.phone}>+91 123-456-7890</Text>

//         {/* Action Box */}
//         <View style={styles.actionBox}>
//           <TouchableOpacity style={styles.actionButton}>
//             <Image source={require('./assets/Home.png')} style={styles.icon} />
//             <Text style={styles.actionText}>Home</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.actionButton}>
//             <Image source={require('./assets/Booking.png')} style={styles.icon} />
//             <Text style={styles.actionText}>Bookings</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.actionButton}>
//             <Image source={require('./assets/Mange.png')} style={styles.icon} />
//             <Text style={styles.actionText}>Manage Security</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.actionButton}>
//             <Image source={require('./assets/Cashback.png')} style={styles.icon} />
//             <Text style={styles.actionText}>Cashback Earned</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.actionButton}>
//             <Image source={require('./assets/contact.png')} style={styles.icon} />
//             <Text style={styles.actionText}>Contact Us</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.logoutButton}>
//           <Image source={require('./assets/logout.png')} style={styles.icon} />
//             <Text style={styles.logoutText}>Logout</Text>
//           </TouchableOpacity>
//         </View>

//       </ScrollView>
//       {/* <BottomNavigationBar navigation={useNavigation} /> */}
//       <BottomNavigationBar navigation={navigation} />
// </View>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(241, 234, 234, 0.9)',
//     padding: 16,
//     borderBottomRightRadius: 40,
//     overflow: 'hidden',
//   },
//   container: {
//     paddingBottom: 120,
//     alignItems: 'center',
//   },
//   topCurve: {
//     backgroundColor: '#8F87F1',
//     width: '100%',
//     height: 160,
//     borderBottomRightRadius: 120,
//     borderBottomLeftRadius: -20,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     paddingBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderColor: '#fff',
//     borderWidth: 3,
//   },
//   name: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     marginTop: 12,
//   },
//   phone: {
//     fontSize: 20,
//     marginBottom: 20,
//     marginTop:20,
//   },
//   actionBox: {
//     backgroundColor: '#B8A8F1',
//     borderRadius: 20,
//     padding: 16,
//     width: '90%',
//     alignItems: 'center',
//     gap: 20,
//     height:'60%',
//     marginTop:10,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     backgroundColor: '#D7CCF1',
//     borderRadius: 12,
//     padding: 10,
//     width: '90%',
//     alignItems: 'center',
//     gap: 20,
//   },
//   actionText: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   icon: {
//     width: 27,
//     height: 27,
//     tintColor: '#333',
//   },
//   logoutButton: {
//     backgroundColor: '#D7CCF1',
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 20,
//     marginTop: 20,
//     width:200,
//     height:70,
//   },
//   logoutText: {
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });



































































import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomNavigationBar from './BottomNavigationBar'; // Ensure correct path

export default function ProfileScreen() {
  const navigation = useNavigation(); // This will now correctly get the navigation object

  return (
    <ImageBackground
      source={require('./assets/backg.png')} // Replace with your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.container}>
            {/* Curved top section */}
            <View style={styles.topCurve}>
              <Image
                source={require('./assets/Profile.jpg')} // Replace with your profile image
                style={styles.profileImage}
              />
            </View>

            {/* Name & Phone */}
            <Text style={styles.name}>Arjun</Text>
            <Text style={styles.phone}>+91 123-456-7890</Text>

            {/* Action Box */}
            <View style={styles.actionBox}>
              <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('HomeScreen')}>
                <Image source={require('./assets/Home.png')} style={styles.icon} />
                <Text style={styles.actionText}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Bookings pressed')}>
                <Image source={require('./assets/Booking.png')} style={styles.icon} />
                <Text style={styles.actionText}>Bookings</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Manage Security pressed')}>
                <Image source={require('./assets/Mange.png')} style={styles.icon} />
                <Text style={styles.actionText}>Manage Security</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Cashback Earned pressed')}>
                <Image source={require('./assets/Cashback.png')} style={styles.icon} />
                <Text style={styles.actionText}>Cashback Earned</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('HelpScreen')}>
                <Image source={require('./assets/contact.png')} style={styles.icon} />
                <Text style={styles.actionText}>Contact Us</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('LoginScreen')}>
                <Image source={require('./assets/logout.png')} style={styles.icon} />
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <BottomNavigationBar navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginTop:50,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(241, 234, 234, 0.9)',
    padding: 16,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  container: {
    paddingBottom: 120, // Make space for the bottom navigation bar
    alignItems: 'center',
  },
  topCurve: {
    backgroundColor: '#8F87F1',
    width: '100%',
    height: 160,
    borderBottomRightRadius: 120,
    borderBottomLeftRadius: -20, // This might not have the desired visual effect depending on RN version/platform
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 3,
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 12,
  },
  phone: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  actionBox: {
    backgroundColor: '#B8A8F1',
    borderRadius: 20,
    padding: 16,
    width: '90%',
    alignItems: 'center',
    gap: 20, // Using gap property for spacing
    height: '60%', // Consider using flex: 1 or minHeight instead of fixed height
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    backgroundColor: '#D7CCF1',
    borderRadius: 12,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    gap: 20, // Using gap property for spacing
  },
  actionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  icon: {
    width: 27,
    height: 27,
    tintColor: '#333',
  },
  logoutButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    width: 200,
    height: 70,
    flexDirection: 'row', // Added to align icon and text
    alignItems: 'center', // Added to align icon and text
    justifyContent: 'center', // Added to center content
    gap: 10, // Added for spacing between icon and text
  },
  logoutText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16, // Added font size for consistency
  },
});
