import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { RadioButton } from 'react-native-paper';
import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView, ScrollView, Platform, TextInput, TouchableOpacity, Image, Alert, Linking } from 'react-native';
import Header from '../Screens/Header';
import { useAppContext } from './AppContext';
const { width, height } = Dimensions.get('window');
export default function Page3({ navigation }) {
   
    const [recording, setRecording] = useState(null);
    const [recordedURI, setRecordedURI] = useState(null);
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState('');
    const [complaintType, setComplaintType] = useState('');
    const { setFormData } = useAppContext();
    useEffect(() => {
        (async () => {
            await Audio.requestPermissionsAsync();
        })();
    }, []);

    const startRecording = async () => {
        try {
            const { granted } = await Audio.requestPermissionsAsync();
            if (!granted) {
                alert('You need to enable audio recording permissions.');
                return;
            }

            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            const { recording } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );

            setRecording(recording);
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    };

    const stopRecording = async () => {
        try {
            await recording.stopAndUnloadAsync();
            const uri = recording.getURI();
            setRecordedURI(uri);
            setRecording(null);
        } catch (err) {
            console.error('Failed to stop recording', err);
        }
    };

    const playRecording = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync({ uri: recordedURI });
            setSound(sound);
            setIsPlaying(true);
            await sound.playAsync();
            sound.setOnPlaybackStatusUpdate((status) => {
                if (!status.isPlaying) {
                    setIsPlaying(false);
                }
            });
        } catch (err) {
            console.error('Failed to play recording', err);
        }
    };

    const handleMicPress = () => {
        if (recording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    const handlePlayPress = () => {
        if (isPlaying) {
            sound.stopAsync();
            setIsPlaying(false);
        } else {
            playRecording();
        }
    };

    const submit = () => {
        setFormData(prevData => ({
          ...prevData,
          complaintText: text,
          complaintType: complaintType,
          recordedURI: recordedURI,
        }));
        navigation.navigate('form2');
      }

    return (
        <View style={{ flex: 1 ,backgroundColor: "#264782"}}>
            <Header />


            <View style={styles.container}>
            <View>
            <Text style={styles.title}>Complaint Details</Text>
        </View>
                <View style={styles.textAreaContainer}>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Type something..."
                        multiline
                        numberOfLines={4}
                        value={text}
                        onChangeText={setText}
                    />
                    <TouchableOpacity style={styles.micButton} onPress={handleMicPress}>
                        <Image
                            source={require('../assets/mic.webp')}
                            style={styles.micIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.radioButtonContainer}>
                    <Text style={styles.radioButtonTitle}>Select Complaint Type:</Text>
                    <RadioButton.Group onValueChange={value => setComplaintType(value)} value={complaintType}>
                        <View style={styles.radioButtonRow}>
                            <RadioButton value="A4Shop Violation" />
                            <Text>A4Shop Violation</Text>
                        </View>
                        <View style={styles.radioButtonRow}>
                            <RadioButton value="Toddy Adulteration" />
                            <Text> Toddy Adulteration </Text>
                        </View>
                        <View style={styles.radioButtonRow}>
                            <RadioButton value="Defence Liquor" />
                            <Text>Defence Liquor</Text>
                        </View>
                        <View style={styles.radioButtonRow}>
                            <RadioButton value="Excise Personnel" />
                            <Text>Excise Personnel </Text>
                        </View>
                    </RadioButton.Group>
                </View>

                {recordedURI && (
                    <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
                        <Text style={styles.buttonText}>{isPlaying ? 'Stop Playing' : 'Play Recording'}</Text>
                    </TouchableOpacity>
                )}

                {isPlaying && (
                    <Image
                        source={require('../assets/recorder.webp')}
                        style={styles.gif}
                    />
                )}
                <View style={styles.buttonview}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.buttontext}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={submit}>
                            <Text style={styles.buttontext}>Next</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
 container: {
        backgroundColor: 'white',
        marginHorizontal: width * 0.05,
        marginTop: width * 0.15,
        marginBottom: width * 0.02,
        elevation: 20,
        borderRadius:15,
    },
    textAreaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: width * 0.05,
        marginHorizontal: width * 0.10

    },
    textArea: {
        flex: 1,
        height: width * 0.30,
        textAlignVertical: 'top',
    },
    
    micIcon: {
        width: width * 0.08,
        height: width * 0.08,
    },
    playButton: {
        marginHorizontal: width * 0.20,
        paddingHorizontal: width * 0.04,
        paddingVertical: width * 0.03,
        borderRadius: 25,
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:'black',
        elevation:10
    },
    buttonText: {
        color: 'black',
        fontSize: width * 0.05,
        fontWeight: '400',
        textAlign: 'center'
    },
    gif: {
        width: width * 0.25,
        height: width * 0.10,
        marginTop: width * 0.04,
        marginHorizontal: width * 0.35
    },
    radioButtonContainer: {
        paddingHorizontal: width * 0.11,
        paddingVertical: width * 0.05,
    },
    radioButtonTitle: {
        fontSize: width * 0.04,
        fontWeight: 'bold',
        marginBottom: width * 0.03,
    },
    radioButtonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: width * 0.03,
    },
    buttontext: {
        fontSize: width * 0.04,
        fontWeight: '400',
        color: 'black',
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: width * 0.02,
        paddingHorizontal: width * 0.06,
        borderRadius: 20,
        marginHorizontal: width * 0.17,
        marginVertical: width * 0.03,
        borderColor:'black',
        borderWidth:1,
        elevation:10
    },
    buttonview: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: width * 0.10,
        marginBottom: width * 0.05
    },
    hometext3: {
        fontSize: width * 0.03,
        fontWeight: '300',
        textAlign: 'center',
        paddingVertical: width * 0.05,
        backgroundColor: '#070720',
        color: 'white',
        borderRadius: 5,
    },
    footer: {
        paddingTop: width * 0.0
    },
    title: {
    fontSize: width*0.05,
    marginVertical:width*0.03,
    marginLeft:width*0.09
  },
});
