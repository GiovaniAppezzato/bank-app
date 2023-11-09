import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  SafeAreaView,
} from 'react-native';

import styles from './styles';
import Wave from '../../../assets/icons/wave.svg';

const SplashScreen = ({ navigation }) => {
  const [isLoadingApp, setIsLoadingApp] = useState(true);

  async function init() {
    try {
      // ...
    } catch (error) {
      console.log('An error occurred while initializing the app.', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  )
}

export default SplashScreen;