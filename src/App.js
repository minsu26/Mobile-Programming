import { StatusBar } from 'expo-status-bar';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Main from './screens/Main';
import Login from './screens/Login';
import Calendar from './screens/Calendar';
import MyPage from './screens/MyPage';
import RecordExercise from './screens/RecordExercise';
import ExerciseVideo from './screens/ExerciseVideo';
import LearnExercise from './screens/LearnExercise';
import RecordDiet from './screens/RecordDiet';
import MenuBar from './screens/MenuBar';
import RecommendFood from './screens/RecommendFood';
import AI from './screens/AI';
import RecommendExercise from './screens/RecommendExercise';
import CustomModal from './components/CustomModal';

const Stack = createStackNavigator();
const App = () => {
  const [result, setResult] = useState(0);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="FIT MATE" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="RecordExercise" component={RecordExercise} />
        <Stack.Screen name="ExerciseVideo" component={ExerciseVideo} />
        <Stack.Screen name="LearnExercise" component={LearnExercise} />
        <Stack.Screen name="RecordDiet" component={RecordDiet} />
        <Stack.Screen name="MenuBar" component={MenuBar} />
        <Stack.Screen name="RecommendFood" component={RecommendFood} />
        <Stack.Screen name="AI" component={AI} />
        <Stack.Screen name="RecommendExercise" component={RecommendExercise} />
        <Stack.Screen name="CustomModal" component={CustomModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
