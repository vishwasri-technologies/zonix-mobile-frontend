// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   ImageBackground,
//   Alert,
// } from 'react-native';
// import Svg, { Path } from 'react-native-svg';
// import { useNavigation } from '@react-navigation/native';

// const { width } = Dimensions.get('window');

// const CreatePasswordScreen = () => {
//   const navigation = useNavigation();

//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSavePassword = () => {
//     if (!email || !newPassword || !confirmPassword) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match.');
//       return;
//     }

//     // Perform API call or logic here

//     Alert.alert('Success', 'Password updated successfully!');
//     navigation.navigate('LoginScreen');
//   };

//   return (
//     <ImageBackground
//       source={require('./assets/blue.png')} // Update this path if needed
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.overlay}>
//         <Svg height="160" width={width} viewBox={`0 0 ${width} 160`}>
//           <Path
//             d={`M0,0 L0,120 Q${width / 2},180 ${width},120 L${width},0 Z`}
//             fill="#8F87F1"
//           />
//         </Svg>

//         <Text style={styles.title}>Create new password</Text>

//         <View style={styles.form}>
//           <TextInput
//             placeholder="Email"
//             keyboardType="email-address"
//             style={styles.input}
//             value={email}
//             onChangeText={setEmail}
//           />
//           <TextInput
//             placeholder="New Password"
//             secureTextEntry
//             style={styles.input}
//             value={newPassword}
//             onChangeText={setNewPassword}
//           />
//           <TextInput
//             placeholder="Confirm Password"
//             secureTextEntry
//             style={styles.input}
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//           />

//           <TouchableOpacity style={styles.button} onPress={handleSavePassword}>
//             <Text style={styles.buttonText}>Save password</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// export default CreatePasswordScreen;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(255,255,255,0.85)',
//   },
//   title: {
//     position: 'absolute',
//     top: 100,
//     alignSelf: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   form: {
//     padding: 20,
//     marginTop: 160,
//   },
//   input: {
//     backgroundColor: '#fff',
//     borderRadius: 6,
//     padding: 12,
//     marginVertical: 10,
//     elevation: 1,
//   },
//   button: {
//     backgroundColor: '#8F87F1',
//     borderRadius: 24,
//     padding: 12,
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

































import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CreatePasswordScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSavePassword = () => {


    navigation.navigate('LoginScreen');
  };

  return (
    <ImageBackground
      source={require('./assets/blue.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Svg height="160" width={width} viewBox={`0 0 ${width} 160`}>
          <Path
            d={`M0,0 L0,120 Q${width / 2},180 ${width},120 L${width},0 Z`}
            fill="#8F87F1"
          />
        </Svg>

        <Text style={styles.title}>Create new password</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />

          <Text style={styles.label}>New Password</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="Enter new password"
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Re-enter new password"
          />

          <TouchableOpacity style={styles.button} onPress={handleSavePassword}>
            <Text style={styles.buttonText}>Save password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CreatePasswordScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
   marginTop:50,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  title: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  form: {
    padding: 20,
    marginTop: 160,
  },
  label: {
    marginTop: 12,
    marginBottom: 10,
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 12,
    elevation: 1,
  },
  button: {
    backgroundColor: '#8F87F1',
    borderRadius: 24,
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
