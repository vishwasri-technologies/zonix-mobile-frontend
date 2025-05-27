import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function ContactThankYouScreen() {
  return (
    <ImageBackground
      source={require('./assets/blue.png')} // Replace with your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.messageBox}>
          <Text style={styles.thankText}>Thank you For Contacting Zonix</Text>
        </View>

        <View style={styles.feedbackBox}>
          <Text style={styles.feedbackText}>
            <Text style={styles.boldText}> We will take yourFeedback Into Consideration
            and resolve your Problem ASAP !!</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(164, 244, 248, 0.6)', 
     marginTop:50,
  },
  overlay: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  messageBox: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  thankText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  feedbackBox: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    elevation: 4,
    maxWidth: '90%',
  },
  feedbackText: {
    fontSize: 18,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
