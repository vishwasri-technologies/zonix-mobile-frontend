
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Hostel2Info = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // Expecting 'hostel' object to be passed from Hostel1 screen
  const { hostel } = route.params || {}; // Use default empty object to prevent crashes if params are missing

  // Default data if hostel object is not passed or incomplete
  const defaultHostel = {
    name: 'Hostel 1',
    image: require('./assets/hostel2.jpg'), // Main image
    thumbnail: require('./assets/hostel2.jpg'), // Thumbnail image (reusing for demo)
    rating: 4.5,
    reviews: 155,
    features: [
      'luxurious Mattresses',
      'Stationary, Library',
      'Cafes, Gyms, Parks',
    ],
    nearby: [
      'Peaceful Atmosphere',
      'Park, Gyms',
      'Cafes, Hotels',
      'Internet Shop',
    ],
  };

  const currentHostel = { ...defaultHostel, ...hostel }; // Merge passed data with defaults

  return (
    <ImageBackground
      source={require('./assets/hostel1infoback.jpg')} // Replace with your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Top Bar: Back Button, Tags, Help */}
          <View style={styles.topBar}> {/* Re-added topBar View to correctly position elements */}
            {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image
                source={require('./assets/back_arrow.png')} // Assuming you have a back arrow image
                style={styles.backIcon}
              />
            </TouchableOpacity> */}
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
          </View>

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
              {/* Map Image */}
              <View style={styles.mapImageContainer}> {/* New container for map image */}
                <Image
                  source={require('./assets/Map.jpg')} // Your map image
                  style={styles.mapImage}
                  resizeMode="cover" // Ensure image covers the area
                />
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
          <TouchableOpacity
            style={styles.bookNowButton}
            onPress={() => navigation.navigate('BookingScreen', { hostel: currentHostel })}
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
    marginTop: 50, // Removed fixed marginTop to let StatusBar handle spacing
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
  topBar: { // Re-added this style for the container of back button, tags, and help
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.1)', // Changed from rgba(225, 162, 162, 0.1) for consistency
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    marginHorizontal: 10,
    gap: 5,
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 15,
    backgroundColor: '#D7CCF1',
  },
  verifiedTag: {
    backgroundColor: '#C8FAD1',
  },
  availableTag: {
    backgroundColor: '#C8FAD1',
  },
  popularTag: {
    backgroundColor: '#C8FAD1',
    marginLeft:200,
     marginTop:-30,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  helpText: {
    color: '#2A72E9',
    fontWeight: 'bold',
    fontSize: 19,
    // Removed fixed marginLeft to allow flexbox to handle spacing
    // This will align it to the right within the topBar
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
    height: 200,
  },
  mainImage: {
    width: '60%',
    height: '100%',
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
  mapImageContainer: { // New style for the container holding the map image
    width: 150,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden', // Crucial to clip image to border radius
    marginLeft: 10,
    backgroundColor: '#E0E0E0', // Fallback background
  },
  mapImage: { // Style for the actual map image
    width: '100%',
    height: '100%',
    // The borderRadius is applied to the container, so the image will clip
  },
  ratingsCard: {
    alignItems: 'flex-start',
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
    color: '#FFD700',
  },
  reviewCount: {
    fontSize: 16,
    color: 'gray',
  },
  bookNowButton: {
    backgroundColor: '#8F87F1',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    width:200,
    marginLeft:90,
  },
  bookNowText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    
  },
});

export default Hostel2Info;








