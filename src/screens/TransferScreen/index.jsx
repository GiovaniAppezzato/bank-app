import React, { useRef } from "react";
import { SafeAreaView, StatusBar, View, Text, ScrollView  } from "react-native";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Masks } from "react-native-mask-input";

import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Formik/Input";
import InputMask from "../../components/Formik/InputMask";

const TransferScreen = ({ navigation }) => {
  const formRef = useRef(null);

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <React.Fragment>
      <StatusBar barStyle='dark-content' backgroundColor={theme.colors.BACKGROUND} />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ 
            flexGrow: 1 
          }}
        >
          <Header title='Para quem?' />

          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              amount: '',
              number: '',
            }}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View style={styles.main}>
                <View>
                  <Input
                    label={'Conta'}
                    placeholder={'Digite o número da conta'}
                    value={values.number}
                    error={errors.number ?? undefined}
                    onChangeText={handleChange('number')}
                    onBlur={handleBlur('number')}
                    keyboardType='numeric'
                  />

                  <InputMask
                    mask={Masks.BRL_CURRENCY}
                    label={'Valor'}
                    placeholder={'Digite o valor a ser transferido'}
                    value={values.amount}
                    error={errors.amount ?? undefined}
                    onChangeText={handleChange('amount')}
                    onBlur={handleBlur('amount')}
                    keyboardType='numeric'
                  />
                </View>
    
                <View>
                  <Button
                    title='Transferir'
                    onPress={() => {
                      
                    }}
                  />
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  )
};

export default TransferScreen;