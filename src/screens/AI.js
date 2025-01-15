import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const API_KEY = 'input api key';
const API_URL = 'https://api.openai.com/v1/chat/completions';

function AI({ navigation }) {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleSend = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: inputText }],
        max_tokens: 600,
        temperature: 0.7,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const responseData = data.choices[0].message.content.trim();
        setResponseText(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text
          style={styles.headerText}
          onPress={() => navigation.navigate('MenuBar')}
        >
          Fit Mate
        </Text>
      </View>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.mainText}>무엇이든 물어보세요!</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            multiline
            placeholder="Enter text"
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.button}
            onPress={handleSend}
            underlayColor="lightgray"
          >
            <Text style={styles.buttonText}>Ask To AI</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.responseBox}>
          <Text style={styles.responseText}>{responseText}</Text>
        </ScrollView>
      </ScrollView>
      <View style={styles.contentContainer}>
        <View style={styles.tabContainer}>
          <TouchableHighlight
            style={styles.tabButton}
            onPress={() => navigation.navigate('MyPage')}
            underlayColor="skyblue"
          >
            <Text style={styles.tabButtonText}>MY PAGE</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.tabButton}
            onPress={() => navigation.navigate('Calendar')}
            underlayColor="skyblue"
          >
            <Text style={styles.tabButtonText}>달력</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.tabButton}
            onPress={() => navigation.navigate('LearnExercise')}
            underlayColor="skyblue"
          >
            <Text style={styles.tabButtonText}>LEARN</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.tabButton}
            onPress={() => navigation.navigate('RecordExercise')}
            underlayColor="skyblue"
          >
            <Text style={styles.tabButtonText}>RECORD</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.tabButton}
            onPress={() => navigation.navigate('RecommendFood')}
            underlayColor="skyblue"
          >
            <Text style={styles.tabButtonText}>FOOD</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.tabButton}
            onPress={() => navigation.navigate('RecommendExercise')}
            underlayColor="skyblue"
          >
            <Text style={styles.tabButtonText}>EXERCISE</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: "rgba(208, 240, 192, 0.7)",
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#0785F2',
    height: 80,
    width: '100%',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  main: {
    height: 80,
    width: '100%',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    height: 100,
    borderWidth: 3,
    borderColor: '#ccc',
    marginBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  responseBox: {
    width: 300,
    borderWidth: 3,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  responseText: {
    marginTop: 20,
    fontSize: 18,
  },
  buttonWrapper: {
    width: 300,
    height: 50,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: '80%',
    backgroundColor: '#0D0D0D',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    borderColor: '#0785F2',
    borderWidth: 1,
  },
  buttonText: {
    color: '#0785F2',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    paddingVertical: 10,
    backgroundColor: '#0785F2',
    bottom: 0,
    zIndex: 999,
  },
  contentContainer: {
    // flex: 1,
    width: '100%',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabButtonText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default AI;
