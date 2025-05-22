import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const HostelCard = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SignupScreen'); // This must match your stack screen name
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('./assets/newbed.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        {/* <Svg height="58" width={width} viewBox={`0 0 ${width} 3`} style={styles.svg}>
          <Path
            d={`M0,0 C${width * 0.25},60 ${width * 0.75},-40 ${width},60 L${width},100 L0,100 Z`}
            fill="blue"
          />
        </Svg> */}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Streamline Hostel Life with Ease</Text>
        <Text style={styles.description}>
          Simplify your hostel operations with Zonix. Manage rooms, staff, and students effortlessly. Experience the future of hostel management today.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HostelCard;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    borderRadius: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    height: '100%',
    width:'100%',
    marginLeft:0,
  },
  imageWrapper: {
    position: 'relative',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 600,
    marginTop:30,
  },
  // svg: {
  //   position: 'absolute',
  //   bottom: 10,
  // },
  content: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  title: {
    fontSize: 27,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
    marginTop:30,
  },
  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 30,
    marginLeft:30,
    marginRight:20,
  },
  button: {
    backgroundColor: '#8F87F1',
    paddingVertical: 10,
    paddingHorizontal: 104,
    borderRadius: 24,
    marginTop:30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});


