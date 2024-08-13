import React from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, ScrollView,TouchableOpacity } from 'react-native';
import Header from './Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const steps = [
  { status: 'Complaint Raised', completed: true },
  { status: 'Assigned to DC', completed: false },
  { status: 'ATR Preliminary Submitted', completed: false },
  { status: 'Complaint Resolved', completed: false },
  { status: 'Feedback', completed: false },
];

const ComplaintTrackingScreen = () => {
  const animation = new Animated.Value(0);
   const navigation = useNavigation();

  Animated.timing(animation, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  const interpolatedTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0],
  });

  return (
    <View>
    <Header />
    <View style = {{padding :15,borderWidth:0,width:370,marginTop:20,marginLeft:10,borderRadius:17,elevation:1,
      backgroundColor:"white",marginHorizontal:50
    }}>
    <Text style = {{fontWeight:'700',fontSize:30}}>Complaint Tracker</Text>
    <Text style = {{fontWeight:'700',fontSize:20}} >Complaint Id:PRKOOO9987</Text>
    <Text style = {{fontWeight:'700',fontSize:20}} >Name:Prabhas</Text>
    <Text style = {{fontWeight:'700',fontSize:20}} >Complaint Type:A4 Violation</Text>
    </View>
    <View style={styles.container}>
   
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={[styles.stepsContainer,]}>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <View style={[styles.circle, step.completed && styles.circleCompleted]}>
                {step.completed && <Text style={styles.checkmark}>✔</Text>}
              </View>
              <View style={styles.stepTextContainer}>
                <Text style={[styles.stepText, step.completed && styles.stepTextCompleted]}>
                  {step.status}
                </Text>
              </View>
              {index < steps.length - 1 && <View style={styles.line} />}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
    <View style={styles.containericon}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('home', { screen: 'Complaint' })}>
                <Ionicons name="home" size={30} color="black" />
            </TouchableOpacity>
        </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#f5f5f5',
    padding: 20,
  
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal:40,
    marginVertical:60
    
  },
  stepsContainer: {
    justifyContent: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  circleCompleted: {
    backgroundColor: 'green',
  },
  checkmark: {
    color: 'white',
    fontSize: 18,
  },
  stepTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  stepText: {
    fontSize: 16,
    color: '#333',
  },
  stepTextCompleted: {
    color: 'black',
    fontWeight: 'bold',
  },
  line: {
    height: 30,
    width: 2,
    backgroundColor: 'gray',
    position: 'absolute',
    left: 15,
    top: 30,
  },

  containericon: {
    flex: 1,

},
iconContainer: {
    position: 'absolute',
    top: 10, 
    right: 10, 
    padding: 10,
    backgroundColor: 'white', 
    borderRadius: 25, 
    elevation: 5, 
},
});

export default ComplaintTrackingScreen;