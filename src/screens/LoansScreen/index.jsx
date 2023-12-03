import React, {useState, useRef} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import styles from './styles';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
import InputMask from '../../components/Formik/InputMask';
import {Masks} from 'react-native-mask-input';
import {Formik} from 'formik';

const LoansScreen = ({navigation}) => {
  const modalRef = useRef(null);
  const formRef = useRef(null);
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
        <Header title={'Empréstimo'} />

        <Formik
          innerRef={formRef}
          onSubmit={onSubmit}
          initialValues={{
            amount: '',
            type: 'Deposit',
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={styles.cardContainer}>
              <View style={styles.cardLoan}>
                <Text style={styles.textLoan}> Valor Disponível</Text>
                <Text style={styles.textValue}>R$ 1.000,00</Text>
                <InputMask
                  placeholder={'Digite um valor'}
                  value={values.key}
                  error={errors.key ?? undefined}
                  mask={Masks.BRL_CURRENCY}
                  onChangeText={handleChange('key')}
                  onBlur={handleBlur('key')}
                  keyboardType="numeric"
                  fontSize={14}
                  style={{
                    backgroundColor: theme.colors.BACKGROUND,
                  }}
                />
                <Button
                  color={'#2382F7'}
                  title={'Solicitar'}
                  titleStyle={{
                    color: 'white',
                    fontSize: 15,
                    fontFamily: theme.fonts.REGULAR,
                  }}
                  style={{
                    marginTop: 10,
                    borderRadius: 20,
                    width: '80%',
                  }}
                  onPress={() => {}}
                />
              </View>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default LoansScreen;
