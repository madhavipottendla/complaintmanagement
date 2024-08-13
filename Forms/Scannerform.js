import React from 'react';
import { View, Text, StyleSheet ,Dimensions,TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../Screens/Header';
import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';
import { useAppContext } from './AppContext';
const { width } = Dimensions.get('window');
export default function Scannerform () {
  const route = useRoute();
  const navigation = useNavigation();
  const { setFormData } = useAppContext();

  // Parse data only once when the component mounts
  const shopData = React.useMemo(() => JSON.parse(route.params.data), [route.params.data]);
 
  React.useEffect(() => {
    setFormData(prevData => ({ ...prevData, ...shopData }));
  }, [setFormData, shopData]); 

  return (
    <View>
    <Header />
    <View style={styles.card}>
    <View style={styles.container}>
        <View >
           <Text style={styles.title}>Shop Details</Text>
        </View>
        <View style={styles.inputview}>
        <PaperInput
        label="Shop Name"
        value={shopData.shopname}
        // onChangeText={setShopName}
        mode="outlined"
        style={styles.input}
      />
        </View>
        <View style={styles.inputview}>
        <PaperInput
        label="District"
        value={shopData.district}
        // onChangeText={setShopName}
        mode="outlined"
        style={styles.input}
      />
        </View>
        <View style={styles.inputview}>
        <PaperInput
        label="Mandal"
        value={shopData.mandal}
        // onChangeText={setShopName}
        mode="outlined"
        style={styles.input}
      />
        </View>
        <View style={styles.inputview}>
        <PaperInput
        label="Village"
        value={shopData.village}
        // onChangeText={setShopName}
        mode="outlined"
        style={styles.input}
      />
        </View>
        <View style={styles.inputview}>
        <PaperInput
        label="Pincode"
        value={shopData.pincode}
        // onChangeText={setShopName}
        mode="outlined"
        style={styles.input}
      />
        </View>
        <View style={styles.buttonview}>
            <TouchableOpacity onPress={() => navigation.navigate('form3')}>
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


