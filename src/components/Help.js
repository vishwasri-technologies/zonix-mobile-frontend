import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BottomNavigationBar from './BottomNavigationBar';

export default function HelpScreen({ navigation }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };



  // const handleSubmit = () => {
  //   console.log('Submitted form:', form);
  //   // You can add validation or backend integration here
  //   alert('Form submitted!');
  // };
  const handleSubmit = () => {
    // Do any validation or API call here if needed
    // Navigate to the Thank You screen
    navigation.navigate('ContactThankYou');
  };
  return (
    <ImageBackground
      source={require('./assets/newbed.jpg')} // replace with your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Connect with Us !!</Text>
          <Text style={styles.subtitle}>
            We’re here to help you with Hostel Bookings, questions, or just to say Hello!!{'\n'}
            Reach out to us anytime -- We’d love to hear from you.
          </Text>
          <Text style={styles.label}>Full Name</Text>

          <TextInput
            placeholder="Enter your Full Name"
            value={form.name}
            onChangeText={(text) => handleInputChange('name', text)}
            style={styles.input}
          />
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="Enter your Email Address"
            value={form.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            style={styles.input}
          />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Enter your Phone Number"
            value={form.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
            keyboardType="phone-pad"
            style={styles.input}
          />
          <Text style={styles.label}>Booking Help</Text>
          <TextInput
            placeholder=" Description..."
            value={form.message}
            onChangeText={(text) => handleInputChange('message', text)}
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textArea]}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
            </View>
            <BottomNavigationBar navigation={useNavigation} />
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
    backgroundColor: 'rgba(245, 230, 230, 0.9)',
    paddingHorizontal: 20,
  },
  container: {
    paddingTop: 60,
    paddingBottom: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
    color: '#444',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
    marginTop:20,
    elevation: 2,
  },
  label: {
    marginTop: 12,
    marginBottom: -17,
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    elevation: 3,
    marginTop:20,
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
