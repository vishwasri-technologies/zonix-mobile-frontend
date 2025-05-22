import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookingScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./assets/backg.png')} // Reusing a background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image
              source={require('./assets/Home.png')} // Assuming you have a back arrow image
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Booking Types</Text>

          {/* Visit Booking Card */}
          <View style={styles.bookingCard}>
            <Text style={styles.cardTitle}>Visit Booking</Text>
            <View style={styles.featureItem}>
              <Image source={require('./assets/Home.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Select Date/Time</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require('./assets/Home.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Booking ID generation</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require('./assets/Home.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Whatsapp Alert to Hostel Owner</Text>
            </View>
            <Text style={styles.cashbackText}>
              150 Cashback for the first time visitors (redeemable on full-booking)
            </Text>
          </View>

          {/* Monthly Booking Card */}
          <View style={styles.bookingCard}>
            <Text style={styles.cardTitle}>Monthly Booking</Text>
            <View style={styles.featureItem}>
              <Image source={require('./assets/Home.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Choose Duration (1 month +)</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require('./assets/Home.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Payment Options</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require('./assets/Home.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Upload Documents</Text>
            </View>
          </View>

          {/* Book Now Button */}
          <TouchableOpacity style={styles.bookNowButton} onPress={() => console.log('Final Book Now Pressed!')}>
            <Text style={styles.bookNowText}>Book Now !!</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(241, 234, 234, 0.9)',
    padding: 16,
    overflow: 'hidden',
  },
  container: {
    paddingBottom: 30, // Add some padding at the bottom
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#6A5ACD', // Purple tint for icons
  },
  featureText: {
    fontSize: 16,
    color: '#555',
  },
  cashbackText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  bookNowButton: {
    backgroundColor: '#8F87F1', // Purple button
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  bookNowText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
