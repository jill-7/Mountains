import { StyleSheet, Image, Platform, View, TouchableOpacity, Text, ScrollView, TextInput, Dimensions } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

export default function TabTwoScreen() {
  const [iconPressed, setIconPressed] = useState(false);
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(windowWidth);
  
 
  useEffect(() => {
    const updateLayout = () => {
      setScreenWidth(Dimensions.get('window').width);
    };
    
    
    Dimensions.addEventListener('change', updateLayout);
    
    return () => {
    };
  }, []);
  
  //screensizes
  const isSmallScreen = screenWidth < 380;
  const isMediumScreen = screenWidth >= 380 && screenWidth < 768;
  const isLargeScreen = screenWidth >= 768;
  
  //images
  const imageWidth = isLargeScreen ? screenWidth * 0.3 : screenWidth * 0.45;
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topall}>
        <Text style={styles.toptext}>
          9:41
        </Text>
        
        <View style={[styles.topIcons, { marginLeft: isLargeScreen ? 'auto' : screenWidth * 0.65 }]}>
          <Ionicons name="cellular" size={20} color="black" />
          <Ionicons name="wifi-sharp" size={20} color="black" />
          <Ionicons name="battery-full-sharp" size={20} color="black" />
        </View>
      </View>

      <View style={styles.explore}>
        <TouchableOpacity style={styles.exploreicon} onPress={() => {
          setIconPressed(!iconPressed);
          router.push('/');
        }}>
          <Ionicons name="chevron-back" size={28} color={iconPressed ? 'red' : 'black'} />
        </TouchableOpacity>
        <Text style={[styles.exploretext, { marginLeft: isLargeScreen ? '10%' : '20%' }]}>
          Explore Bromo
        </Text>
      </View>
      
      <View style={[styles.input, { 
        width: isLargeScreen ? '70%' : '85%', 
        marginLeft: isLargeScreen ? '15%' : '7%'
      }]}>
        <Ionicons name="search-outline" size={25} color="black" style={styles.search} />
        <TextInput 
          placeholder="Search something..."
          style={styles.inputText}
        />
        <Ionicons 
          name="options-outline" 
          size={28} 
          color="black" 
          style={[styles.option, {marginLeft: isLargeScreen ? screenWidth * 0.15 : 'auto'}]} 
        />
      </View>

      <View style={styles.images}>
        <View style={styles.imagesline1}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/danceee.jpeg')}
              style={[styles.dance, { width: imageWidth }]}
            />
            <Text style={styles.imagetext1}>Kidung{"\n"}Tengger{"\n"}Dance</Text>
          </View>
          
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/luhurpoten-temple.jpeg')}
              style={[styles.temple, { width: imageWidth, marginLeft: 5 }]}
            />
            <Text style={styles.imagetext2}>Luhur{"\n"}Poten{"\n"}Temple</Text>
          </View>
        </View>
        
        <View style={styles.imagesline2}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/land-mtbromo.jpeg')}
              style={[styles.land, { width: imageWidth }]}
            />
            <Text style={styles.imagetext3}>The Land{"\n"}Above {"\n"}The Clouds</Text>
          </View>
          
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/hiking-mtbromo.jpeg')}
              style={[styles.hiking, { width: imageWidth, marginLeft: 5 }]}
            />
            <Text style={styles.imagetext4}>Hiking On{"\n"}Mount{"\n"}Bromo</Text>
          </View>
        </View>
        
        <View style={styles.imagesline3}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/horse-riding.jpeg')}
              style={[styles.horseriding, { width: imageWidth }]}
            />
            <Text style={styles.imagetext5}>Ride{"\n"}a Horse</Text>
          </View>
          
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/forestttt.jpeg')}
              style={[styles.forest, { width: imageWidth, marginLeft: 5 }]}
            />
            <Text style={styles.imagetext6}>Forestry</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  topall: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 18,
    alignItems: 'center',
  },
  topIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
  },
  toptext: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  explore: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  exploretext: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  exploreicon: {
    marginLeft: 7,
    padding: 12,
    backgroundColor: 'rgb(189, 166, 166)',
    borderRadius: 50,
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 27,
    backgroundColor: 'rgb(240, 232, 232)',
    padding: 6,
    borderRadius: 6,
    marginBottom: 10
  },
  inputText: {
    fontSize: 16,
    margin: 2,
    flex: 1,
  },
  search: {
    marginLeft: 5,
    marginTop: 12
  },
  option: {
    marginTop: 12
  },
  images: {
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 7,
  },
  imageContainer: {
    position: 'relative',
  },
  imagesline1: {
    display: 'flex',
    flexDirection: 'row',
    margin: 7,
    justifyContent: 'center',
  },
  imagesline2: {
    display: 'flex',
    flexDirection: 'row',
    margin: 7,
    justifyContent: 'center',
  },
  imagesline3: {
    display: 'flex',
    flexDirection: 'row',
    margin: 7,
    justifyContent: 'center',
  },
  dance: {
    borderRadius: 10,
    height: 200, 
    resizeMode: 'cover',
  },
  temple: {
    height: 250, 
    borderRadius: 10,
    resizeMode: 'cover',
  },
  land: {
    borderRadius: 10,
    height: 250, 
    marginTop: -55, 
    resizeMode: 'cover',
  },
  hiking: {
    borderRadius: 10,
    height: 200, 
    marginTop: -5, 
    resizeMode: 'cover',
  },
  horseriding: {
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  forest: {
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imagetext1: {
    position: 'absolute',
    top: '30%', 
    left: '20%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  imagetext2: {
    position: 'absolute',
    top: '35%', 
    left: '20%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  imagetext3: {
    position: 'absolute',
    top: '10%', 
    left: '15%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  imagetext4: {
    position: 'absolute',
    top: '25%', 
    left: '15%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  imagetext5: {
    position: 'absolute',
    top: '30%', 
    left: '20%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  imagetext6: {
    position: 'absolute',
    top: '30%', 
    left: '20%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});