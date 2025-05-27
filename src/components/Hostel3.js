import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, Modal, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomNavigationBar from './BottomNavigationBar';
const Hostel3 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // Expecting 'hostel' object to be passed from HomeScreen
  const { hostel } = route.params || {};

  // State for filter modal visibility and filter criteria (copied from Hostel1.js)
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [minBudget, setMinBudget] = useState(700);
  const [maxBudget, setMaxBudget] = useState(2000);
  const [amenities, setAmenities] = useState({
    wifi: false,
    ac: false,
    meals: false,
    privateRoom: false,
  });
  const [distance, setDistance] = useState(5); // in km

  // Function to apply filters (for demonstration, logs and closes modal)
  const applyFilters = () => {
    console.log('Applying Filters from Hostel2:', {
      minBudget,
      maxBudget,
      amenities,
      distance,
    });
    // In a real scenario, you would likely navigate back to HomeScreen
    // or a dedicated filtered results screen with these parameters.
    setShowFilterModal(false); // Close modal
  };

  // Function to reset filters when modal is closed without applying
  const resetFilters = () => {
    setMinBudget(700);
    setMaxBudget(2000);
    setAmenities({ wifi: false, ac: false, meals: false, privateRoom: false });
    setDistance(5);
    setShowFilterModal(false);
  };

  // Default data for the hostel if params are missing (for safety)
  const defaultHostel = {
    name: 'Hostel 3',
    image: require('./assets/hostel3.jpg'), // Default image for Hostel 2
    price: '₹500/day',
    contactName: 'SAI',
    contactNumber: '+91 123-456-7890',
    rating: 4.0, // Default rating
  };

  // Merge passed data with defaults
  const currentHostel = { ...defaultHostel, ...hostel };

  return (
    <ImageBackground
      source={require('./assets/backg.png')} // Reusing a background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Top Header Bar: Back Button and Filter Icon */}
          {/* <View style={styles.topHeaderBar}>
            {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image
                source={require('./assets/back_arrow.png')}
                style={styles.backIcon}
              /> */}
            {/* </TouchableOpacity> */}
            {/* Filter Icon to open modal */}
            {/* <TouchableOpacity style={styles.filterIconContainer} onPress={() => setShowFilterModal(true)}>
              <Image source={require('./assets/Filt.png')} style={styles.filterIcon} />
            </TouchableOpacity>
          </View> */}

          {/* Smart Suggestions Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Smart Suggestions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')}>
              <Text style={styles.helpText}>Help?</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>Your Friend stays here ....</Text>
          {/* Hostel Image and Info Card */}
          <View style={styles.topHeaderBar}>
            {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image
                source={require('./assets/back_arrow.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity> */}

            {/* Filter Icon to open modal */}
            <TouchableOpacity style={styles.filterIconContainer} onPress={() => setShowFilterModal(true)}>
              <Image source={require('./assets/Filt.png')} style={styles.filterIcon} />
            </TouchableOpacity>
            </View>

          {/* Hostel Image and Info Card */}
          <View style={styles.hostelCard}>
            {/* Main Hostel Image (clickable to Hostel1Info, assuming Hostel2 also has a detail screen) */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Hostel3Info', { hostel: currentHostel })} // Navigate to Hostel1Info or a new Hostel2Info
              style={styles.mainImageTouchable}
            >
              <Image source={currentHostel.image} style={styles.hostelImage} />
            </TouchableOpacity>

            <View style={styles.hostelDetails}>
              <Text style={styles.hostelName}>🏠 {currentHostel.name}</Text>
              <View style={styles.ratingContainer}>
                {[...Array(Math.floor(currentHostel.rating))].map((_, i) => (
                  <Text key={i} style={styles.starIcon}>⭐</Text>
                ))}
                {currentHostel.rating % 1 !== 0 && <Text style={styles.starIcon}>⭐</Text>}
              </View>
              <Text style={styles.price}>{currentHostel.price}</Text>
              <Text style={styles.contactInfo}>Contact Name : {currentHostel.contactName}</Text>
              <Text style={styles.contactInfo}>Contact No. : {currentHostel.contactNumber}</Text>

              <View style={styles.timeDateContainer}>
                <TouchableOpacity style={styles.timeDateButton}>
                  <Text style={styles.timeDateText}>Time ▼</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeDateButton}>
                  <Text style={styles.timeDateText}>Date ▼</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Popular among your College Contacts section (as per screenshot) */}
          <Text style={styles.popularSectionTitle}>Popular among your College Contacts</Text>
          <View style={styles.popularContactsContainer}>
            <View style={styles.popularContactCard}>
              <Image source={require('./assets/hostel1.jpg')} style={styles.popularContactImage} />
              <Text style={styles.popularContactText}>Hostel 1</Text>
            </View>
            <View style={styles.popularContactCard}>
              <Image source={require('./assets/hostel2.jpg')} style={styles.popularContactImage} />
              <Text style={styles.popularContactText}>Hostel 2</Text> {/* Screenshot shows Hostel 3 here */}
            </View>
          </View>
        </ScrollView>
        <BottomNavigationBar navigation={useNavigation} />

      </View>

      {/* Filter Modal (copied from Hostel1.js) */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFilterModal}
        onRequestClose={resetFilters}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.filterModalContent}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={resetFilters}>
              <Text style={styles.modalCloseText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.filterTitle}>Filters</Text>
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>💰 Budget</Text>
              <View style={styles.budgetInputs}>
                <TextInput
                  style={styles.budgetInput}
                  keyboardType="numeric"
                  placeholder="Min"
                  value={String(minBudget)}
                  onChangeText={(text) => setMinBudget(Number(text))}
                />
                <Text style={styles.budgetSeparator}>-</Text>
                <TextInput
                  style={styles.budgetInput}
                  keyboardType="numeric"
                  placeholder="Max"
                  value={String(maxBudget)}
                  onChangeText={(text) => setMaxBudget(Number(text))}
                />
              </View>
            </View>
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>🧺 Amenities</Text>
              <View style={styles.amenitiesGrid}>
                {Object.keys(amenities).map((key) => (
                  <TouchableOpacity
                    key={key}
                    style={[
                      styles.amenityCheckbox,
                      amenities[key] && styles.amenityCheckboxSelected,
                    ]}
                    onPress={() => setAmenities({ ...amenities, [key]: !amenities[key] })}
                  >
                    <Text style={styles.amenityText}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                    {amenities[key] && <Text style={styles.checkboxTick}>✔</Text>}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>📍 Distance</Text>
              <Text style={styles.distanceText}>{distance} km</Text>
              <TextInput
                style={styles.distanceInput}
                keyboardType="numeric"
                placeholder="Distance in km"
                value={String(distance)}
                onChangeText={(text) => setDistance(Number(text))}
              />
            </View>
            <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
      paddingBottom: 20,
    },
    topHeaderBar: { // New style for the top bar containing back button and filter icon
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 10,
    },
    // backButton: {
    //   padding: 8,
    //   borderRadius: 20,
    //   backgroundColor: 'rgba(0,0,0,0.1)',
    // },
    // backIcon: {
    //   width: 24,
    //   height: 24,
    //   tintColor: '#333',
    // },
    filterIconContainer: { // Style for the filter icon button
      padding: 8,
      borderRadius: 10,
      backgroundColor: '#8F87F1',
      marginTop:0,
    },
    filterIcon: {
      width: 20,
      height: 20,
      tintColor: '#333',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    helpText: {
      color: '#2A72E9',
      fontWeight: 'bold',
      fontSize: 16,
    },
    subtitle: {
      fontSize: 16,
      color: 'gray',
      marginBottom: 20,
    },
    hostelCard: {
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      marginBottom: 20,
      position: 'relative',
      height:450,
      width:300,
      marginLeft:50,
      marginTop:-50,
    },
    mainImageTouchable: {
      width: '100%',
      marginBottom: 15,
    },
    hostelImage: {
      width: '100%',
      height: 200,
      borderRadius: 15,
    },
    hostelDetails: {
      width: '100%',
      alignItems: 'center',
    },
    hostelName: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    ratingContainer: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    starIcon: {
      fontSize: 18,
      marginRight: 2,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#6A5ACD',
      marginBottom: 10,
    },
    contactInfo: {
      fontSize: 16,
      marginBottom: 5,
      color: '#555',
    },
    timeDateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 15,
    },
    timeDateButton: {
      backgroundColor: '#D7CCF1',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      flex: 1,
      marginHorizontal: 5,
      alignItems: 'center',
    },
    timeDateText: {
      fontWeight: 'bold',
      color: '#333',
    },
    popularSectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    popularContactsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    popularContactCard: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 10,
      alignItems: 'center',
      width: '45%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 3,
      elevation: 2,
    },
    popularContactImage: {
      width: '100%',
      height: 100,
      borderRadius: 8,
      marginBottom: 8,
    },
    popularContactText: {
      fontWeight: '500',
      color: '#333',
    },
    // Modal Styles (copied from HomeScreen and adjusted for Hostel1)
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(17, 15, 15, 0.5)',
    },
    filterModalContent: {
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 20,
      width: '90%',
      maxHeight: '80%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 10,
    },
    modalCloseButton: {
      alignSelf: 'flex-end',
      padding: 5,
      marginBottom: 10,
    },
    modalCloseText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#888',
    },
    filterTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    filterSection: {
      marginBottom: 20,
    },
    filterSectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    budgetInputs: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    budgetInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 8,
      width: '40%',
      textAlign: 'center',
      fontSize: 16,
    },
    budgetSeparator: {
      fontSize: 20,
      marginHorizontal: 10,
      fontWeight: 'bold',
    },
    amenitiesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    amenityCheckbox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
      width: '48%',
      justifyContent: 'space-between',
    },
    amenityCheckboxSelected: {
      backgroundColor: '#D7CCF1',
    },
    amenityText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#333',
    },
    checkboxTick: {
      fontSize: 16,
      color: '#6A5ACD',
      fontWeight: 'bold',
    },
    distanceText: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 10,
      color: '#555',
    },
    distanceInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 8,
      width: '100%',
      textAlign: 'center',
      fontSize: 16,
    },
    applyButton: {
      backgroundColor: '#8F87F1',
      paddingVertical: 15,
      borderRadius: 30,
      alignItems: 'center',
      marginTop: 20,
    },
    applyButtonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  export default Hostel3;
