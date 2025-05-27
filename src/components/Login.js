// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// // Adjust path as needed

// const LoginScreen = () => {
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={require('./assets/chair.png')} // Make sure the path is correct
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Login</Text>

//         <TextInput
//           placeholder="Email/Phone"
//           style={styles.input}
//           onChangeText={setEmailOrPhone}
//         />
//         <TextInput
//           placeholder="Password"
//           style={styles.input}
//           secureTextEntry
//           onChangeText={setPassword}
//         />

//         <View style={styles.loginContainer}>
//           <TouchableOpacity onPress={() => navigation.navigate('CreatePasswordScreen')}>
//             <Text style={styles.forgotPassword}>Forgot password?</Text>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('HomeScreen')}
//         >
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <View style={styles.signupContainer}>
//           <Text style={styles.signupText}>Not have an account?</Text>
//           <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
//             <Text style={styles.signupLink}> Signup here</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 24,
//     backgroundColor: 'rgba(255,255,255,0.85)', // soften background
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     marginBottom: 60,
//   },
//   input: {
//     backgroundColor: '#fff',
//     borderRadius: 6,
//     padding: 12,
//     marginVertical: 8,
//     elevation: 1,
//   },
//   forgotPassword: {
//     textAlign: 'right',
//     color: '#2A72E9',
//     marginBottom: 12,
//   },
//   loginContainer: {
//     alignItems: 'flex-end',
//   },
//   button: {
//     backgroundColor: '#8F87F1',
//     padding: 14,
//     borderRadius: 24,
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   signupText: {
//     color: '#666',
//   },
//   signupLink: {
//     color: '#2A72E9',
//     fontWeight: 'bold',
//   },
// });










































// LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  // SafeAreaView,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomCurve from './BottomCurve'; // Make sure the path is correct

const LoginScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  return (
    // < SafeAreaView style={styles.safeArea}>
    <ImageBackground
      source={require('./assets/chair.png')} // Adjust path as needed
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your Email/Phone"
          style={styles.input}
          onChangeText={setEmailOrPhone}
        />
        <Text style={styles.label}> Password</Text>
        <TextInput
          placeholder="Enter your Password"
          style={styles.input}
          secureTextEntry
          onChangeText={setPassword}
        />

        <View style={styles.loginContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('CreatePasswordScreen')}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Not have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.signupLink}> Signup here</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomCurve />
    </ImageBackground>
    // </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  // safeArea: { // Style for SafeAreaView
  //   flex: 1,
  //   backgroundColor: '#fff', // Set a background color that matches your screen's general background
  // },
  background: {
    flex: 1,
   marginTop:50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 60,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 12,
    marginVertical: 8,
    elevation: 1,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#2A72E9',
    marginBottom: 12,
  },
  label:{
    marginVertical:10,
    fontSize:18,
  },
  loginContainer: {
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#8F87F1',
    padding: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#666',
  },
  signupLink: {
    color: '#2A72E9',
    fontWeight: 'bold',
  },
});
