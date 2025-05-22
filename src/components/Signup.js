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
      source={require('./assets/backg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Svg height="160" width={width} viewBox={`0 0 ${width} 155`}>
          <Path
            d={`M0,0 L0,140 Q${width / 1},130 ${width},-80 L${width},2 Z`}
            fill="#8F87F1"
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

          <View style={styles.genderRow}>
            <Text style={styles.genderLabel}>Gender</Text>
            <Pressable
              style={[styles.genderBox, gender === 'Male' && styles.checked]}
              onPress={() => setGender('Male')}
            >
              <Text style={styles.genderText}> Male</Text>
            </Pressable>
            <Pressable
              style={[styles.genderBox, gender === 'Female' && styles.checked]}
              onPress={() => setGender('Female')}
            >
              <Text style={styles.genderText}>Female</Text>
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

          <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('LoginScreen')}
>
  <Text style={styles.buttonText}>Register</Text>
</TouchableOpacity>


          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.loginLink}> login here</Text>
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
    marginTop:45,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  title: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'serif',
  },
  form: {
    padding: 20,
    paddingTop: 60,
    marginTop: -70,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    height:55,
  },
  genderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  genderLabel: {
    marginRight: 10,
    fontWeight: '500',
  },
  genderBox: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#8F87F1',
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  checked: {
    backgroundColor: '#CFCBFA',
  },
  genderText: {
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#8F87F1',
    borderRadius: 24,
    padding: 14,
    marginTop: 20,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
