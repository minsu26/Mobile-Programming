import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

function RecommendFood({ navigation }) {
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
      <ScrollView horizontal>
        <View style={styles.imageContainer}>
          <Image source={require('../image/food1.png')} style={styles.image} />
          <Image source={require('../image/food2.png')} style={styles.image} />
        </View>
      </ScrollView>
      {/* tabBar */}
      <View style={styles.contentContainer}>
        <View style={styles.tabContainer}>
          <TouchableHighlight
            style={styles.tabButton}
            onPress={() => navigation.navigate('MyPage')}
            underlayColor="white"
          >
            <Text style={styles.tabButtonText}>MY PAGE</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.tabButton}
            onPress={() => navigation.navigate('Calendar')}
            underlayColor="white"
          >
            <Text style={styles.tabButtonText}>달력</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.tabButton}
            onPress={() => navigation.navigate('LearnExercise')}
            underlayColor="white"
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
            onPress={() => navigation.navigate('RecommendExercise')}
            underlayColor="skyblue"
          >
            <Text style={styles.tabButtonText}>Exercise</Text>
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
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#0785F2',
    height: 80,
    width: '100%',
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 75,
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    // justifyContent: 'space-around',
    // paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0785F2',
    position: 'absolute',
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

export default RecommendFood;
