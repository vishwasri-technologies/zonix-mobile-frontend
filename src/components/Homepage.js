import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import BottomNavigationBar from './BottomNavigationBar';

const HomeScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Boys');

  const popularHostels = [
    {
      id: '1',
      title: 'Hostel 1',
      image: require('./assets/hostel1.jpg'),
      views: '19.2k',
    },
    {
      id: '2',
      title: 'Hostel 2',
      image: require('./assets/hostel2.jpg'),
      views: '16.3k',
    },
    {
      id: '3', // Added more dummy data
      title: 'Hostel 3',
      image: require('./assets/hostel3.jpg'), // Reusing image for demo
      views: '15.0k',
    },
    {
      id: '4', // Added more dummy data
      title: 'Hostel 4',
      image: require('./assets/hostel2.jpg'), // Reusing image for demo
      views: '12.5k',
    },
    {
      id: '5', // Added more dummy data
      title: 'Hostel 5',
      image: require('./assets/abc.jpg'), // Reusing image for demo
      views: '10.1k',
    },
  ];

  const nearbyHostels = [
    {
      id: '1',
      name: 'Abc Hostel',
      price: '$300/day',
      status: 'Rooms Unavailable',
      tag: '#Badminton Court | Park',
      available: false,
      image: require('./assets/abc.jpg'),
      category: 'Boys',
    },
    {
      id: '2',
      name: 'Xyz Hostel',
      price: '$450/day',
      status: 'Rooms Available',
      tag: '#Library | Restaurant',
      available: true,
      image: require('./assets/xyz.jpg'),
      category: 'Girls',
    },
    {
      id: '3',
      name: 'Urban Nest',
      price: '$500/day',
      status: 'Rooms Available',
      tag: '#Coworking | Gym',
      available: true,
      image: require('./assets/xyz.jpg'),
      category: 'Co-Living',
    },
    {
      id: '4',
      name: 'Urban Nest',
      price: '$500/day',
      status: 'Rooms Available',
      tag: '#Coworking | Gym',
      available: true,
      image: require('./assets/abc.jpg'),
      category: 'Co-Living',
    },
  ];

  const filteredHostels = nearbyHostels.filter(
    (hostel) => hostel.category === selectedTab
  );

  // const renderPopular = ({ item }) => (
  //   <View style={styles.popularCard}>
  //     <TouchableOpacity
  //       onPress={() => {
  //         navigation.navigate('Hostel1', {
  //           hostel: {
  //             name: item.title,
  //             image: item.image,
  //             price: '₹300/day',
  //             contactName: 'AbcXyz',
  //             contactNumber: '+91 123-456-7890',
  //             rating: 4.5,
  //           },
  //         });
  //       } else if (item.id === '2') {
  //           navigation.navigate('Hostel2', { // Navigate to Hostel2 screen
  //             hostel: {
  //               name: item.title,
  //               image: item.image,
  //               price: '₹300/day', // Example price for Hostel 2
  //               contactName: 'AbcXyz',
  //               contactNumber: '+91 123-456-7890',
  //               rating: 4.0, // Example rating for Hostel 2
  //             },
  //           });
  //         } else {
  //           // For other popular hostels, you might navigate to a generic detail screen
  //           console.log('Pressed:', item.title);
  //         }
  //         // --- END MODIFIED ---
  //       }}
  //     >
  const renderPopular = ({ item }) => (
    <View style={styles.popularCard}>
      <TouchableOpacity
        onPress={() => { // The entire logic must be inside these curly braces
          if (item.id === '1') {
            navigation.navigate('Hostel1', {
              hostel: {
                name: item.title,
                image: item.image,
                price: '₹300/day',
                contactName: 'AbcXyz',
                contactNumber: '+91 123-456-7890',
                rating: 4.5,
              },
            });
          } else if (item.id === '2') {
            navigation.navigate('Hostel2', { // Navigate to Hostel2 screen
              hostel: {
                name: item.title,
                image: item.image,
                price: '₹400/day', // Example price for Hostel 2
                contactName: 'Kumar',
                contactNumber: '+91 123-456-7890',
                rating: 4.0, // Example rating for Hostel 2
              },
            });
          } else if (item.id === '3') { // NEW: Navigate to Hostel3 screen
            navigation.navigate('Hostel3', {
              hostel: {
                name: item.title,
                image: item.image,
                price: '₹300/day', // Example price for Hostel 3
                contactName: 'AbcXyz',
                contactNumber: '+91 123-456-7890',
                rating: 3.5, // Example rating for Hostel 3
              },
            });
          } else {
            // For other popular hostels, you might navigate to a generic detail screen
            console.log('Pressed:', item.title);
          }
        }} // Closing curly brace for the onPress function
      >
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.popularImage} />
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 8 }}>
        <Text style={styles.popularText}>{item.title || 'N/A'}</Text>
        <Text style={{ color: 'gray' }}>{item.views || '0 views'}</Text>
      </View>
    </View>
  );
  const renderNearby = ({ item }) => (
    <View style={styles.nearCard}>
      <TouchableOpacity onPress={() => {
        console.log('Pressed:', item.name);
      }}>
        <Image source={item.image} style={styles.nearImage} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={styles.nearTitle}>{item.name}</Text>
        <Text style={styles.tag}>{item.tag}</Text>
        <Text>{item.price}</Text>
        <Text
          style={[
            styles.status,
            { backgroundColor: item.available ? '#C8FAD1' : '#FAD1D1' },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require('./assets/homep1.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.logo}>Zonix</Text>
              <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')}>
                <Text style={styles.help}>Help?</Text>
              </TouchableOpacity>
              {/* <Image
                source={require('./assets/icon.png')}
                style={styles.userIcon}
              /> */}
              <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                <Image
                  source={require('./assets/icon.png')}
                  style={styles.userIcon}
                />
              </TouchableOpacity>
            </View>

            {/* Location Info */}
            <Text style={styles.loc}>Location</Text>
            <Text style={styles.location}>📍 Hyderabad, India ▼</Text>

            {/* Search and Filter */}
            <View style={styles.searchRow}>
              <TextInput
                placeholder="🔍 Search hostels"
                style={styles.searchInput}
                placeholderTextColor="#888"
              />
              <View style={styles.rightButtons}>
                <TouchableOpacity style={styles.suggestionButton}>
                  <Text style={styles.suggestionText}>Smart Suggestion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                  <Image
                    source={require('./assets/fillter.png')}
                    style={styles.filterIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Popular Hostels */}
            <Text style={styles.sectionTitle}>Popular Hostels</Text>
            <FlatList
              horizontal
              data={popularHostels}
              renderItem={renderPopular}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.popularHostelsListContent}
            />

            {/* Nearby Hostels */}
            <Text style={styles.sectionTitle}>Near you</Text>
            <View style={styles.tabContainer}>
              {['Boys', 'Girls', 'Co-Living'].map((tab) => (
                <TouchableOpacity
                  key={tab}
                  style={[styles.tab, selectedTab === tab && styles.tabActive]}
                  onPress={() => setSelectedTab(tab)}
                >
                  <Text
                    style={[
                      styles.tabText,
                      selectedTab === tab && styles.tabTextActive,
                    ]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <FlatList
              data={filteredHostels}
              renderItem={renderNearby}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>

          {/* Bottom Navigation Bar */}
                  </View>
                  <BottomNavigationBar navigation={navigation} />

      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
   marginTop:50,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 236, 236, 0.9)',
    padding: 16,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
  location: {
    fontSize: 18,
    padding: 10,
    marginBottom: 10,
  },
  loc: {
    fontSize: 25,
    padding: 10,
    marginBottom: -10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  help: {
    color: '#2A72E9',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 210,
  },
  userIcon: {
    width: 40,
    height: 40,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 40,
    fontWeight: 'bold',
    marginRight: 10,
  },
  rightButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  suggestionButton: {
    backgroundColor: '#8F87F1',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },
  suggestionText: {
    color: '#fff',
    fontWeight: '500',
  },
  filterButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#8F87F1',
  },
  tabText: {
    color: '#444',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#fff',
  },
  popularHostelsListContent: {
    // Added padding to the content container of the horizontal FlatList
    // This ensures items don't start right at the edge and provides scrollable space
    paddingHorizontal: 16, // Match main screen padding
  },
  popularCard: {
    width: 200,
    marginRight: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    height: 250,
  },
  imageWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 2,
  },
  popularImage: {
    width: '100%',
    height: 160,
    borderRadius: 17,
  },
  popularText: {
    fontWeight: '700',
    color: 'bold',
  },
  nearCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height:130,
  },
  nearImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  nearTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tag: {
    color: '#888',
    fontSize: 12,
  },
  status: {
    marginTop: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 12,
    overflow: 'hidden',
  },
});





















































































// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   ImageBackground,
//   ScrollView,
//   Modal, // Import Modal
// } from 'react-native';
// // If you want to use a real slider, you'd install:
// // npm install @react-native-community/slider
// // import Slider from '@react-native-community/slider';
// import BottomNavigationBar from './BottomNavigationBar';

// const HomeScreen = ({ navigation }) => {
//   const [selectedTab, setSelectedTab] = useState('Boys');
//   const [showFilterModal, setShowFilterModal] = useState(false); // State for filter modal visibility
//   const [minBudget, setMinBudget] = useState(700); // Filter state for budget
//   const [maxBudget, setMaxBudget] = useState(2000); // Filter state for budget
//   const [amenities, setAmenities] = useState({ // Filter state for amenities
//     wifi: false,
//     ac: false,
//     meals: false,
//     privateRoom: false,
//   });
//   const [distance, setDistance] = useState(5); // Filter state for distance (e.g., in km)

//   const popularHostels = [
//     {
//       id: '1',
//       title: 'Hostel 1',
//       image: require('./assets/hostel1.jpg'),
//       views: '19.2k',
//     },
//     {
//       id: '2',
//       title: 'Hostel 2',
//       image: require('./assets/hostel2.jpg'),
//       views: '16.3k',
//     },
//     {
//       id: '3',
//       title: 'Hostel 3',
//       image: require('./assets/hostel1.jpg'),
//       views: '15.0k',
//     },
//     {
//       id: '4',
//       title: 'Hostel 4',
//       image: require('./assets/hostel2.jpg'),
//       views: '12.5k',
//     },
//     {
//       id: '5',
//       title: 'Hostel 5',
//       image: require('./assets/hostel1.jpg'),
//       views: '10.1k',
//     },
//   ];

//   const allNearbyHostels = [ // Renamed to keep original unfiltered list
//     {
//       id: '1',
//       name: 'Abc Hostel',
//       price: 300, // Changed to number for filtering
//       status: 'Rooms Unavailable',
//       tag: '#Badminton Court | Park',
//       available: false,
//       image: require('./assets/abc.jpg'),
//       category: 'Boys',
//       amenities: { wifi: true, ac: false, meals: true, privateRoom: false }, // Added amenities
//       distance: 1, // Added distance
//     },
//     {
//       id: '2',
//       name: 'Xyz Hostel',
//       price: 450,
//       status: 'Rooms Available',
//       tag: '#Library | Restaurant',
//       available: true,
//       image: require('./assets/xyz.jpg'),
//       category: 'Girls',
//       amenities: { wifi: true, ac: true, meals: false, privateRoom: true },
//       distance: 3,
//     },
//     {
//       id: '3',
//       name: 'Urban Nest',
//       price: 500,
//       status: 'Rooms Available',
//       tag: '#Coworking | Gym',
//       available: true,
//       image: require('./assets/xyz.jpg'),
//       category: 'Co-Living',
//       amenities: { wifi: true, ac: true, meals: true, privateRoom: true },
//       distance: 0.5,
//     },
//     {
//       id: '4',
//       name: 'Green View',
//       price: 800,
//       status: 'Rooms Available',
//       tag: '#Garden | Cafe',
//       available: true,
//       image: require('./assets/hostel1.jpg'),
//       category: 'Boys',
//       amenities: { wifi: true, ac: true, meals: true, privateRoom: false },
//       distance: 2,
//     },
//     {
//       id: '5',
//       name: 'City Living',
//       price: 1200,
//       status: 'Rooms Available',
//       tag: '#Gym | Pool',
//       available: true,
//       image: require('./assets/hostel2.jpg'),
//       category: 'Girls',
//       amenities: { wifi: true, ac: true, meals: true, privateRoom: true },
//       distance: 4,
//     },
//   ];

//   // Apply filters to the nearby hostels
//   const applyFilters = () => {
//     let filtered = allNearbyHostels.filter((hostel) => {
//       // Filter by category (Boys, Girls, Co-Living)
//       if (hostel.category !== selectedTab) {
//         return false;
//       }

//       // Filter by Budget
//       const hostelPriceNum = parseFloat(hostel.price); // Ensure price is a number for comparison
//       if (hostelPriceNum < minBudget || hostelPriceNum > maxBudget) {
//         return false;
//       }

//       // Filter by Amenities
//       for (const amenityKey in amenities) {
//         if (amenities[amenityKey] && !hostel.amenities[amenityKey]) {
//           return false; // If amenity is selected but hostel doesn't have it
//         }
//       }

//       // Filter by Distance
//       if (hostel.distance > distance) {
//         return false;
//       }

//       return true;
//     });
//     // For simplicity, directly update the state that FlatList uses
//     // In a more complex app, you might have a separate state for filtered data
//     setFilteredHostelsData(filtered); // Assuming a state for filtered data
//     setShowFilterModal(false); // Close modal after applying filters
//   };

//   // State to hold the currently displayed filtered hostels
//   const [filteredHostelsData, setFilteredHostelsData] = useState(
//     allNearbyHostels.filter((hostel) => hostel.category === selectedTab)
//   );

//   // Update filtered hostels when selectedTab changes
//   React.useEffect(() => {
//     setFilteredHostelsData(
//       allNearbyHostels.filter((hostel) => hostel.category === selectedTab)
//     );
//   }, [selectedTab]);


//   const renderPopular = ({ item }) => (
//     <View style={styles.popularCard}>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('Hostel1', {
//             hostel: {
//               name: item.title,
//               image: item.image,
//               price: '₹300/day',
//               contactName: 'AbcXyz',
//               contactNumber: '+91 123-456-7890',
//               rating: 4.5,
//             },
//           });
//         }}
//       >
//         <View style={styles.imageWrapper}>
//           <Image source={item.image} style={styles.popularImage} />
//         </View>
//       </TouchableOpacity>
//       <View style={{ marginTop: 8 }}>
//         <Text style={styles.popularText}>{item.title || 'N/A'}</Text>
//         <Text style={{ color: 'gray' }}>{item.views || '0 views'}</Text>
//       </View>
//     </View>
//   );

//   const renderNearby = ({ item }) => (
//     <View style={styles.nearCard}>
//       <TouchableOpacity onPress={() => {
//         console.log('Pressed:', item.name);
//         navigation.navigate('Hostel1Info', { hostel: item }); // Navigate to Hostel1Info
//       }}>
//         <Image source={item.image} style={styles.nearImage} />
//       </TouchableOpacity>
//       <View style={{ flex: 1 }}>
//         <Text style={styles.nearTitle}>{item.name || 'Unknown Hostel'}</Text>
//         <Text style={styles.tag}>{item.tag || ''}</Text>
//         <Text>{`$${item.price || 'Price N/A'}/day`}</Text> {/* Display price with currency */}
//         <Text
//           style={[
//             styles.status,
//             { backgroundColor: item.available ? '#C8FAD1' : '#FAD1D1' },
//           ]}
//         >
//           {item.status || 'Status N/A'}
//         </Text>
//       </View>
//     </View>
//   );

//   return (
//     <ImageBackground
//       source={require('./assets/homep1.jpg')}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.overlay}>
//         <View style={{ flex: 1 }}>
//           <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
//             {/* Header */}
//             <View style={styles.header}>
//               <Text style={styles.logo}>Zonix</Text>
//               <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')}>
//                 <Text style={styles.help}>Help?</Text>
//               </TouchableOpacity>
//               <Image
//                 source={require('./assets/icon.png')}
//                 style={styles.userIcon}
//               />
//             </View>

//             {/* Location Info */}
//             <Text style={styles.loc}>Location</Text>
//             <Text style={styles.location}>📍 Hyderabad, India ▼</Text>

//             {/* Search and Filter */}
//             <View style={styles.searchRow}>
//               <TextInput
//                 placeholder="🔍 Search hostels"
//                 style={styles.searchInput}
//                 placeholderTextColor="#888"
//               />
//               <View style={styles.rightButtons}>
//                 <TouchableOpacity style={styles.suggestionButton}>
//                   <Text style={styles.suggestionText}>Smart Suggestion</Text>
//                 </TouchableOpacity>
//                 {/* Filter Button to open modal */}
//                 <TouchableOpacity style={styles.filterButton} onPress={() => setShowFilterModal(true)}>
//                   <Image
//                     source={require('./assets/fillter.png')}
//                     style={styles.filterIcon}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             {/* Popular Hostels */}
//             <Text style={styles.sectionTitle}>Popular Hostels</Text>
//             <FlatList
//               horizontal
//               data={popularHostels}
//               renderItem={renderPopular}
//               keyExtractor={(item) => item.id}
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.popularHostelsListContent}
//             />

//             {/* Nearby Hostels */}
//             <Text style={styles.sectionTitle}>Near you</Text>
//             <View style={styles.tabContainer}>
//               {['Boys', 'Girls', 'Co-Living'].map((tab) => (
//                 <TouchableOpacity
//                   key={tab}
//                   style={[styles.tab, selectedTab === tab && styles.tabActive]}
//                   onPress={() => setSelectedTab(tab)}
//                 >
//                   <Text
//                     style={[
//                       styles.tabText,
//                       selectedTab === tab && styles.tabTextActive,
//                     ]}
//                   >
//                     {tab}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>

//             <FlatList
//               data={filteredHostelsData} // Use filteredHostelsData here
//               renderItem={renderNearby}
//               keyExtractor={(item) => item.id}
//             />
//           </ScrollView>

//           {/* Bottom Navigation Bar */}
//         </View>
//         <BottomNavigationBar navigation={navigation} />
//       </View>

//       {/* Filter Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={showFilterModal}
//         onRequestClose={() => setShowFilterModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.filterModalContent}>
//             {/* Close Button */}
//             <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowFilterModal(false)}>
//               <Text style={styles.modalCloseText}>✕</Text>
//             </TouchableOpacity>

//             <Text style={styles.filterTitle}>Filters</Text>

//             {/* Budget Filter */}
//             <View style={styles.filterSection}>
//               <Text style={styles.filterSectionTitle}>💰 Budget</Text>
//               {/* Using TextInput for simplicity, replace with Slider if needed */}
//               <View style={styles.budgetInputs}>
//                 <TextInput
//                   style={styles.budgetInput}
//                   keyboardType="numeric"
//                   placeholder="Min"
//                   value={String(minBudget)}
//                   onChangeText={(text) => setMinBudget(Number(text))}
//                 />
//                 <Text style={styles.budgetSeparator}>-</Text>
//                 <TextInput
//                   style={styles.budgetInput}
//                   keyboardType="numeric"
//                   placeholder="Max"
//                   value={String(maxBudget)}
//                   onChangeText={(text) => setMaxBudget(Number(text))}
//                 />
//               </View>
//               {/* If using Slider, it would look like this: */}
//               {/* <Slider
//                 style={{ width: '100%', height: 40 }}
//                 minimumValue={0}
//                 maximumValue={5000}
//                 step={100}
//                 value={maxBudget} // Or a range slider if using a library
//                 onValueChange={(value) => setMaxBudget(value)}
//                 minimumTrackTintColor="#8F87F1"
//                 maximumTrackTintColor="#000000"
//               /> */}
//             </View>

//             {/* Amenities Filter */}
//             <View style={styles.filterSection}>
//               <Text style={styles.filterSectionTitle}>🧺 Amenities</Text>
//               <View style={styles.amenitiesGrid}>
//                 {Object.keys(amenities).map((key) => (
//                   <TouchableOpacity
//                     key={key}
//                     style={[
//                       styles.amenityCheckbox,
//                       amenities[key] && styles.amenityCheckboxSelected,
//                     ]}
//                     onPress={() => setAmenities({ ...amenities, [key]: !amenities[key] })}
//                   >
//                     <Text style={styles.amenityText}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
//                     {amenities[key] && <Text style={styles.checkboxTick}>✔</Text>}
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

//             {/* Distance Filter */}
//             <View style={styles.filterSection}>
//               <Text style={styles.filterSectionTitle}>📍 Distance</Text>
//               <Text style={styles.distanceText}>{distance} km</Text>
//               {/* Using TextInput for simplicity, replace with Slider if needed */}
//               <TextInput
//                 style={styles.distanceInput}
//                 keyboardType="numeric"
//                 placeholder="Distance in km"
//                 value={String(distance)}
//                 onChangeText={(text) => setDistance(Number(text))}
//               />
//               {/* If using Slider: */}
//               {/* <Slider
//                 style={{ width: '100%', height: 40 }}
//                 minimumValue={0}
//                 maximumValue={10}
//                 step={0.5}
//                 value={distance}
//                 onValueChange={(value) => setDistance(value)}
//                 minimumTrackTintColor="#8F87F1"
//                 maximumTrackTintColor="#000000"
//               /> */}
//             </View>

//             {/* Apply Button */}
//             <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
//               <Text style={styles.applyButtonText}>Apply</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ImageBackground>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(255, 236, 236, 0.9)',
//     padding: 16,
//     borderBottomRightRadius: 10,
//     overflow: 'hidden',
//   },
//   location: {
//     fontSize: 18,
//     padding: 10,
//     marginBottom: 10,
//   },
//   loc: {
//     fontSize: 25,
//     padding: 10,
//     marginBottom: -10,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   logo: {
//     fontSize: 35,
//     fontWeight: 'bold',
//   },
//   help: {
//     color: '#2A72E9',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   userIcon: {
//     width: 40,
//     height: 40,
//   },
//   searchRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//     justifyContent: 'space-between',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     height: 40,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   rightButtons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   suggestionButton: {
//     backgroundColor: '#8F87F1',
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
//   suggestionText: {
//     color: '#fff',
//     fontWeight: '500',
//   },
//   filterButton: {
//     backgroundColor: '#E0E0E0',
//     padding: 10,
//     borderRadius: 10,
//   },
//   filterIcon: {
//     width: 20,
//     height: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 10,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 10,
//     padding: 4,
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 8,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   tabActive: {
//     backgroundColor: '#8F87F1',
//   },
//   tabText: {
//     color: '#444',
//     fontWeight: '500',
//   },
//   tabTextActive: {
//     color: '#fff',
//   },
//   popularHostelsListContent: {
//     paddingHorizontal: 16,
//   },
//   popularCard: {
//     width: 180,
//     marginRight: 15,
//     borderRadius: 12,
//     backgroundColor: '#fff',
//     padding: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     height: 200,
//   },
//   imageWrapper: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 2,
//   },
//   popularImage: {
//     width: '100%',
//     height: 120,
//     borderRadius: 10,
//   },
//   popularText: {
//     fontWeight: '500',
//     color: '#333',
//   },
//   nearCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 12,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   nearImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   nearTitle: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   tag: {
//     color: '#888',
//     fontSize: 12,
//   },
//   status: {
//     marginTop: 4,
//     alignSelf: 'flex-start',
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 10,
//     fontSize: 12,
//     overflow: 'hidden',
//   },
//   // Modal Styles
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
//   },
//   filterModalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     padding: 20,
//     width: '90%',
//     maxHeight: '80%', // Limit height for scrollability if content grows
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 10,
//   },
//   modalCloseButton: {
//     alignSelf: 'flex-end',
//     padding: 5,
//     marginBottom: 10,
//   },
//   modalCloseText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#888',
//   },
//   filterTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   filterSection: {
//     marginBottom: 20,
//   },
//   filterSectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   budgetInputs: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   budgetInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     width: '40%',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   budgetSeparator: {
//     fontSize: 20,
//     marginHorizontal: 10,
//     fontWeight: 'bold',
//   },
//   amenitiesGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   amenityCheckbox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F0F0F0',
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     marginBottom: 10,
//     width: '48%', // Approx half width for two columns
//     justifyContent: 'space-between',
//   },
//   amenityCheckboxSelected: {
//     backgroundColor: '#D7CCF1', // Highlight when selected
//   },
//   amenityText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//   },
//   checkboxTick: {
//     fontSize: 16,
//     color: '#6A5ACD', // Tick color
//     fontWeight: 'bold',
//   },
//   distanceText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 10,
//     color: '#555',
//   },
//   distanceInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     width: '100%',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   applyButton: {
//     backgroundColor: '#8F87F1',
//     paddingVertical: 15,
//     borderRadius: 30,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   applyButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });
