import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';
import theme from '../../global/styles/theme';
import monkey from '../../assets/images/monkey.jpg';
import config from '../../global/config';
import { useAuth } from '../../hooks/useAuth';

const HomeScreen = ({ navigation }) => {
  const [isShowBalance, setIsShowBalance] = useState(false);

  const { user } = useAuth();

  const transactions = [
    {
      id: 1,
      name: 'Transferência Recebida',
      value: 1000,
      date: '11 Nov',
      type: 'success'
    },
    {
      id: 2,
      name: 'Pix enviado',
      value: 1000,
      date: '11 Nov',
      type: 'danger'
    },
    {
      id: 3,
      name: 'Transferência Recebida',
      value: 1000,
      date: '11 Nov',
      type: 'success'
    },
    {
      id: 4,
      name: 'Transferência Recebida',
      value: 1000,
      date: '11 Nov',
      type: 'success'
    },
    {
      id: 5,
      name: 'Transferência Recebida',
      value: 1000,
      date: '11 Nov',
      type: 'success'
    }
  ]

  function handleNavigationscreen(screen) {
    navigation.navigate(screen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.rowHeader}>
            <View style={styles.wrapperImage}>
              <View style={styles.profileImage}>
                <Image source={{uri: `${config.baseUrl}/storage/users/${user.photo}`}} style={styles.image} resizeMode="center" />
              </View> 
              <TouchableOpacity onPress={() => handleNavigationscreen('ExtractScreen')}>
                <Text style={styles.textHeader}>
                  {user.name}
                </Text>
                <Text style={[styles.textHeader, { fontSize: 12 }]}>
                  Ver extrato
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Feather 
                size={22}
                color={theme.colors.BACKGROUND}
                name={isShowBalance ? 'eye' : 'eye-off'} 
                style={styles.icon}
                onPress={() => {
                  setIsShowBalance(!isShowBalance)
                }}
              />
            </View>
          </View>
          
          <View style={styles.cardBalance}>
            <Text style={styles.textSaldo}>Saldo atual</Text>
            <Text style={styles.textValue}>R$ 347,10</Text>
          </View>
        </View>

        <View style={{ padding: 25 }}>
          <Text style={styles.titleTransactions}>Ações</Text>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.rowItens}>
            <TouchableOpacity style={styles.button} onPress={() => handleNavigationscreen('PixScreen')}>
              <MaterialIcons size={24} name="pix" color={theme.colors.TEXT} />
              <Text style={styles.textButton}>Pix</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleNavigationscreen('CardsScreen')}>
              <FontAwesome size={24} name="credit-card-alt" color={theme.colors.TEXT} />
              <Text style={styles.textButton}>Cartões</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleNavigationscreen('LoansScreen')}>
              <FontAwesome name="bank" size={24} color={theme.colors.TEXT} />
              <Text style={styles.textButton}>Empréstimo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleNavigationscreen('TransferScreen')}>
              <FontAwesome name="dollar" size={24} color={theme.colors.TEXT} />
              <Text style={styles.textButton}>Transferir</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.rowTransactions}>
          <Text style={styles.titleTransactions}>últimas transações</Text>

          {transactions.map((transaction) => (
            <TouchableOpacity style={styles.cardTransactions} key={transaction.id}>
              <AntDesign 
                style={{marginRight: 15}} 
                name={transaction.type === 'success' ? 'downcircle' : 'upcircle'} 
                size={18} 
                color={transaction.type === 'success' ? theme.colors.SUCCESS : theme.colors.DANGER} 
              />

              <View>
                <Text style={styles.nameTransactions}>{transaction.name}</Text>
                <Text style={styles.valueTransactions}>R$ {transaction.value}</Text>
              </View>

              <Text style={styles.dateTrasansactions}>{transaction.date}</Text>
            </TouchableOpacity>
          ))}

          <View style={{ marginVertical: 15, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{  }}>
              <Text style={styles.titleTransactions}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
