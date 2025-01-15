import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Button,
} from 'react-native';

function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.imageContainer}>
        <Image source={require('../image/Mainmm.jpg')} style={styles.image} />
      </View>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        underlayColor="lightgray"
      >
        <Text style={styles.buttonText}>let's go exercise!</Text>
      </TouchableHighlight>

      <View style={styles.resultContainer}></View>

      <View style={styles.buttonContainer}>{}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 10,
    height: 80,
    width: '60%',
    position: 'absolute',
    top: 288,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#0785F2',
    fontSize: 60, // Increase the font size
    fontWeight: 'bold',
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    color: '#ffffff',
  },
  resultContainer: {
    backgroundColor: '#000000',
  },
  imageContainer: {
    top: -49,
    right: 0,
    height: 370, // Adjust the height as needed
    width: 370, // Adjust the width as needed
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  button: {
    width: '80%',
    height: '10%',
    backgroundColor: '#0D0D0D',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    borderColor: '#0785F2',
    borderWidth: 1,
    shadowColor: '#555',
    bottom: -80,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#0785F2',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Main;
