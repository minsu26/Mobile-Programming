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

function RecommendExercise({ navigation }) {
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

      <View>
        <Image source={require('../image/Exercise.png')} style={styles.image} />
      </View>

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
            onPress={() => navigation.navigate('AI')}
            underlayColor="skyblue"
          >
            <Text style={styles.tabButtonText}>AI</Text>
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
  image: {
    width: 500,
    height: 400,
    resizeMode: 'contain',
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    paddingVertical: 10,
    backgroundColor: '#0785F2',
    // position: 'absolute',
    bottom: 0,
    zIndex: 999,
  },
  contentContainer: {
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

export default RecommendExercise;
