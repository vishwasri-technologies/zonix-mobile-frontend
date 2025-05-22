import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Hostel1Info = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // Expecting 'hostel' object to be passed from Hostel1 screen
  const { hostel } = route.params || {}; // Use default empty object to prevent crashes if params are missing

  // Default data if hostel object is not passed or incomplete
  const defaultHostel = {
    name: 'Hostel 1',
    image: require('./assets/hostel1.jpg'), // Main image
    thumbnail: require('./assets/hostel2.jpg'), // Thumbnail image (reusing for demo)
    rating: 4.5,
    reviews: 155,
    features: [
      'Air Conditioner',
      'Stationary, Library',
      'WiFi, Gyms, Cafes',
    ],
    nearby: [
      'Peaceful Atmosphere',
      'Park, Gyms',
      'Cafes, Hotels',
      'Bus Station & Railway Station',
    ],
  };

  const currentHostel = { ...defaultHostel, ...hostel }; // Merge passed data with defaults

  return (
    <ImageBackground
      source={require('./assets/backg.png')} // Replace with your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Top Bar: Back Button, Tags, Help */}
            <View style={styles.tagContainer}>
              <View style={[styles.tag, styles.verifiedTag]}>
                <Text style={styles.tagText}>✔ Verified Hostel</Text>
              </View>
              <View style={[styles.tag, styles.availableTag]}>
                <Text style={styles.tagText}>✔ Available</Text>
              </View>
              <View style={[styles.tag, styles.popularTag]}>
                <Text style={styles.tagText}>Popular among your college batch</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')}>
              <Text style={styles.helpText}>Help?</Text>
            </TouchableOpacity>

          {/* Hostel Name */}
          <Text style={styles.hostelName}>{currentHostel.name}</Text>

          {/* Hostel Images */}
          <View style={styles.imagesContainer}>
            <Image source={currentHostel.image} style={styles.mainImage} />
            <Image source={currentHostel.thumbnail} style={styles.thumbnailImage} />
          </View>

          {/* Hostel Features and Facilities */}
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Hostel Features and Facilities</Text>
            {currentHostel.features.map((feature, index) => (
              <Text key={index} style={styles.bulletPoint}>• {feature}</Text>
            ))}
          </View>

          {/* Nearby Facilities */}
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Nearby Facilities</Text>
            <View style={styles.nearbyContent}>
              <View style={styles.nearbyList}>
                {currentHostel.nearby.map((item, index) => (
                  <Text key={index} style={styles.bulletPoint}>• {item}</Text>
                ))}
              </View>
              {/* Map Placeholder */}
              <View style={styles.mapPlaceholder}>
                <Text style={styles.mapText}>Map goes here</Text>
                {/* You could embed a static map image or a map component here */}
              </View>
            </View>
          </View>

          {/* Ratings & Student Reviews */}
          <View style={[styles.sectionCard, styles.ratingsCard]}>
            <Text style={styles.sectionTitle}>Ratings & Student Reviews</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.ratingScore}>{currentHostel.rating}</Text>
              <View style={styles.starsContainer}>
                {[...Array(5)].map((_, i) => (
                  <Text key={i} style={styles.starIcon}>
                    {i < Math.floor(currentHostel.rating) ? '⭐' : '☆'}
                  </Text>
                ))}
              </View>
              <Text style={styles.reviewCount}>({currentHostel.reviews})</Text>
            </View>
          </View>

          {/* Book Now Button */}
          {/* <TouchableOpacity style={styles.bookNowButton} onPress={() => console.log('Book Now pressed!')}>
            <Text style={styles.bookNowText}>Book Now !!</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.bookNowButton}
            onPress={() => navigation.navigate('BookingScreen', { hostel: currentHostel })} // Pass hostel data if needed
          >
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
    paddingBottom: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(225, 162, 162, 0.1)',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow tags to wrap to next line
    flex: 1, // Take available space
    marginHorizontal: 10,
    gap: 5, // Space between tags
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 15,
    backgroundColor: '#D7CCF1', // Default tag background
  },
  verifiedTag: {
    backgroundColor: '#C8FAD1', // Greenish for verified
  },
  availableTag: {
    backgroundColor: '#C8FAD1', // Greenish for available
  },
  popularTag: {
    backgroundColor: '#C8FAD1', // Reddish for popular
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  helpText: {
    color: '#2A72E9',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft:350,
    marginTop:20,
  },
  hostelName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 200, // Fixed height for image container
  },
  mainImage: {
    width: '60%',
    height: '90%',
    borderRadius: 15,
  },
  thumbnailImage: {
    width: '25%',
    height: '100%',
    borderRadius: 80,
  },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  nearbyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nearbyList: {
    flex: 1,
    marginRight: 10,
  },
  mapPlaceholder: {
    width: 150, // Fixed width for map placeholder
    height: 150, // Fixed height for map placeholder
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  mapText: {
    color: '#888',
    fontSize: 14,
  },
  ratingsCard: {
    alignItems: 'flex-start', // Align content to start
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingScore: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  starIcon: {
    fontSize: 24,
    color: '#FFD700', // Gold color for stars
  },
  reviewCount: {
    fontSize: 16,
    color: 'gray',
  },
  bookNowButton: {
    backgroundColor: '#8F87F1', // Purple button
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30, // Extra space at bottom
  },
  bookNowText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Hostel1Info;









