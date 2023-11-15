import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";

import styles from './styles';
import Rectangle153 from '../../../assets/icons/Rectangle 153.svg';

// TODO: Começar a usar os componentes. 
import Button from '../../components/Button';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';

const HomeScreen = ({ navigation }) => {
  function handleGoToSignUp() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    keyboardShouldPersistTaps="handled"
    style={styles.container}>

      <View style={styles.containerHeader}> 
        <Rectangle153 style={{  }} />
         <Image style={styles.logo}
          source={require('../../../assets/icons/Logo.png')}
        /> 
      </View>
      
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
    </ScrollView>
  )
}

export default HomeScreen;