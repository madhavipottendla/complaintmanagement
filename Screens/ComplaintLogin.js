import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ComplaintLogin = () => {
  const [complaintId, setComplaintId] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Complaint ID:', complaintId);
    
    // Navigate to the next screen after login
    if (complaintId.trim()) {
      navigation.navigate('track', { complaintId });
    } else {
      alert('Please enter a valid Complaint ID');
    }
  };

  return (
    <View style={{ backgroundColor: "#264782", paddingBottom: 216 }}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Complaint Login</Text>
        <PaperInput
          label="Complaint ID"
          value={complaintId}
          onChangeText={text => setComplaintId(text)}
          mode="outlined"
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ComplaintLogin;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    // padding: 20,
    marginTop: 100,
    borderWidth: 0,
    height: 400,
    // width: 380,
    marginHorizontal: 20,
    borderRadius: 13,
    elevation: 2,

  },
  title: {
    fontSize: width * 0.06,
    marginBottom: width * 0.08,
    fontWeight: 'bold',
  },
  input: {
    width: width * 0.8,
    marginBottom: width * 0.05,
  },
  button: {
    width: width * 0.5,
    paddingVertical: width * 0.04,
    backgroundColor: '#264782',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
});
