import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, Pressable, KeyboardAvoidingView, TouchableHighlight, Platform, Keyboard, Text, Modal, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputField from '../components/InputField';

const RecordDiet = ({ route }) => {
  const navigation = useNavigation();
  const { date, onSaveRecord } = route.params;
  const [breakfast, setBreakfast] = useState('');
  const [breakfastKcal, setBreakfastKcal] = useState('');
  const [breakfastProtein, setBreakfastProtein] = useState('');
  const [lunch, setLunch] = useState('');
  const [lunchKcal, setLunchKcal] = useState('');
  const [lunchProtein, setLunchProtein] = useState('');
  const [dinner, setDinner] = useState('');
  const [dinnerKcal, setDinnerKcal] = useState('');
  const [dinnerProtein, setDinnerProtein] = useState('');
  const [breakfastList, setBreakfastList] = useState([]);
  const [lunchList, setLunchList] = useState([]);
  const [dinnerList, setDinnerList] = useState([]);
  const [showBreakfastPopup, setShowBreakfastPopup] = useState(false);
  const [showLunchPopup, setShowLunchPopup] = useState(false);
  const [showDinnerPopup, setShowDinnerPopup] = useState(false);

  const saveBreakfast = () => {
    const newBreakfast = {
      name: breakfast,
      kcal: breakfastKcal,
      protein: breakfastProtein
    };
    setBreakfastList([...breakfastList, newBreakfast]);
    setBreakfast('');
    setBreakfastKcal('');
    setBreakfastProtein('');
    setShowBreakfastPopup(true);
  };


  const saveLunch = () => {
    const newLunch = {
      name: lunch,
      kcal: lunchKcal,
      protein: lunchProtein
    };
    setLunchList([...lunchList, newLunch]);
    setLunch('');
    setLunchKcal('');
    setLunchProtein('');
    setShowLunchPopup(true);
  };

  const saveDinner = () => {
    const newDinner = {
      name: dinner,
      kcal: dinnerKcal,
      protein: dinnerProtein
    };
    setDinnerList([...dinnerList, newDinner]);
    setDinner('');
    setDinnerKcal('');
    setDinnerProtein('');
    setShowDinnerPopup(true);
  };

  const saveRecord = () => {
    const record = {
      date: date,
      breakfast: breakfastList,
      lunch: lunchList,
      dinner: dinnerList
    };
    onSaveRecord(record);
    navigation.goBack();
  };

  return (
    <ScrollView>
    <KeyboardAvoidingView 
      style={{flex : 1}}
      behavior={Platform.select({ios: 'padding'})}
    >
      <Pressable 
        style={{flex : 1}}
        onPress={() => Keyboard.dismiss()}
      >
        <View style={styles.container}>
          <View style={styles.mealContainer}>
            <View style={styles.mealContainerLeft}>
            <Image
              source={require('../image/morning.png')} // Replace with the actual path to your image file
              style={styles.imageStyle} // Optional: Adjust the style of the image as needed
            />
            </View>
            <View style={styles.mealContainerRight}>
            <InputField
              value={breakfast}
              onChangeText={text => setBreakfast(text)}
              placeholder="아침 음식 이름"
            />
            <InputField
              value={breakfastKcal}
              onChangeText={text => setBreakfastKcal(text)}
              placeholder="아침 kcal"
              keyboardType="numeric"
            />
            <InputField
              value={breakfastProtein}
              onChangeText={text => setBreakfastProtein(text)}
              placeholder="아침 단백질 (g)"
              keyboardType="numeric"
            />
            </View>
          </View>
          <TouchableHighlight style={styles.button} onPress={saveBreakfast} underlayColor="lightgray">
          <Text style={styles.buttonText}>아침에 먹은 음식 추가</Text>
        </TouchableHighlight>
          <Modal
            visible={showBreakfastPopup}
            animationType="fade"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalMessage}>아침 음식이 추가되었습니다.</Text>
                <Button
                  title="확인"
                  onPress={() => setShowBreakfastPopup(false)}
                />
              </View>
            </View>
          </Modal>
          <View style={styles.mealContainer}>
          <View style={styles.mealContainerLeft}>
            <Image
              source={require('../image/lunch.png')} // Replace with the actual path to your image file
              style={styles.imageStyle} // Optional: Adjust the style of the image as needed
            />
            </View>
            <View style={styles.mealContainerRight}>
            <InputField
              value={lunch}
              onChangeText={text => setLunch(text)}
              placeholder="점심 음식 이름"
              style={styles.inputField}
            />
            <InputField
              value={lunchKcal}
              onChangeText={text => setLunchKcal(text)}
              placeholder="점심 kcal"
              keyboardType="numeric"
            />
            <InputField
              value={lunchProtein}
              onChangeText={text => setLunchProtein(text)}
              placeholder="점심 단백질 (g)"
              keyboardType="numeric"
            />
            </View>
          </View>
          <TouchableHighlight style={styles.button} onPress={saveLunch} underlayColor="lightgray">
          <Text style={styles.buttonText}>점심에 먹은 음식 추가</Text>
        </TouchableHighlight>
          <Modal
            visible={showLunchPopup}
            animationType="fade"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalMessage}>점심 음식이 추가되었습니다.</Text>
                <Button
                  title="확인"
                  onPress={() => setShowLunchPopup(false)}
                />
              </View>
            </View>
          </Modal>
          <View style={styles.mealContainer}>
          <View style={styles.mealContainerLeft}>
            <Image
              source={require('../image/evening.png')} // Replace with the actual path to your image file
              style={styles.imageStyle} // Optional: Adjust the style of the image as needed
            />
            </View>
            <View style={styles.mealContainerRight}>
            <InputField
              value={dinner}
              onChangeText={text => setDinner(text)}
              placeholder="저녁 음식 이름"
            />
            <InputField
              value={dinnerKcal}
              onChangeText={text => setDinnerKcal(text)}
              placeholder="저녁 kcal"
              keyboardType="numeric"
            />
            <InputField
              value={dinnerProtein}
              onChangeText={text => setDinnerProtein(text)}
              placeholder="저녁 단백질 (g)"
              keyboardType="numeric"
            />
            </View>
          </View>
          <TouchableHighlight style={styles.button} onPress={saveDinner} underlayColor="lightgray">
          <Text style={styles.buttonText}>저녁에 먹은 음식 추가</Text>
        </TouchableHighlight>
          <Modal
            visible={showDinnerPopup}
            animationType="fade"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalMessage}>저녁 음식이 추가되었습니다.</Text>
                <Button
                  title="확인"
                  onPress={() => setShowDinnerPopup(false)}
                />
              </View>
            </View>
          </Modal>
          <View style={styles.hidden}></View>
          <Button title="저장" onPress={saveRecord}/>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#0D0D0D',
  },
  mealContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginBottom: 3,
  },
  mealContainerLeft: {
    flex: 1,
  },
  mealContainerRight: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalMessage: {
    marginBottom: 20,
  },
  imageStyle: {
    width: 100, // Adjust the width of the image as needed
    height: 100, // Adjust the height of the image as needed
    marginLeft: 20, // Optional: Add margin if desired
    marginBottom: 20
  },
  hidden: {
    marginBottom: 10
  },
  button: {
    width: "70%",
    height: "6%",
    backgroundColor: "#0D0D0D",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderColor: "#0785F2",
    borderWidth: 1,
    shadowColor: "#555",
    left: 50,
    bottom: 7,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#0785F2",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RecordDiet;