import { Image, StyleSheet, Platform, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Thirdpage() {
    const router = useRouter();
    return (
       
            <View >
                <Image
                          source = {require('../../assets/images/Mt Bromo.jpeg')}
                          resizeMode='cover'
                          style={styles.coverimage}
                          
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
                <View style={styles.iconss}>
                <Ionicons name="chevron-back" size={28} color="white" style={styles.chevron} />
                <Ionicons name="ellipsis-vertical" size={28} color="white" style={styles.ellipsis} />
                </View>

                <View style={styles.imageContainer}>
                    <View style={styles.bromo}>
                        <Text style={styles.mtbromo}>
                            Bromo Mountain
                        </Text>
                        <Text style={styles.rating}>
                        ⭐ 4.9
                        </Text>
                    </View>
                    <View style={styles.time}>
                       
                                <Ionicons name="location" size={20} color="white" />
                                <Text style={styles.description}>
                                East Java, Indonesia (234km)
                        </Text>
                       
                        <Ionicons name="time" size={20} color="white"  />
                        <Text style={styles.hour}>
                            3h 12m
                        </Text>
                    </View>
                    <View>
                         <View >
                                
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
                               
                                </View>
                        <Text style={styles.people}>199+ people adventure</Text>
                    </View>
                    <Text style={styles.paragraph}>A typical way to visit Mount Bromo is from the nearby mountain village of Cemoro Lawang. From there it is possible to walk to the volcano in about 45 minutes, but it is also possible to take an organized jeep tour.</Text>
                    <Text style={styles.map}>
                        See On The Map
                    </Text>
                </View>

                         

            </View>
        
        
    );
}
const styles = StyleSheet.create({
    coverimage: {
        height: 700,
        width: 370
    },
   container: {
    backgroundColor: 'white'
   },
   topImageall: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: -665
    
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
  iconss: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: -630,
    justifyContent: 'space-around'
  },
  chevron: {
    marginRight: 250,
    padding: 12,
    backgroundColor: 'rgb(189, 166, 166)',
    borderRadius: 50,
    height:50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
},
imageContainer: {
    position: 'relative',
    top: -360,
    padding: 20,
    backgroundColor: 'gray',
    margin: 5,
    borderRadius: 10
    
},
bromo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8
},
time: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8, 
    

},
map: {
    backgroundColor: 'white',
    width: 200,
    fontSize: 16,
    padding: 8,
    marginLeft: 45,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 10
},
Max: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: 20,
    right: 45
    

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
  people: {
    marginLeft: 120,
    fontSize: 16,
    color: 'white',
    marginTop: -10,
    fontWeight: 'bold'
  },
  paragraph: {
    marginTop: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  mtbromo: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 50
    

  },
  rating: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    
    

  },
  description: {
    fontSize: 16,
    color: 'white',  
    marginRight: 20

  },
  hour: {
    fontSize: 14,
    color: 'white',
  },
  ellipsis: {
    padding: 12,
    backgroundColor: 'rgb(189, 166, 166)',
    borderRadius: 50,
    height:50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'

  
  }
 

    
})