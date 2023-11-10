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
import Rectangle2 from '../../../assets/icons/Rectangle 2.svg';
import Rectangle1 from '../../../assets/icons/Rectangle 1.svg';
import Rectangle153 from '../../../assets/icons/Rectangle 153.svg';

const HomeScreen = ({ navigation }) => {

  function handleGoToSignUp() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <View style={styles.container}>

      <Rectangle153 style={{ position: 'absolute', top: 0}} />
      <Image style={styles.logo}
        source={require('../../../assets/icons/Logo.png')}
      />

      
      <View style={styles.containerView}>

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

    </View>
  )
}

export default HomeScreen;