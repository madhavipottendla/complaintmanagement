// screens/Page3.js
import React,{useState} from 'react';
import { View, Text, StyleSheet,Dimensions, KeyboardAvoidingView,ScrollView,Platform, TouchableOpacity,Image,Linking} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import Header from '../Screens/Header';
import { useAppContext } from './AppContext';
const { width, height } = Dimensions.get('window');
export default function Page2({ navigation }) {
  

  const [imageUri, setImageUri] = useState(null);
  const { setFormData } = useAppContext()
  const handleImage = async () => {
    let imagePick = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(imagePick);
    if (!imagePick.canceled && Array.isArray(imagePick.assets) && imagePick.assets.length > 0) {
      const uri = imagePick.assets[0].uri;
      setImageUri(uri);
      setFormData(prevData => ({ ...prevData, imageUri: uri })); 
    } else {
      console.log('Image selection was canceled or no image assets found.');
    }
  };

  const handleCamera = async () => {
    const cam = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(cam);
    if (!cam.canceled && Array.isArray(cam.assets) && cam.assets.length > 0) {
      const uri = cam.assets[0].uri; // Define 'uri' here
        setImageUri(uri);
        setFormData(prevData => ({ ...prevData, imageUri: uri }));
    } else {
      console.log('Image not uploaded');
    }
  };
  return (
    <View style = {{backgroundColor:"#264782" ,paddingBottom:210}}> 
    <Header />
    
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Attachments</Text>
        </View>
    <View style={styles.imagecont}>
    {imageUri && (
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
      />
    )}
    </View>

    <View>
        <TouchableOpacity onPress={handleImage}>
            <Text style={styles.buttontext} >UPLOAD</Text>
        </TouchableOpacity>
    </View>
    <View>
        <TouchableOpacity onPress={handleCamera}>
            <Feather name='camera' style={styles.buttonicon} size={30} />
        </TouchableOpacity>
    </View>
    
    


    <View style={styles.buttonview}>   
    
    <View style={{marginLeft:width*0.30}}>     
    <TouchableOpacity onPress={()=>navigation.navigate('form4')}>
      <Text style={styles.buttontext1}>Next</Text>
    </TouchableOpacity>
    </View>
    
  </View>
  </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
   backgroundColor:'white',
    marginHorizontal:width*0.03,
    marginTop:width*0.15,
   marginBottom:width*0.05,
    elevation:20,
    borderRadius:20
  },
  
  buttontext:{
    fontSize:width*0.03,
    fontWeight:'500',
    color:'black',
    backgroundColor:'white',
    textAlign:'center',
    paddingVertical:width*0.02, 
    paddingHorizontal:width*0.10,
    borderRadius:80,
    marginHorizontal:width*0.30,
    marginVertical:width*0.03,
    borderWidth:1,
    borderColor:'black',
    elevation:20,
    
  },
  shopheadtext:{
    fontSize:width*0.05,
    fontWeight:'bold',
    backgroundColor:'#070720',
    color:'white',
    textAlign:'center',
    padding:width*0.02,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    elevation:20
  },
  text:{
    fontSize:width*0.04,
    fontWeight:'bold',
    textAlign:'center'
  },
  buttonview:{
    marginTop:width*0.10,
    marginBottom:width*0.05,
    marginHorizontal:width*0.05
  },
  buttontext1:{
    marginLeft:width*0.28,
    paddingHorizontal:width*0.06,
    paddingVertical:width*0.01,
    borderColor:'black',
    borderWidth:1,
    textAlign:'center',
    borderRadius:50,
    elevation:20,
    backgroundColor:'white'


  },
  image:{
    width: width*0.55,
     height: width*0.55,  
      alignSelf: 'center' ,
      borderRadius:500,
      elevation:20, 
      position:'absolute' 
  },
  imagecont:{
    paddingVertical:width*0.27,
    marginHorizontal:width*0.20,
    backgroundColor:'lightgray',
    position:'relative',
    borderRadius:500,
    marginTop:width*0.05
  },
  buttonicon:{
    position:'absolute',
    backgroundColor:'lightgray',
    padding:width*0.03,
    borderRadius:100,
    borderColor:'white',
    borderWidth:2,
    bottom:width*0.16,
    left:width*0.59
  },
  title: {
    fontSize: width*0.05,
    marginVertical:width*0.03,
    marginLeft:width*0.09
  },
});
