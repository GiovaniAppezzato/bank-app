import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import styles from './styles';
import { useAuth } from '../../hooks/useAuth';
import monkey from '../../assets/images/monkey.jpg'

const HomeScreen  = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  return(
  <View style={styles.container}>
    <View style={styles.header} >                     
      <View style = {styles.rowHeader}>
        <View style={styles.profileImage}>
        {/* <Image source={user.photo} style={styles.image} resizeMode="center"/>  */}
        <Image source={monkey} style={styles.image} resizeMode="center"/> 
        </View> 
      <Text style={styles.textHeader}> Matheus Tavares</Text>   
      </View>
      <View style={styles.cardBalance}>
        <Text style={styles.textSaldo}>
          Saldo atual
        </Text>
        <Text style={styles.textValue}>
          R$ 1.000,00
        </Text>
      </View>
    </View>
  </View>
  )
}
export default HomeScreen;