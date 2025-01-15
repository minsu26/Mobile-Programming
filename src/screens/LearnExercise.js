import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

const LearnExercise = ({ navigation }) => {
  const [result, setResult] = useState(0);

  const ButtonTypes = {
    NUMBER: 'number',
    ACTION: 'action',
  };

  const Button = ({ text, type, onPress }) => {
    const buttonStyles =
      type === ButtonTypes.NUMBER ? styles.numberButton : styles.actionButton;

    return (
      <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text
          style={styles.headerText}
          onPress={() => navigation.navigate('MenuBar')}
        >
          FIT MATE
        </Text>
      </View>
      <Text style={styles.textStyle}>맨몸운동</Text>
      <View style={styles.buttonContainer}>
        <Button
          text="스쿼트"
          onPress={() => navigation.navigate('ExerciseVideo')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="푸쉬업"
          onPress={() => navigation.navigate('ExerciseVideo')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="플랭크"
          onPress={() => navigation.navigate('ExerciseVideo')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="크런치"
          onPress={() => navigation.navigate('ExerciseVideo')}
        />
      </View>
      <Text style={styles.textStyle}>기구운동</Text>
      <View style={styles.buttonContainer}>
        <Button
          text="벤치 프레스"
          onPress={() => navigation.navigate('ExerciseVideo')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="레그 프레스"
          onPress={() => navigation.navigate('ExerciseVideo')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="숄더 프레스"
          onPress={() => navigation.navigate('ExerciseVideo')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="레플 다운"
          onPress={() => navigation.navigate('ExerciseVideo')}
        />
      </View>
      {/* tabBar */}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#0785F2',
    height: 70,
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
  textStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0785F2',
    top: 90,
  },
  buttonContainer: {
    top: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#0785F2',
    borderWidth: 1,
    marginVertical: 10,
    width: 300,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
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
export default LearnExercise;
