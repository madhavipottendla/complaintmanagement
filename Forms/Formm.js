import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';

const Formm = () => {
  const navigation = useNavigation();

  // Define an array of data
  const shopDataArray = [
    {
      shopname: "ABC Liquor Store",
      district: "Hyderabad",
      mandal: "Madhapur",
      village: "Gachibowli",
      pincode: "500032"
    },
    {
      shopname: "XYZ Liquor Store",
      district: "Secunderabad",
      mandal: "Kukatpally",
      village: "Miyapur",
      pincode: "500049"
    },
    {
        shopname: "Tonique Liquor Store",
        district: "Hyderabad",
      mandal: "Madhapur",
      village: "Madhapur",
      pincode: "500032"
      },
      {
        shopname: "Barcode liquor mart",
        district: "Medchal Malkajgiri",
        mandal: "Ghatkesar",
        village: "Annojiguda",
        pincode: "500041"
      },
      {
        shopname: "Ameerpet Liquor mart",
        district: "Secunderabad",
        mandal: "Begumpet",
        village: "Ameerpet",
        pincode: "500048"
      },
    // Add more data objects as needed
  ];

  // Convert each data object to a JSON string
  const dataArray = shopDataArray.map(data => JSON.stringify(data));

  // Navigate to the next screen with the selected data
  const handlePress = (jsonData) => {
    navigation.navigate('DetailsScreen', { data: jsonData });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>QR Codes for Shop Details</Text>
      {dataArray.map((jsonData, index) => (
        <View key={index} style={styles.qrContainer}>
          <QRCode
            value={jsonData}
            size={200}
            backgroundColor='white'
            color='black'
          />
          <Button
            title="View Details"
            onPress={() => handlePress(jsonData)}
            style={styles.button}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  qrContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default Formm;
