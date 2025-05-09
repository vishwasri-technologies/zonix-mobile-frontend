// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Pressable,
//   ScrollView,
//   Dimensions,
//   ImageBackground,
// } from 'react-native';
// import Svg, { Path } from 'react-native-svg';
// import { useNavigation } from '@react-navigation/native';
// export default SignupScreen;


// const { width } = Dimensions.get('window');
// const HostelCard = () => {
//   const navigation = useNavigation();

//   const handlePress = () => {
//     navigation.navigate('Login'); // This must match your stack screen name
//   };


// const SignupScreen = () => {
//   const [gender, setGender] = useState(null);
//   const [form, setForm] = useState({
//     fullName: '',
//     dob: '',
//     mobile: '',
//     email: '',
//     aadhaar: '',
//     otp: '',
//     guardian: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleInputChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   return (
//     <ImageBackground
//       source={require('./assets/backg.png')} // Update the path to your image
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.overlay}>
//         {/* Curved Blue Header */}
//         <Svg height="160" width={width} viewBox={`0 0 ${width} 160`}>
//           <Path
//             d={`
//               M0,0
//               L0,120
//               Q${width / 2},180 ${width},120
//               L${width},0
//               Z
//             `}
//             fill="#2A72E9"
//           />
//         </Svg>

//         <Text style={styles.title}>Signup</Text>

//         <ScrollView contentContainerStyle={styles.form}>
//           <TextInput placeholder="Full Name" style={styles.input} onChangeText={(text) => handleInputChange('fullName', text)} />
//           <TextInput placeholder="Date of Birth" style={styles.input} onChangeText={(text) => handleInputChange('dob', text)} />

//           <View style={styles.genderContainer}>
//             <Text style={{ marginRight: 10 }}>Gender:</Text>
//             <Pressable style={[styles.checkbox, gender === 'Male' && styles.checked]} onPress={() => setGender('Male')}>
//               <Text>Male</Text>
//             </Pressable>
//             <Pressable style={[styles.checkbox, gender === 'Female' && styles.checked]} onPress={() => setGender('Female')}>
//               <Text>Female</Text>
//             </Pressable>
//           </View>

//           <TextInput placeholder="Mobile Number" keyboardType="numeric" style={styles.input} onChangeText={(text) => handleInputChange('mobile', text)} />
//           <TextInput placeholder="Email ID" keyboardType="email-address" style={styles.input} onChangeText={(text) => handleInputChange('email', text)} />
//           <TextInput placeholder="Aadhaar Number" keyboardType="numeric" style={styles.input} onChangeText={(text) => handleInputChange('aadhaar', text)} />
//           <TextInput placeholder="Enter OTP" keyboardType="numeric" style={styles.input} onChangeText={(text) => handleInputChange('otp', text)} />
//           <TextInput placeholder="Guardian Number" keyboardType="numeric" style={styles.input} onChangeText={(text) => handleInputChange('guardian', text)} />
//           <TextInput placeholder="Create Password" secureTextEntry style={styles.input} onChangeText={(text) => handleInputChange('password', text)} />
//           <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} onChangeText={(text) => handleInputChange('confirmPassword', text)} />

//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Register</Text>
//           </TouchableOpacity>

//           {/* <Text style={styles.loginText}>
//             Already have an account?
//             <Text style={{ color: '#2A72E9' }}> login here</Text>
//           </Text> */}
//           <View style={styles.loginContainer}>
//   <Text style={styles.loginText}>Already have an account?</Text>
//   <TouchableOpacity onPress={() => console.log('Navigate to Login')}>
//     {/* Replace console.log with navigation logic */}
//     <Text style={styles.loginLink}>Login here</Text>
//   </TouchableOpacity>
// </View>


