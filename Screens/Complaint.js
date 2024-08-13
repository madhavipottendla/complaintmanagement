import React, { useMemo, useRef,useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../CSS/Css';
import BottomSheet from '@gorhom/bottom-sheet';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';
export default function Complaint() {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const handleOpenBottomSheet = () => {
    setAnimate(true);
    bottomSheetRef.current?.expand();
  };

  const handleSheetChange = (index) => {
    if (index === -1) {
      setOverlayVisible(false);
      console.log('BottomSheet is fully collapsed');
    } else {
      setOverlayVisible(true);
    }
  };


  // Complaint component


  return (
    <View style={{  flex: 0 ,backgroundColor:'#264782' }}>
    {overlayVisible && (
      <View style={styles.overlay} />
    )}
    
    <View style={styles.sliderbg}>
    <Animatable.Image animation='fadeInRight'  duration={3000} source={require('../assets/image1.png')} style={styles.sliderimage} />
    </View>
    <View >
        <TouchableOpacity style={styles.complaint1} onPress={()=>navigation.navigate('track')}>
          <Text style={styles.tracktext} >Track Your Complaint</Text>
        </TouchableOpacity>
      </View>
    
      <TouchableOpacity
        onPress={handleOpenBottomSheet}
        style={styles.complaint}
      >
        <Text style={styles.complainttext}>Register Your Complaint +</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
      <Text style={styles.hometext3} onPress={() => { Linking.openURL('https://www.ridhitek.com') }}>@ Powered By <Text style={{ color: 'green' }}>Ridhitek</Text></Text>
     </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onChange={handleSheetChange}
        backgroundStyle={styles.bottomSheetBackground} 
        style={styles.bottomSheet} 
      >   
      
      <View style={styles.bottomv}>
        <Animatable.View style={{paddingBottom:10}}   animation={animate ? 'flipInX' : undefined} duration={1000} >
        <TouchableOpacity onPress={()=> navigation.navigate('scan')}>
          <Text style={styles.complainttext1}>Scan qrcode To Register Complaint Here</Text>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View style={{paddingTop:30}}   animation={animate ? 'flipInX' : undefined} duration={1000}>
        <TouchableOpacity onPress={()=> navigation.navigate('form1')}>
        <Text style={styles.complainttext1}>Register Your Complaint Manually Here</Text>
        </TouchableOpacity>
      </Animatable.View>
      </View>
      </BottomSheet>

      
    </View>
  );
}
