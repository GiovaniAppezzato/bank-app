import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity, 
  ScrollView
} from 'react-native';
import styles from './styles';
import { useAuth } from '../../hooks/useAuth';
import monkey from '../../assets/images/monkey.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../global/styles/theme';


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
      <Text style={styles.textHeader}> Matheus Tavares </Text>   
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
    
    <ScrollView horizontal={true} >

      <View style={styles.rowItens} >
      <TouchableOpacity style={styles.button}>
        <Icon name="dollar" size={30} color={theme.colors.TEXT} />
        <Text style={styles.textButton}>
          Transferir
        </Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.button}>
        <Icon name="bank" size={30} color={theme.colors.TEXT} />
        <Text style={styles.textButton}>
          Empréstimo
        </Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.button}>
        <Icon name="credit-card-alt" size={30} color={theme.colors.TEXT} />
        <Text style={styles.textButton}>
          Cartões
        </Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.button}>
        <Icon name="dollar" size={30} color={theme.colors.TEXT} />
        <Text style={styles.textButton}>
          Cartões
        </Text>
      </TouchableOpacity> 

      </View>
    </ScrollView>
  </View>
  )
}
export default HomeScreen;