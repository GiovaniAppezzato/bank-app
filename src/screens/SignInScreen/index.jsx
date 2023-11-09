import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Button, 
  ImageBackground 
} from "react-native";

import styles from './styles';
import Wave from '../../../assets/icons/wave.svg';

const HomeScreen = ({ navigation }) => {

  function handleGoToSignUp() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <View style={styles.container}>
      <Wave style={{ position: 'absolute', top: 0, opacity: 0.7}} />

      <Image style={styles.logo}
        source={require('../../../assets/icons/Logo.png')}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#051923"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#051923"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGoToSignUp} style={styles.button}>
        <Text style={styles.textButton}>
          Abrir Conta
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;