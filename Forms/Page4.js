import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Header from '../Screens/Header';
import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 
import { useAppContext } from './AppContext'; 
const { width, height } = Dimensions.get('window');

export default function Page4() {
  const navigation = useNavigation(); 
  const { setFormData } = useAppContext();
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // State for errors
  const [errors, setErrors] = useState({ firstName: '', lastName: '', phone: '', email: '', address: '' });

  // Validation function
  const validate = () => {
    let isValid = true;
    const newErrors = { firstName: '', lastName: '', phone: '', email: '', address: '' };

    if (!firstName.trim()) {
        newErrors.firstName = 'First name is required.';
        isValid = false;
    }
    if (!lastName.trim()) {
        newErrors.lastName = 'Last name is required.';
        isValid = false;
    }
    if (!phone.trim()) {
        newErrors.phone = 'Phone number is required.';
        isValid = false;
    }
    if (!email.trim()) {
        newErrors.email = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email address is invalid.';
        isValid = false;
    }
    if (!address.trim()) {
        newErrors.address = 'Address is required.';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle next button click
  const handleNext = () => {
    if (validate()) {
      setFormData(prevData => ({
        ...prevData,
        firstName,
        lastName,
        phone,
        email,
        address,
    }));
        navigation.navigate('form5');
    }
  };

  return (
    
        <View style = {{backgroundColor:"#264782",paddingBottom:110}}>
          <Header />
          <KeyboardAvoidingView 
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={{ flex: 0 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={{ paddingTop: width * 0.05 }}>
              <Text style={styles.title}>Personal Details</Text>
            </View>
            <View style={styles.inputview}>
              <PaperInput
                label="First Name"
                value={firstName}
                onChangeText={text => setFirstName(text)}
                mode="outlined"
                style={styles.input}
                // error={!!errors.firstName}
                // helperText={errors.firstName}
              />
            </View>
            <View style={styles.inputview}>
              <PaperInput
                label="Last Name"
                value={lastName}
                onChangeText={text => setLastName(text)}
                mode="outlined"
                style={styles.input}
                // error={!!errors.lastName}
                // helperText={errors.lastName}
              />
            </View>
            <View style={styles.inputview}>
              <PaperInput
                label="Phone"
                value={phone}
                onChangeText={text => setPhone(text)}
                mode="outlined"
                style={styles.input}
                keyboardType="numeric"
                // error={!!errors.phone}
                // helperText={errors.phone}
              />
            </View>
            <View style={styles.inputview}>
              <PaperInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                mode="outlined"
                style={styles.input}
                // error={!!errors.email}
                // helperText={errors.email}
              />
            </View>
            <View style={styles.inputview}>
              <PaperInput
                label="Address"
                value={address}
                onChangeText={text => setAddress(text)}
                mode="outlined"
                style={styles.input}
                // error={!!errors.address}
                // helperText={errors.address}
              />
            </View>
            <View style={styles.buttonview}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.buttontext}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext}>
                <Text style={styles.buttontext}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
       
      </ScrollView>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
  },
  inputview: {
    paddingHorizontal: width * 0.10,
    paddingVertical: width * 0.01,
    marginVertical: width * 0.00
  },
  buttontext: {
    fontSize: width * 0.04,
    fontWeight: '400',
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    paddingVertical: width * 0.02, 
    paddingHorizontal: width * 0.10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    elevation: 20
  },
  buttonview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: width * 0.10,
    marginBottom: width * 0.05
  },
  container: {
    backgroundColor: 'white',
    marginHorizontal: width * 0.06,
    marginTop: width * 0.23,
    marginBottom: width * 0.08,
    elevation: 10,
    borderRadius: 20
  },
  title: {
    fontSize: width * 0.05,
    marginVertical: width * 0.03,
    marginLeft: width * 0.09
  },
});
