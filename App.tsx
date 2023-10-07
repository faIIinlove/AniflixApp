/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

function App(): JSX.Element {

  return (
    <VideoPlayer source={{ uri: "https://tmpfiles.org/dl/2745084/380769081_830657991881602_7067960756974888549_n.mp4" }}   // Can be a URL or a local file.              // Callback when video cannot be loaded
      style={styles.backgroundVideo} />
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
