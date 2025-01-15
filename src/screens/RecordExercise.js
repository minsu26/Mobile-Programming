import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

import Constants from 'expo-constants/build/Constants';
import React, { useState } from 'react';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { Icon } from 'react-native-elements';

const RecordExercise = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([
    { id: '1', title: '플랫 벤치프레스' },
    { id: '2', title: '인클라인 벤치프레스' },
    { id: '3', title: '데드리프트' },
    { id: '4', title: '오버헤드프레스' },
    { id: '5', title: '스쿼트' },
    { id: '6', title: '벤치프레스' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [exerciseTime, setExerciseTime] = useState('');
  const [exerciseIntensity, setExerciseIntensity] = useState('');
  const [exerciseDetails, setExerciseDetails] = useState('');

  const handleItemPress = (item) => {
    console.log('Pressed item:', item);
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setExerciseTime('');
    setExerciseIntensity('');
    setExerciseDetails('');
  };

  const handleAddExercise = () => {
    // Handle adding exercise record to database or performing any other action
    console.log('Exercise added');
    handleModalClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.headerText}
          onPress={() => navigation.navigate('MenuBar')}
        >
          Fit Mate
        </Text>
      </View>
      <View style={styles.top}>
        <View style={styles.searchbar}>
          <Icon
            name="search"
            type="font-awesome"
            color="gray"
            size={30}
            containerStyle={styles.searchIcon}
          />

          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            onSelectItem={setSelectedItem}
            dataSet={items}
          />
        </View>

        <View style={styles.itemList}>
          {selectedItem && (
            <TouchableOpacity
              key={selectedItem.id}
              style={styles.itemButton}
              onPress={() => handleItemPress(selectedItem)}
            >
              <Text style={styles.itemText}>{selectedItem.title}</Text>
              <Text style={styles.recordButton}>
                <Text style={styles.recordButtonText}>수정하기</Text>
              </Text>
            </TouchableOpacity>
          )}

          {items.map((item) => {
            if (selectedItem && item.id === selectedItem.id) {
              return null;
            }
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.itemButton}
                onPress={() => handleItemPress(item)}
              >
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleModalClose}
            >
              <Text style={styles.closeButtonText}>닫기</Text>
            </TouchableOpacity>
            <View style={styles.modalTop}>
              <Text style={styles.modalHeaderText}>Fit Mate</Text>
            </View>
            <View style={styles.modalBody}>
              <Text style={styles.exerciseTitle}>{selectedItem?.title}</Text>
              <TextInput
                style={styles.inputField}
                placeholder="운동 시간"
                value={exerciseTime}
                onChangeText={setExerciseTime}
              />
              <TextInput
                style={styles.inputField}
                placeholder="운동 강도"
                value={exerciseIntensity}
                onChangeText={setExerciseIntensity}
              />
              <TextInput
                style={styles.inputField}
                placeholder="상세 기록"
                value={exerciseDetails}
                onChangeText={setExerciseDetails}
                multiline
              />
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddExercise}
            >
              <Text style={styles.addButtonLabel}>추가하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
            onPress={() => navigation.navigate('LearnExercise')}
            underlayColor="skyblue"
          >
            <Text style={styles.tabButtonText}>LEARN</Text>
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
  top: {
    paddingTop: Constants.statusBarHeight + 20,
    top: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
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
  searchbar: {
    marginTop: 20,
    width: '80%',
    height: 100,
    position: 'relative',
  },
  itemList: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#0D0D0D',
    borderRadius: 5,
    marginVertical: 5,
    borderColor: '#0785F2',
    borderWidth: 2,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  recordButton: {
    backgroundColor: '#0785F2',
    borderRadius: 5,
    padding: 10,
  },
  recordButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 50,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#0D0D0D',
    width: '80%',
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: Constants.statusBarHeight + 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  modalTop: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  modalHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalBody: {
    marginBottom: 20,
  },
  exerciseTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#0785F2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'gray',
  },
  addButton: {
    backgroundColor: '#0785F2',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 265,
    top: 0,
  },
  searchbar: {
    marginTop: 20,
    width: '80%',
    height: 100,
    position: 'relative',
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

export default RecordExercise;
