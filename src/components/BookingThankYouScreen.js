import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookingThankYouScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./assets/BookingThankYouScreenback.jpg')} // Reusing a background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.thankYouText}>Thank you For Booking at</Text>
          <Text style={styles.appName}>Zonix!!</Text>
          {/* You might want to add a button to go back to Home or Profile */}
          {/* <TouchableOpacity
            style={styles.homeButton}
            onPress={() => navigation.navigate('HomeScreen')} // Navigate back to HomeScreen
          >
            <Text style={styles.homeButtonText}>Go to Home</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(246, 242, 251, 0.6)', // Slightly more transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'bold', // A purple color for Zonix
    textAlign: 'center',
    marginBottom: 20,
  },
  // homeButton: {
  //   backgroundColor: '#8F87F1',
  //   paddingVertical: 12,
  //   paddingHorizontal: 25,
  //   borderRadius: 25,
  //   marginTop: 20,
  // },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookingThankYouScreen;
