import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

function MenuBar({ navigation }) {
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

      <View
      // style={[
      //   styles.imageContainer,
      //   { backgroundColor: 'rgba(208, 240, 192, 0.5)' },
      // ]}
      ></View>
      <ScrollView>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate('MyPage')}
            underlayColor="lightgray"
          >
            <Text style={styles.buttonText}>MY PAGE</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate('Calendar')}
            underlayColor="lightgray"
          >
            <Text style={styles.buttonText}>CALENDAR</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate('LearnExercise')}
            underlayColor="lightgray"
          >
            <Text style={styles.buttonText}>LEARN EXERCISE</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate('RecordExercise')}
            underlayColor="lightgray"
          >
            <Text style={styles.buttonText}>RECORD EXERCISE</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate('RecommendFood')}
            underlayColor="lightgray"
          >
            <Text style={styles.buttonText}>RECOMMEND FOOD</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate('RecommendExercise')}
            underlayColor="lightgray"
          >
            <Text style={styles.buttonText}>Recommend Exercise</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate('AI')}
            underlayColor="lightgray"
          >
            <Text style={styles.buttonText}>Ask to AI</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.resultContainer}></View>

        <View style={styles.buttonContainer}>{/* 버튼 삭제 */}</View>
      </ScrollView>
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
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#0785F2',
    height: 80,
    width: '100%',
    // position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
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
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonWrapper: {
    width: 350,
    height: 100,
    // position: 'absolute',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // bottom: 50,
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
    shadowColor: '#555',
    // bottom: 40,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MenuBar;
