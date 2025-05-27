import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookingScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./assets/bookingback.jpg')} // Reusing a background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Back Button */}
          {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image
              source={require('./assets/Home.png')} // Assuming you have a back arrow image
              style={styles.backIcon}
            />
          </TouchableOpacity> */}

          <Text style={styles.title}>Booking Types</Text>

          {/* Visit Booking Card */}
          {/* <View style={styles.bookingCard}>
          <Image source={require('./assets/vist booking.png')} style={styles.featureIcon} />
            <Text style={styles.cardTitle}>Visit Booking</Text> */}
            <View style={styles.bookingCard}>
            {/* MODIFIED: Wrapped image and text for horizontal alignment */}
            <View style={styles.cardTitleContainer}>
              <Image source={require('./assets/vistbooking.png')} style={styles.cardTitleIcon} />
              <Text style={styles.cardTitle}>Visit Booking</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require('./assets/selectdate.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Select Date/Time</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require('./assets/bookingID.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Booking ID generation</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require('./assets/whatsapp.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Whatsapp Alert to Hostel Owner</Text>
            </View>
            <Text style={styles.cashbackText}>
              150 Cashback for the first time visitors (redeemable on full-booking)
            </Text>
          </View>

          {/* Monthly Booking Card */}
          {/* <View style={styles.bookingCard}>
          <Image source={require('./assets/Monthly Booking.png')} style={styles.featureIcon} />
            <Text style={styles.cardTitle}>Monthly Booking</Text> */}
            <View style={styles.bookingCard}>
            {/* MODIFIED: Wrapped image and text for horizontal alignment */}
            <View style={styles.cardTitleContainer}>
              <Image source={require('./assets/MonthlyBooking.png')} style={styles.cardTitleIcon} />
              <Text style={styles.cardTitle}>Monthly Booking</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require('./assets/selectdate.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Choose Duration (1 month +)</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require('./assets/paymentoption.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Payment Options</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require('./assets/uploadDocuments.png')} style={styles.featureIcon} />
              <Text style={styles.featureText}>Upload Documents</Text>
            </View>
          </View>

          {/* Book Now Button */}
          <TouchableOpacity style={styles.bookNowButton} onPress={() => navigation.navigate('BookingThankYouScreen')}>
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
     marginTop:50,
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
  // backButton: {
  //   alignSelf: 'flex-start',
  //   marginTop: 10,
  //   marginBottom: 20,
  //   padding: 8,
  //   borderRadius: 20,
  //   backgroundColor: 'rgba(0,0,0,0.1)',
  // },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom:30,
  },
  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitleContainer: { // New style for the container holding the title icon and text
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, // Keep spacing consistent
  },
  cardTitleIcon: { // New style for the icon next to the card title
    width: 45, // Adjust size as needed
    height: 45, // Adjust size as needed
    marginRight: 20,
    tintColor: '#333', 
    marginLeft: 30,// Example tint color
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureIcon: {
    width: 35,
    height: 35,
    marginRight: 20,
    tintColor: '#333',
    marginLeft: 30,
  },
  featureText: {
    fontSize: 19,
    color: 'bold',
  },
  cashbackText: {
    fontSize: 16,
    color: 'bold',
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center',
    marginLeft: 30,
  },
  bookNowButton: {
    backgroundColor: '#8F87F1', // Purple button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    width:200,
    marginLeft:100,
  },
  bookNowText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
