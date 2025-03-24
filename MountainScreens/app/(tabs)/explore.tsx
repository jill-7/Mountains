import { StyleSheet, Image, Platform, View, TouchableOpacity, Text, ScrollView, TextInput  } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function TabTwoScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} >
      <View style={styles.topall}>
        <Text style={styles.toptext}>
          9:41
        </Text>
        
      <View style={styles.topIcons}>
      <Ionicons name="cellular" size={20} color="black" />
      <Ionicons name="wifi-sharp" size={20} color="black" />
      <Ionicons name="battery-full-sharp" size={20} color="black" />
      </View>
      </View>

      <View style={styles.explore}>
      <Ionicons name="chevron-back" size={28} color="black" style={styles.exploreicon}/>
      <Text style={styles.exploretext}>
        Explore Bromo
      </Text>
      </View>
      
      <View style={styles.input}>
      <Ionicons name="search-outline" size={25} color="black" style={styles.search} />
      <TextInput 
      placeholder="Search something..."
      style={styles.inputText}
      />
      <Ionicons name="options-outline" size={28} color="black" style={styles.option} />

      </View>

      <View style={styles.images}>
        <View style={styles.imagesline1}>
        <Image
        source={require('../../assets/images/danceee.jpeg')}
        style={styles.dance}
         />
         <Text style={styles.imagetext1}>Kidung{"\n"}Tengger{"\n"}Dance</Text>
         <Image
        source={require('../../assets/images/luhurpoten-temple.jpeg')}
        style={styles.temple}
         />
         <Text style={styles.imagetext2}>Luhur{"\n"}Poten{"\n"}Temple</Text>
         </View>
         <View style={styles.imagesline2}>
         <Image
        source={require('../../assets/images/land-mtbromo.jpeg')}
        style={styles.land}
         />
         <Text style={styles.imagetext3}>The Land{"\n"}Above {"\n"}The Clouds</Text>
         <Image
        source={require('../../assets/images/hiking-mtbromo.jpeg')}
        style={styles.hiking}
         />
         <Text style={styles.imagetext4}>Hiking On{"\n"}Mount{"\n"}Bromo</Text>
         </View>
         <View style={styles.imagesline3}>
         <Image
        source={require('../../assets/images/horse-riding.jpeg')}
        style={styles.horseriding}
         />
          <Text style={styles.imagetext5}>Ride{"\n"}a Horse</Text>
         <Image
        source={require('../../assets/images/forestttt.jpeg')}
        style={styles.forest}
         />
          <Text style={styles.imagetext6}>Forestry</Text>
         </View>
         

      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  topall: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 18   
  },
  topIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginLeft: 240,
  },
  toptext: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold'

  },
  explore: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  exploretext: {
    marginLeft: 80,
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold'

  },
  exploreicon: {
    marginLeft: 7,
    padding: 12,
    backgroundColor: 'rgb(189, 166, 166)',
    borderRadius: 50,
    height:50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'

  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 27,
    backgroundColor: 'rgb(240, 232, 232)',
    padding: 6,
    width: 338,
    marginLeft: 12,
    borderRadius: 6,
    marginBottom: 10

  },
  inputText: {
    fontSize: 16,
    margin: 2

  },
  search: {
    marginLeft: 5,
    marginTop: 12
  },
  option: {
    marginLeft: 115,
    marginTop: 12
    
  },
  images: {
    backgroundColor: 'white',
    width: '50%'
  },
  imagesline1: {
    display: 'flex',
    flexDirection: 'row',
    margin: 7

  },
  imagesline2: {
    display: 'flex',
    flexDirection: 'row',
    margin: 7
    
    
  },
  imagesline3: {
    display: 'flex',
    flexDirection: 'row',
    margin: 7
    
  },
  dance: {
    width: 170,
    borderRadius: 10

  },
  temple: {
    width: 170,
    marginLeft: 5,
    height: 250,
    borderRadius: 10

  },
  land: {
    width: 170,
    borderRadius: 10,
    height: 250,
    marginTop: -70

  },
  hiking: {
    width: 170,
    marginLeft: 5,
    borderRadius: 10,
    marginTop: -5

  },
  horseriding: {
    width: 170,
    borderRadius: 10

  },
  forest: {
    width: 170,
    marginLeft: 5,
    borderRadius: 10

  },
 
  imagetext1: {
    position: 'relative',
    top: 60,
    right: 115,
    marginRight: -70,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
    
   

  },
  imagetext2: {
    position: 'relative',
    top: 90,
    right: 120,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
   

  },
  imagetext3: {
    position: 'relative',
    top: 20,
    right: 130,
    marginRight: -97,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
   
    

  },
  imagetext4: {
    position: 'relative',
    top: 55,
    right: 120,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
    

  },
  imagetext5: {
    position: 'relative',
    top: 60,
    right: 115,
    marginRight: -65,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
    
    

  },
  imagetext6: {
    position: 'relative',
    top: 70,
    right: 120,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
    
  },
  

  
});