//         </ScrollView>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(255,255,255,0.85)', // Optional: soften image background
//   },
//   title: {
//     position: 'absolute',
//     top: 100,
//     alignSelf: 'center',
//     fontSize: 24,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   form: {
//     padding: 16,
//     paddingTop: 0,
//   },
//   input: {
//     backgroundColor: '#fff',
//     borderRadius: 6,
//     padding: 12,
//     marginVertical: 6,
//     elevation: 1,
//   },
//   genderContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   checkbox: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'blue',
//     marginHorizontal: 5,
//     borderRadius: 6,
//   },
//   checked: {
//     backgroundColor: '#ADD8E6',
//   },
//   button: {
//     backgroundColor: '#2A72E9',
//     borderRadius: 24,
//     padding: 12,
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   loginContainer: {
//   flexDirection: 'row',
//   justifyContent: 'center',
//   marginTop: 16,
// },
// loginText: {
//   color: '#666',
// },
// loginLink: {
//   color: '#2A72E9',
//   marginLeft: 5,
//   fontWeight: 'bold',
// },


// });


















import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const SignupScreen = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('LoginScreen'); // This must match your stack screen name
  };
  const [gender, setGender] = useState(null);

  const [form, setForm] = useState({
    fullName: '',
    dob: '',
    mobile: '',
    email: '',
    aadhaar: '',
    otp: '',
    guardian: '',
    password: '',
    confirmPassword: '',
  });


  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <ImageBackground
      source={require('./assets/backg.png')} // Update path to your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Curved Header */}
        <Svg height="160" width={width} viewBox={`0 0 ${width} 160`}>
          <Path
            d={`M0,0 L0,120 Q${width / 2},180 ${width},120 L${width},0 Z`}
            fill="#2A72E9"
          />
        </Svg>

        <Text style={styles.title}>Signup</Text>

        <ScrollView contentContainerStyle={styles.form}>
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            onChangeText={(text) => handleInputChange('fullName', text)}
          />
          <TextInput
            placeholder="Date of Birth"
            style={styles.input}
            onChangeText={(text) => handleInputChange('dob', text)}
          />

          <View style={styles.genderContainer}>
            <Text style={{ marginRight: 10 }}>Gender:</Text>
            <Pressable
              style={[styles.checkbox, gender === 'Male' && styles.checked]}
              onPress={() => setGender('Male')}
            >
              <Text>Male</Text>
            </Pressable>
            <Pressable
              style={[styles.checkbox, gender === 'Female' && styles.checked]}
              onPress={() => setGender('Female')}
            >
              <Text>Female</Text>
            </Pressable>
          </View>

          <TextInput
            placeholder="Mobile Number"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => handleInputChange('mobile', text)}
          />
          <TextInput
            placeholder="Email ID"
            keyboardType="email-address"
            style={styles.input}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <TextInput
            placeholder="Aadhaar Number"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => handleInputChange('aadhaar', text)}
          />
          <TextInput
            placeholder="Enter OTP"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => handleInputChange('otp', text)}
          />
          <TextInput
            placeholder="Guardian Number"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => handleInputChange('guardian', text)}
          />
          <TextInput
            placeholder="Create Password"
            secureTextEntry
            style={styles.input}
            onChangeText={(text) => handleInputChange('password', text)}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
            onChangeText={(text) => handleInputChange('confirmPassword', text)}
          />

          <TouchableOpacity style={styles.button} onPress={handlePress }>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.loginLink}> Login here</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;
const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.85)', // Slight white overlay on background
    },
    title: {
      position: 'absolute',
      top: 100,
      alignSelf: 'center',
      fontSize: 24,
      color: '#fff',
      fontWeight: 'bold',
    },
    form: {
      padding: 16,
      paddingTop: 0, // Remove space under the curved header
      marginTop: -40, // Pull content up to remove gap between curve and form
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 6,
      padding: 12,
      marginVertical: 6,
      elevation: 1,
    },
    genderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    checkbox: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'blue',
      marginHorizontal: 5,
      borderRadius: 6,
    },
    checked: {
      backgroundColor: '#ADD8E6',
    },
    button: {
      backgroundColor: '#2A72E9',
      borderRadius: 24,
      padding: 12,
      marginTop: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 16,
    },
    loginText: {
      color: '#666',
    },
    loginLink: {
      color: '#2A72E9',
      marginLeft: 5,
      fontWeight: 'bold',
    },
  });

