import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity,Dimensions } from 'react-native';
import * as Location from 'expo-location';
import Header from '../Screens/Header';
import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from './AppContext';
const { width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
export default function Page1() {
    const navigation = useNavigation();
    const { setFormData } = useAppContext();


    const [location, setLocation] = useState(null);
    const [district, setDistrict] = useState('');
    const [mandal, setMandal] = useState('');
    const [village, setVillage] = useState('');
    const [pincode, setPincode] = useState('');
    const [shopname, setShopname] = useState('');
    
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
    
          // Reverse geocode to get the address details
          let address = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
    
          if (address.length > 0) {
            setDistrict(address[0].subregion || '');
            setMandal(address[0].district || '');
            setVillage(address[0].name || '');
            setPincode(address[0].postalCode || '');
          }
        })();
      }, []);
    
      const handleNext = () => {
        
          setFormData(prevData => ({
            ...prevData,
            shopname,
            district,
            mandal,
            village,
            pincode,
        }));
            navigation.navigate('form3');
       
      };
  return (
    <View  style ={{backgroundColor:'#264782',paddingBottom:50}}>
    <Header />
    <View style={styles.card}>
    <View style={styles.container}>
        <View >
           <Text style={styles.title}>Shop Details</Text>
        </View>
        <View style={styles.inputview}>
        <PaperInput
        label="Shop Name"
        value={shopname}
        onChangeText={setShopname}
        mode="outlined"
        style={styles.input}
        left={
          <PaperInput.Icon 
            icon={() => <Icon name="location-outline" size={24} color="black" />}
          />
        }
      />
        </View>
        <View style={styles.inputview}>
        <PaperInput
        label="District"
        value={district}
        // onChangeText={setShopName}
        mode="outlined"
        style={styles.input}
      />
        </View>
        <View style={styles.inputview}>
        <PaperInput
        label="Mandal"
        value={mandal}
        // onChangeText={setShopName}
        mode="outlined"
        style={styles.input}
      />
        </View>
        <View style={styles.inputview}>
        <PaperInput
        label="Village"
        value={village}
        // onChangeText={setShopName}
        mode="outlined"
        style={styles.input}
      />
        </View>
        <View style={styles.inputview}>
        <PaperInput
        label="Pincode"
        value={pincode}
        // onChangeText={setShopName}
        mode="outlined"
        style={styles.input}
      />
        </View>
        <View style={styles.buttonview}>
            <TouchableOpacity onPress={handleNext}>
              <Text style={styles.buttontext}>NEXT</Text>
            </TouchableOpacity>
          </View>
    </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:width*0.03,
    
    
  },
  title: {
    fontSize: width*0.05,
    marginVertical:width*0.03,
    marginLeft:width*0.09
  },
  input: {
    borderWidth: 0,
    fontSize:width*0.04,
    
  },
  inputview: {
    paddingHorizontal: width * 0.08,
    paddingVertical: width * 0.01,
    marginVertical: width * 0.01,
    
  },
  card:{
    width:width*0.90,
    marginLeft:width*0.05,
    marginVertical:width*0.20,
    backgroundColor:'white',
    borderRadius:10,
    elevation:20,
  },
  buttontext: {
    fontSize: width * 0.04,
    fontWeight: '400',
    color: 'black',
    backgroundColor: 'whitesmoke',
    textAlign: 'center',
    paddingVertical: width * 0.02,
    borderRadius: 30,
    elevation:20,
    borderWidth:1,

  },
  buttonview: {
    width: width * 0.30,
    marginLeft: width * 0.46,
    marginTop: width * 0.10,
    marginBottom: width * 0.05
  },
});
