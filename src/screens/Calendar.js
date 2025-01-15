// export default CalendarView;
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ToastAndroid,
  TouchableHighlight,
  Button,
  Text,
  ScrollView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarView = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [records, setRecords] = useState([]);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const onSaveRecord = (record) => {
    const { breakfast, lunch, dinner } = record;
    let breakfastKcalSum = 0;
    let breakfastProteinSum = 0;
    let lunchKcalSum = 0;
    let lunchProteinSum = 0;
    let dinnerKcalSum = 0;
    let dinnerProteinSum = 0;

    for (let i = 0; i < breakfast.length; i++) {
      breakfastKcalSum += Number(breakfast[i].kcal);
      breakfastProteinSum += Number(breakfast[i].protein);
    }

    for (let i = 0; i < lunch.length; i++) {
      lunchKcalSum += Number(lunch[i].kcal);
      lunchProteinSum += Number(lunch[i].protein);
    }

    for (let i = 0; i < dinner.length; i++) {
      dinnerKcalSum += Number(dinner[i].kcal);
      dinnerProteinSum += Number(dinner[i].protein);
    }

    const updatedRecord = {
      ...record,
      breakfastKcalSum,
      breakfastProteinSum,
      lunchKcalSum,
      lunchProteinSum,
      dinnerKcalSum,
      dinnerProteinSum,
    };

    setRecords([...records, updatedRecord]);

    // ToastAndroid.showWithGravity(
    //   '기록이 저장되었습니다!',
    //   ToastAndroid.SHORT,
    //   ToastAndroid.CENTER
    // );

    setSelectedDate(selectedDate);
  };

  let combinedBreakfast = [];
  let combinedLunch = [];
  let combinedDinner = [];
  const renderRecords = () => {
    if (selectedDate === '') {
      return null;
    }

    const selectedRecords = records.filter(
      (record) => record.date === selectedDate
    );

    if (selectedRecords.length === 0) {
      return <Text style={{ marginTop: 10 }}></Text>;
    }
    let breakfastKcalSum = 0;
    let breakfastProteinSum = 0;
    let lunchKcalSum = 0;
    let lunchProteinSum = 0;
    let dinnerKcalSum = 0;
    let dinnerProteinSum = 0;

    selectedRecords.forEach((record) => {
      const { breakfast } = record;
      const { lunch } = record;
      const { dinner } = record;
      combinedBreakfast = [...combinedBreakfast, ...breakfast];
      combinedLunch = [...combinedLunch, ...lunch];
      combinedDinner = [...combinedDinner, ...dinner];
    });

    combinedBreakfast.forEach((item) => {
      breakfastKcalSum += Number(item.kcal);
      breakfastProteinSum += Number(item.protein);
    });

    combinedLunch.forEach((item) => {
      lunchKcalSum += Number(item.kcal);
      lunchProteinSum += Number(item.protein);
    });

    combinedDinner.forEach((item) => {
      dinnerKcalSum += Number(item.kcal);
      dinnerProteinSum += Number(item.protein);
    });
    return (
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
            }}
          >
            {selectedDate}:
          </Text>

          {!!combinedBreakfast.length && (
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'white' }}>- 아침 식사</Text>
              {combinedBreakfast.map((item, index) => (
                <Text style={{ color: 'white' }} key={index}>
                  {item.name} ({item.kcal} kcal) ({item.protein} g)
                </Text>
              ))}
              <Text style={{ color: 'white' }}>
                총 칼로리: {breakfastKcalSum} kcal
              </Text>
              <Text style={{ color: 'white' }}>
                총 단백질: {breakfastProteinSum} g
              </Text>
            </View>
          )}

          {!!combinedLunch.length && (
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'white' }}>- 점심 식사</Text>
              {combinedLunch.map((item, index) => (
                <Text style={{ color: 'white' }} key={index}>
                  {item.name} ({item.kcal} kcal) ({item.protein} g)
                </Text>
              ))}
              <Text style={{ color: 'white' }}>
                총 칼로리: {lunchKcalSum} kcal
              </Text>
              <Text style={{ color: 'white' }}>
                총 단백질: {lunchProteinSum} g
              </Text>
            </View>
          )}

          {!!combinedDinner.length && (
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'white' }}>- 저녁 식사</Text>
              {combinedDinner.map((item, index) => (
                <Text style={{ color: 'white' }} key={index}>
                  {item.name} ({item.kcal} kcal) ({item.protein} g)
                </Text>
              ))}
              <Text style={{ color: 'white' }}>
                총 칼로리: {dinnerKcalSum} kcal
              </Text>
              <Text style={{ color: 'white' }}>
                총 단백질: {dinnerProteinSum} g
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    );
  };

  const COLORS = ['pink', 'blue', 'purple', 'red'];
  const markedDates = {};
  records.forEach((record, index) => {
    const dotColor = COLORS[index % COLORS.length];
    const dotStyle = {
      key: index.toString(),
      color: dotColor,
      selectedDotColor: 'white',
    };

    if (markedDates[record.date]) {
      markedDates[record.date].dots.push(dotStyle);
    } else {
      markedDates[record.date] = { marked: true, dots: [dotStyle] };
    }
  });

  return (
    <View style={{ paddingTop: 50, flex: 1, backgroundColor: '#0D0D0D' }}>
      <Calendar
        current={new Date().toISOString().split('T')[0]}
        minDate={'2023-01-01'}
        maxDate={'2023-12-31'}
        onDayPress={onDayPress}
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        hideArrows={true}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
        disableArrowLeft={true}
        disableArrowRight={true}
        disableAllTouchEventsForDisabledDays={true}
        markingType={'multi-dot'}
        markedDates={markedDates}
        theme={{
          calendarBackground: '#0D0D0D',
          textSectionTitleColor: '#ffffff',
          dayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          monthTextColor: '#ffffff',
          selectedDayBackgroundColor: '#00adf5',
          arrowColor: 'white',
          textDisabledColor: '#666666',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          },
        }}
      />
      {selectedDate !== '' && (
        <Button
          title="Record Diet"
          onPress={() =>
            navigation.navigate('RecordDiet', {
              date: selectedDate,
              onSaveRecord: onSaveRecord,
            })
          }
        />
      )}
      {selectedDate !== '' && (
        <Button
          title="Record Exercise"
          onPress={() =>
            navigation.navigate('RecordExercise', {
              date: selectedDate,
              onSaveRecord: onSaveRecord,
            })
          }
        />
      )}
      {renderRecords()}
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
    flex: 1,
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

export default CalendarView;
