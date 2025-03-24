import { Image, StyleSheet, Platform, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';


export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} >
      <View style={styles.imageContainer}>
        <Image
          source = {require('../../assets/images/Mt Bromo.jpeg')}
          style={styles.topImage}
          resizeMode='cover'
         />
        <View style={styles.topImageall}>
        <Text style={styles.topImageText}>
          9:41
        </Text>
        <View style={styles.topImageIcons}>
        <Ionicons name="cellular" size={20} color="white" />
        <Ionicons name="wifi-sharp" size={20} color="white" />
        <Ionicons name="battery-full-sharp" size={20} color="white" />
        </View>
        </View>
        <View style={styles.topImagemiddle}>
        <Image
        source={require('../../assets/images/TSwift.jpeg')}
        style={styles.middleimage} 
        />
        <Ionicons name="notifications-outline" size={24} color="white" style={styles.notification}/>
        </View>
        <View style={styles.topImagedescription}>
        <Text style={styles.bromo}>
          Bromo Mountain
        </Text>
        <Text style={styles.indonesia}>
        <Ionicons name="location" size={20} color="white" style={styles.location}/>
        East Java, Indonesia
        </Text>
        </View>
        
      <View style={styles.box}>
      <View style={styles.box1}>
          <Ionicons name="bus-outline" size={24} color="white" style={styles.bus}/>
        <View>
          <Text>
          BALANCE
          </Text>
          <Text>
          Rp 991,000
          </Text>
        </View>
      </View>

      <View style={styles.box2}>
         <Ionicons name="ticket-outline" size={24} color="white" style={styles.ticket}/>
        <View>
         <Text>
          TICKET
         </Text>
         <Text>
          14 Code <Ionicons name="chevron-forward-outline" size={18} color="black" style={styles.chevron}  />
         </Text>
        </View>
      </View>

      </View>
      
      </View>
      
      <View style={styles.category}>
      <Text style={styles.categorytext}>
        Category
      </Text>
      <Text style={styles.viewall}>
        View All
      </Text>
      </View>

      <View style={styles.itinerary}>
        <View style={styles.trip}>
        <Ionicons name="bag-check-outline" size={24} color="red" />
        <Text style={styles.triptext}>Trip</Text>
        </View>
        <View style={styles.hotel}>
        <Ionicons name="bed-outline" size={24} color="black" />
        <Text>Hotel</Text>
        </View>
        <View style={styles.train}>
        <Ionicons name="train-outline" size={24} color="black" />
        <Text>Train</Text>
        </View>
        <View style={styles.flight}>
        <Ionicons name="airplane-outline" size={24} color="black" />
        <Text>Flight</Text>
        </View>

      </View>

      <View>
        <Image
        source={require('../../assets/images/lava-jeep-tour.jpeg')}
        style={styles.lavajeeptour} 
        />
        <View style={styles.Mini}>
          <Image
          source={require('../../assets/images/TSwift.jpeg')}
          style={styles.miniswift}
          />
          <Image
          source={require('../../assets/images/Kanyewest.jpeg')}
          style={styles.miniye}
          />
          <Image
          source={require('../../assets/images/pbubblegum.png')}
          style={styles.miniprincess} 
          />
        </View>
        <View style={styles.lavatext}>
          <Text style={styles.jeeptext}>East Java, Indonesia</Text>
          <Text style={styles.lavajeeptext}>Lava Jeep Tour</Text>

        </View>
        <Ionicons name="heart-circle-outline" size={24} color="white" style={styles.heart}/>

        <View style={styles.bromobox}>
        <Image
        source={require('../../assets/images/mt-bromo.jpeg')} 
        style={styles.mtbromo}
        />
        <View style={styles.Max}>
          <Image
          source={require('../../assets/images/TSwift.jpeg')}
          style={styles.maxswift}
          />
          <Image
          source={require('../../assets/images/Kanyewest.jpeg')}
          style={styles.maxye}
          />
          <Image
          source={require('../../assets/images/pbubblegum.png')}
          style={styles.maxprincess} 
          />
        </View>
        <Ionicons name="heart-circle-outline" size={24} color="white" style={styles.hearty}/>
        </View>

      </View>
      
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  imageContainer: {
    backgroundColor: 'white',
    width: '100%'

  },
  topImage: {
    marginTop: 17,
    width: 360,
    height: 240
  },
  topImageall: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: -240,
    color: 'white',
  },
  topImageIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginLeft: 250,
  
  },
  topImageText: {
    fontSize: 17,
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  topImagemiddle: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: -210,

  },
  middleimage:{
    width: 50,
    borderRadius: 50,
    height: 50,
    marginLeft: 10
  },
  notification: {
    marginLeft: 240,
    backgroundColor: 'rgb(189, 166, 166)',
    padding: 12,
    borderRadius: 50,
    height:50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'

  },
  topImagedescription: {
    position: 'relative',
    top: -180,
  },
  location: {
    marginTop: 7

  },
  bromo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold'

  },
  indonesia: {
    fontSize: 18,
    color:'rgb(189, 166, 166)'
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(189, 166, 166)',
    marginTop: -120,
    width: 320,
    marginLeft: 15,
    padding: 8,
    borderRadius: 6

    

  },
  box1: {
    display: 'flex',
    flexDirection: 'row',
  },
  box2: {
    display: 'flex',
    flexDirection: 'row',
  },
  bus: {
    marginRight: 10,
    marginTop: 4

  },
  ticket: {
    marginRight: 10,
    marginTop: 4
  },
  chevron: {
    marginTop: 6
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
    marginBottom: 10

  },
  categorytext: {
    fontSize: 18,
    marginRight: 100

  },
  viewall: {
    fontSize: 16
  },
  itinerary: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20
  },
  trip: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 6,
  },
  triptext: {
    color: 'white'

  },
  hotel: {
    backgroundColor: 'rgb(189, 166, 166)',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 6


  },
  train: {
    backgroundColor: 'rgb(189, 166, 166)',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 6
  },
  flight: {
    backgroundColor: 'rgb(189, 166, 166)',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 6
  },
  lavajeeptour: {
    width: 320,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 10

  },
  mtbromo: {
    width: 320,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 10
    
  },
  Mini: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: -72,
    left: 175

  },
  miniswift: {
    width: 40,
    borderRadius: 50,
    height: 40,
    marginLeft: 10,
    position: 'relative',
    left: 34
  },
  miniye: {
    width: 40,
    borderRadius: 50,
    height: 40,
    marginLeft: 10,
    position: 'relative',
    left: 20
  },
  miniprincess: {
    width: 40,
    borderRadius: 50,
    height: 40,
    marginLeft: 10,
  },
  lavatext: {
    position: 'relative',
    top: -110,
    marginLeft: 30
  },
  lavajeeptext: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  jeeptext: {
    fontSize: 16,
    color: 'whitesmoke',
  },
  heart: {
    position: 'relative',
    top: -260,
    left: 300

  },
  bromobox: {
    marginTop: -110,

  },
  Max: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: -72,
    left: 175

  },
  maxswift: {
    width: 40,
    borderRadius: 50,
    height: 40,
    marginLeft: 10,
    position: 'relative',
    left: 34
  },
  maxye: {
    width: 40,
    borderRadius: 50,
    height: 40,
    marginLeft: 10,
    position: 'relative',
    left: 20
  },
  maxprincess: {
    width: 40,
    borderRadius: 50,
    height: 40,
    marginLeft: 10,
  },
  hearty: {
    position: 'relative',
    top: -240,
    left: 300

  },


});
