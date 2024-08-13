import { View, Text, StyleSheet,Dimensions,Image,TouchableOpacity,Linking} from 'react-native'
import React from 'react'
import Header from '../Screens/Header'


const { width, height } = Dimensions.get('window');
export default function Submit({navigation}) {
  return (
    <View>
    <Header />
    
        <View style={styles.container}>
        <View>
            <Text style={styles.success}>SUCCESS !</Text>
        </View>
        <View style={{paddingHorizontal:width*0.31 , paddingVertical:width*0.10 }}>
        <Image source={require('../assets/yes-1--unscreen.gif')} style={styles.bimage} resizeMode="cover"/>
       </View>

       <View >
       <Text style={styles.text1}>Complaint Registered Successfully!</Text>
       </View>
       <View>
       <Text style={styles.text3}>We will take action within the next 24 hours. Please check your registered mobile number for further details.

       </Text>
       </View>
       <View style={styles.buttonview}>
        <TouchableOpacity onPress={()=>navigation.navigate('home')}>
        <Text style={styles.buttontext}>
           Home
        </Text></TouchableOpacity>
       </View>
        </View>
        
    </View>
  )
}
const styles = StyleSheet.create({
    
    container: { 
    backgroundColor:'white',
    marginHorizontal:width*0.05,
    marginTop:width*0.20,
    marginBottom:width*0.02,
    elevation:20,
    borderRadius:10
  },
  bimage:{
    width:width*0.30,
    height:width*0.30, 
    
  },
  success:{
    fontSize:width*0.05,
    fontWeight:'bold',
    textAlign:'center',
    paddingVertical:width*0.03
  },
  text1:{
    fontSize:width*0.05,
    fontWeight:'500',
    textAlign:'center'
  },
  text3:{
    fontSize:width*0.03,
    fontWeight:'400',
    textAlign:'center',
    color:'gray',
    paddingVertical:width*0.06
  },
  buttontext:{
    fontSize:width*0.04,
    fontWeight:'500',
    color:'black',
    backgroundColor:'white',
    textAlign:'center',
    paddingVertical:width*0.02, 
    paddingHorizontal:width*0.04,
    borderRadius:20,
    borderWidth:1,
    borderColor:'black',
    elevation:20
  },
  buttonview:{
    width:width*0.50,
    marginLeft:width*0.22,
    marginTop:width*0.10,
    marginBottom:width*0.05
  },
  hometext3: {
    fontSize: width*0.03,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical:width*0.05,
    backgroundColor:'#070720',
    color:'white',
    borderRadius:5,
  },
  footer:{
    paddingTop:width*0.19
  },
})