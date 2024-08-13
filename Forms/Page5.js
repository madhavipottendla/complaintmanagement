import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useAppContext } from './AppContext';
import Header from '../Screens/Header';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default function Page5() {
  const { formData } = useAppContext();
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style ={{display:'flex',flexDirection:'row',gap:130}}>
          <Text style={styles.title}>Preview Details</Text>
          <Icon name="download-outline" size={24} color="black" style={styles.icon} />
          </View>
          <View style={styles.cont1}>
            <Text style={styles.title}>Shop Details</Text>
            <Text style={styles.text}>Shop Name: {formData.shopname}</Text>
            <Text style={styles.text}>District: {formData.district}</Text>
            <Text style={styles.text}>Mandal: {formData.mandal}</Text>
            <Text style={styles.text}>Village: {formData.village}</Text>
            <Text style={styles.text}>Pincode: {formData.pincode}</Text>
          </View>
          <View style={styles.cont1}>
            <Text style={styles.title}>Personal Details</Text>
            <Text style={styles.text}>First Name: {formData.firstName}</Text>
            <Text style={styles.text}>Last Name: {formData.lastName}</Text>
            <Text style={styles.text}>Phone: {formData.phone}</Text>
            <Text style={styles.text}>Email: {formData.email}</Text>
            <Text style={styles.text}>Address: {formData.address}</Text>
          </View>
          <View style={styles.cont1}>
            <Text style={styles.title}>Complaint Details</Text>
            <Text style={styles.text}>Complaint Text: {formData.complaintText}</Text>
            <Text style={styles.text}>Complaint Type: {formData.complaintType}</Text>
            {formData.recordedURI && (
              <Text style={styles.detail}>Audio URI: {formData.recordedURI}</Text>
            )}
          </View>
          <View style={styles.cont1}>
            <Text style={styles.title}>Attachments</Text>
            {formData.imageUri && (
              <Image
                source={{ uri: formData.imageUri }}
                style={styles.image}
              />
            )}
          </View>
          <View style={styles.btnview}>
          <View>
          <TouchableOpacity>
                  <Text style={styles.btntext}>Back</Text>
              </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity>
                  <Text style={styles.btntext} onPress={()=>navigation.navigate('last')}>Finish</Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: width * 0.05,
    backgroundColor: 'white',
    elevation: 20,
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    borderRadius: 10,
  },
  title: {
    fontSize: width * 0.05,
    marginBottom: width * 0.03,
    paddingLeft: width * 0.04,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    alignSelf: 'start',
    borderRadius: 10,
    marginTop: width * 0.02,
    marginLeft: width * 0.05,
    marginBottom: width * 0.03,
  },
  text: {
    fontSize: width * 0.042,
    paddingLeft: width * 0.04,
    paddingBottom: width * 0.02,
  },
  cont1: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 20,
    marginBottom: width * 0.03,
  },
  btntext:{
    fontSize:width*0.05,
    paddingHorizontal:width*0.05,
    paddingVertical:width*0.02,
    borderWidth:1,
    textAlign:'center',
    borderRadius:20,
    elevation:20,
    backgroundColor:'whitesmoke'
  },
  btnview:{
    flexDirection:'row',
    justifyContent:'space-around',
    
  }
});
