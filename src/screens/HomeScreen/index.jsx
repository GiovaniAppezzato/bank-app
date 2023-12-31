import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';

import styles from './styles';
import theme from '../../global/styles/theme';
import config from '../../global/config';
import Loading from '../../components/Loading';
import {useAuth} from '../../hooks/useAuth';
import {useAccount} from '../../hooks/useAccount';
import {getTitleReport} from '../../utils/transferUtils';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isShowBalance, setIsShowBalance] = useState(false);

  const {user} = useAuth();
  const {account, reports, getAccount, getReports} = useAccount();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      await Promise.all([
        getAccount(),
        getReports()
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleNavigationscreen(screen) {
    navigation.navigate(screen);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.rowHeader}>
            <View style={styles.wrapperUser}>
              <Image
                style={styles.image}
                source={{ uri: `${config.baseUrl}/storage/users/${user.photo}` }}
              />

              <TouchableOpacity
                onPress={() => handleNavigationscreen('ExtractScreen')}>
                <Text style={styles.textHeader}>{user.name}</Text>
                <Text style={[styles.textHeader, {fontSize: 12}]}>
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
                  setIsShowBalance(!isShowBalance);
                }}
              />
            </View>
          </View>

          <View style={styles.cardBalance}>
            <Text style={styles.textSaldo}>Saldo atual</Text>
            <Text style={styles.textValue}>
              {!isShowBalance ? 'R$ ******' : account?.balance?.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </View>
        </View>

        <View style={{padding: 25}}>
          <Text style={styles.titleTransactions}>Ações</Text>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.rowItens}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNavigationscreen('PixScreen')}>
              <MaterialIcons size={24} name="pix" color={theme.colors.TEXT} />
              <Text style={styles.textButton}>Pix</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNavigationscreen('CardsScreen')}>
              <FontAwesome
                size={24}
                name="credit-card-alt"
                color={theme.colors.TEXT}
              />
              <Text style={styles.textButton}>Cartões</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNavigationscreen('SavingsScreen')}>
              <FontAwesome size={24} name="dollar" color={theme.colors.TEXT} />
              <Text style={styles.textButton}>Poupança</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNavigationscreen('LoansScreen')}>
              <FontAwesome name="bank" size={24} color={theme.colors.TEXT} />
              <Text style={styles.textButton}>Empréstimo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNavigationscreen('TransferScreen')}>
              <FontAwesome name="dollar" size={24} color={theme.colors.TEXT} />
              <Text style={styles.textButton}>Transferir</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.rowTransactions}>
          <Text style={styles.titleTransactions}>Últimas transações</Text>

          {reports.slice(0, 5).map(report => (
            <View
              style={styles.cardTransactions}
              key={report.id}
            >
              <AntDesign
                style={{marginRight: 15}}
                name={report.status === 'in' ? 'downcircle' : 'upcircle'}
                size={18}
                color={
                  report.status === 'in'
                    ? theme.colors.SUCCESS
                    : theme.colors.DANGER
                }
              />

              <View>
                <Text style={styles.nameTransactions}>
                  {getTitleReport(report)}
                </Text>
                <Text style={styles.valueTransactions}>
                  {!isShowBalance ? 'R$ ****' : report?.amount?.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </Text>
              </View>

              <Text style={styles.dateTrasansactions}>
                {moment(report.created_at).format('DD/MM/YYYY')}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
