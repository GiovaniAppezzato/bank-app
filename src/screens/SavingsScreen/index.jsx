import React, {useState, useRef} from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Formik/Input';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {Masks} from 'react-native-mask-input';
import {Formik} from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputMask from '../../components/Formik/InputMask';
import {useAccount} from '../../hooks/useAccount';
import InputSavings from '../../components/Formik/InputSavings';

const transactions = [
  {
    id: 1,
    name: 'Aplicação',
    value: 1000,
    date: '11 Nov',
    type: 'success',
  },
  {
    id: 2,
    name: 'Resgate',
    value: 1000,
    date: '11 Nov',
    type: 'danger',
  },
  {
    id: 3,
    name: 'Aplicação',
    value: 1000,
    date: '11 Nov',
    type: 'success',
  },
  {
    id: 4,
    name: 'Aplicação',
    value: 1000,
    date: '11 Nov',
    type: 'success',
  },
  {
    id: 5,
    name: 'Aplicação',
    value: 1000,
    date: '11 Nov',
    type: 'success',
  },
];

const SavingsScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  const modalRef = useRef(null);
  const formRef = useRef(null);
  const {account} = useAccount();
  function handleToggleModal() {
    if (isVisible) {
      modalRef.current?.close();
    } else {
      modalRef.current?.open();
    }

    setIsVisible(!isVisible);
  }
  function onSubmit(values) {
    try {
      console.log(values);
    } catch (errors) {}
  }
  return (
    <React.Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.BACKGROUND}
      />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title={'Poupança'} />
          <View style={styles.cardSavings}>
            <View style={styles.totalSavings}>
              <Text style={styles.textCard}>Poupança</Text>
              <Text style={styles.textValue}>R$ 1.000,00</Text>
              <Button
                color={'white'}
                title={'Movimentar'}
                titleStyle={{
                  color: '#0160A6',
                  fontSize: 15,
                  fontFamily: theme.fonts.REGULAR,
                }}
                style={{
                  marginTop: 10,
                  borderRadius: 10,
                }}
                onPress={() => {
                  handleToggleModal();
                }}
              />
            </View>
          </View>
          <View style={styles.rowTransactions}>
            <Text style={styles.titleTransactions}>últimas transações</Text>

            {transactions.map(transaction => (
              <TouchableOpacity
                style={styles.cardTransactions}
                key={transaction.id}>
                <AntDesign
                  style={{marginRight: 15}}
                  name={
                    transaction.type === 'success' ? 'downcircle' : 'upcircle'
                  }
                  size={18}
                  color={
                    transaction.type === 'success'
                      ? theme.colors.SUCCESS
                      : theme.colors.DANGER
                  }
                />

                <View>
                  <Text style={styles.nameTransactions}>
                    {transaction.name}
                  </Text>
                  <Text style={styles.valueTransactions}>
                    R$ {transaction.value}
                  </Text>
                </View>

                <Text style={styles.dateTrasansactions}>
                  {transaction.date}
                </Text>
              </TouchableOpacity>
            ))}

            <View
              style={{
                marginVertical: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity style={{}}>
                <Text style={styles.titleTransactions}>Ver tudo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Portal>
        <Modalize
          ref={modalRef}
          adjustToContentHeight={true}
          scrollViewProps={{showsVerticalScrollIndicator: false}}
          overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          onClose={() => {
            console.log('Modalize :: close');
            setIsVisible(false);
          }}>
          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            initialValues={{
              amount: '',
              type: 'Deposit',
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View style={styles.containerModal}>
                <Text style={styles.titleModal}>Movimentar</Text>
                <View style={styles.cardMovements}>
                  <Text style={styles.textMovements}>Saldo Disponível:</Text>
                  <Text style={styles.valueMovements}>
                    {account?.balance?.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </Text>
                </View>
                <InputSavings
                  label={'Escolha a opção'}
                  style={{marginTop: 15}}
                  value={values.type}
                  formRef={formRef}
                />

                <InputMask
                  label={'Digite o valor'}
                  placeholder={'Digite o valor para guardar'}
                  value={values.key}
                  error={errors.key ?? undefined}
                  mask={Masks.BRL_CURRENCY}
                  onChangeText={handleChange('key')}
                  onBlur={handleBlur('key')}
                  keyboardType="numeric"
                />
                <Button
                  title="Concluir"
                  onPress={handleSubmit}
                  style={{marginTop: 15}}
                />
              </View>
            )}
          </Formik>
        </Modalize>
      </Portal>
    </React.Fragment>
  );
};

export default SavingsScreen;
