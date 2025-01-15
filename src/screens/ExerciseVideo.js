import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { useState } from 'react';
import Video from 'react-native-video';

const Constants = {
  statusBarHeight: 20,
};

const ExerciseVideo = ({ navigation }) => {
  const [playVideo, setPlayVideo] = useState(false);

  const videoId1 = 'vQNFiMi0m9M';
  const thumbnailUrl1 = `https://img.youtube.com/vi/${videoId1}/hqdefault.jpg`;
  const videoUrl1 = `https://www.youtube.com/watch?v=${videoId1}`;

  const videoId2 = 'MWjKQGoNW0U';
  const thumbnailUrl2 = `https://img.youtube.com/vi/${videoId2}/hqdefault.jpg`;
  const videoUrl2 = `https://www.youtube.com/watch?v=${videoId2}`;

  const videoId3 = 'Fk9j6pQ6ej8';
  const thumbnailUrl3 = `https://img.youtube.com/vi/${videoId3}/hqdefault.jpg`;
  const videoUrl3 = `https://www.youtube.com/watch?v=${videoId3}`;

  const videoId4 = 'kz84Fc6HGu4';
  const thumbnailUrl4 = `https://img.youtube.com/vi/${videoId4}/hqdefault.jpg`;
  const videoUrl4 = `https://www.youtube.com/watch?v=${videoId4}`;

  const handlePress1 = () => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId1}`;
    Linking.openURL(youtubeUrl);
  };

  const handlePress2 = () => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId2}`;
    Linking.openURL(youtubeUrl);
  };

  const handlePress3 = () => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId3}`;
    Linking.openURL(youtubeUrl);
  };

  const handlePress4 = () => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId4}`;
    Linking.openURL(youtubeUrl);
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>
            <Image source={require('../image/video.png')} style={styles.icon} />
            스쿼트 영상 보러가기
          </Text>
        </View>
        <TouchableOpacity style={styles.resultContainer} onPress={handlePress1}>
          {playVideo ? (
            <Video source={{ uri: videoUrl1 }} controls={true} />
          ) : (
            <Image
              source={{ uri: thumbnailUrl1 }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.resultContainer} onPress={handlePress2}>
          {playVideo ? (
            <Video source={{ uri: videoUrl2 }} controls={true} />
          ) : (
            <Image
              source={{ uri: thumbnailUrl2 }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.resultContainer} onPress={handlePress3}>
          {playVideo ? (
            <Video source={{ uri: videoUrl3 }} controls={true} />
          ) : (
            <Image
              source={{ uri: thumbnailUrl3 }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.resultContainer} onPress={handlePress4}>
          {playVideo ? (
            <Video source={{ uri: videoUrl4 }} controls={true} />
          ) : (
            <Image
              source={{ uri: thumbnailUrl4 }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </TouchableOpacity>
      </ScrollView>
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
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    marginTop: 70,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  textContainer: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 35,
    fontWeight: '700',
    color: '#0785F2',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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

export default ExerciseVideo;
