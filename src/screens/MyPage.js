import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  TextInput,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

function MyPage({ navigation }) {
  const [goalWeight, setGoalWeight] = useState('');
  const handleGoalWeightChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setGoalWeight(numericValue);
  };

  const [goalKcal, setGoalKcal] = useState('');
  const handleGoalKcalChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setGoalKcal(numericValue);
  };

  const [goalTime, setGoalTime] = useState('');
  const handleGoalTimeChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setGoalTime(numericValue);
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
      <View style={styles.nameBar}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../image/icongray.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameBarText}>최지훈 회원님</Text>
        </View>
        <View style={styles.bubbleContainer}>
          <View style={styles.bubbleTriangle} />
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>
              최지훈 회원님의 목표 체중은 "{goalWeight} kg"입니다.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.goalBar}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableText, styles.tableHeaderTitle]}>
            이번달 목표
          </Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={[styles.tableText, styles.tableHeader]}>목표 체중</Text>
          <Text style={[styles.tableText, styles.tableHeader]}>
            하루 칼로리
          </Text>
          <Text style={[styles.tableText, styles.tableHeader]}>운동 시간</Text>
        </View>
        <View style={styles.tableRow}>
          <TextInput
            style={[styles.tableText, styles.tableData]}
            value={goalWeight}
            onChangeText={handleGoalWeightChange}
            keyboardType="numeric"
            returnKeyType="done"
          />
          <Text style={styles.unitText}>kg</Text>
          <TextInput
            style={[styles.tableText, styles.tableData]}
            value={goalKcal}
            onChangeText={handleGoalKcalChange}
            keyboardType="numeric"
            returnKeyType="done"
          />
          <Text style={styles.unitText}>Kcal</Text>
          <TextInput
            style={[styles.tableText, styles.tableData]}
            value={goalTime}
            onChangeText={handleGoalTimeChange}
            keyboardType="numeric"
            returnKeyType="done"
          />
          <Text style={styles.unitText}>시간</Text>
        </View>
      </View>
      <View style={styles.chartBox}>
        <Text style={styles.chartBoxText}> weight variation </Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [120, 90, 85, 80, 77, 70],
              },
            ],
          }}
          width={Dimensions.get('window').width}
          height={250}
          yAxisLabel="-"
          yAxisSuffix="kg"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#0D0D0D',
            backgroundGradientTo: '#4F4F4F',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '7',
              stroke: '#5B6DE3',
            },
          }}
          bezier
          style={{
            marginVertical: 10,
            borderRadius: 16,
          }}
        />
      </View>
      {/* tabBar */}
      <View style={styles.contentContainer}>
        <View style={styles.tabContainer}>
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
            onPress={() => navigation.navigate('RcommendExercise')}
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
    //backgroundColor: "#D0F0C0",
    // backgroundColor: "rgba(208, 240, 192, 0.7)",
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  nameBar: {
    borderRadius: 7,
    backgroundColor: '#0D0D0D',
    height: 130,
    width: '90%',
    position: 'absolute',
    top: 85,
    justifyContent: 'center',
    borderColor: '#0785F2',
    borderWidth: 2,
  },
  unitText: {
    fontSize: 18,
    right: 15,
    color: 'gray',
  },
  goalBar: {
    borderRadius: 7,
    backgroundColor: '#0D0D0D',
    height: 130,
    width: '90%',
    position: 'absolute',
    top: 225,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0785F2',
    borderWidth: 2,
  },
  nameBarText: {
    color: '#0785F2',
    fontSize: 30,
    fontWeight: 'bold',
    left: 130,
    bottom: 30,
  },
  bubbleText: {
    color: 'gray',
    fontWeight: 'bold',
    left: 20,
    bottom: 7,
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    top: 15,
    right: 120,
  },
  chartBox: {
    marginTop: 365,
    marginBottom: 20,
  },
  chartBoxText: {
    color: '#0785F2',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tableHeader: {
    color: '#0785F2',
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 20,
    flex: 1,
  },
  tableHeaderTitle: {
    color: '#0D0D0D',
    fontWeight: 'bold',
    backgroundColor: '#0785F2',
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 20,
    flex: 1,
  },
  tableData: {
    flex: 1,
    marginRight: 30,
    textAlign: 'center',
    left: 14,
  },
  tableText: {
    fontSize: 18,
    color: '#333333',
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

export default MyPage;
