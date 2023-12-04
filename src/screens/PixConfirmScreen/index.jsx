import React, { useState, useRef } from "react";
import { SafeAreaView, StatusBar, ScrollView, View, Text } from "react-native";
import { Masks } from 'react-native-mask-input';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";
import Button from "../../components/Button";
import InputMask from "../../components/Formik/InputMask";
import Toast from "../../utils/toastUtils";
import { setValidationErrors } from '../../utils/yupUtils';
import { useAccount } from "../../hooks/useAccount";

const schema = Yup.object().shape({
  amount: Yup.string().required('O valor é obrigatório'),
});

const PixConfirmScreen = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const { account, pixKey } = route.params;
  const { pixTransfer } = useAccount();

  async function onSubmit(values) {
    setIsLoading(true);

    try {
      schema.validateSync(values, { abortEarly: false });

      const amount = Number(values.amount.replace('R$', '').replace('.', '').replace(',', '.').trim());

      await pixTransfer(pixKey, amount);
      navigation.navigate('HomeScreen');

      // if(amount > account.balance) {
      //   Toast.show('Não há saldo suficiente para realizar a transferência');
      // } else {
      //   await pixTransfer(pixKey, amount);
      //   navigation.navigate('HomeScreen');
      // }
    } catch (errors) {
      if (errors instanceof Yup.ValidationError) {
        setValidationErrors(formRef, errors);
      }
    } finally {
      setIsLoading(false);
    }
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
          <Header title='Enviar pix' />

          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            initialValues={{
              amount: '',
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View style={styles.main}>
                <View>
                  <InputMask
                    mask={Masks.BRL_CURRENCY}
                    label={'Valor'}
                    placeholder={'Digite o valor do pix'}
                    value={values.amount}
                    error={errors.amount ?? undefined}
                    onChangeText={handleChange('amount')}
                    onBlur={handleBlur('amount')}
                    keyboardType='numeric'
                  />

                  <View style={{ marginTop: 25 }}>
                    <Text style={[styles.titleSm, { textAlign: "center" }]}>Conta</Text>
                    <Text style={[styles.text, { textAlign: "center" }]}>{account?.user?.name}</Text>
                  </View>
                </View>
    
                <View>
                  <Button 
                    title='Confirmar' 
                    onPress={handleSubmit} 
                    isLoading={isLoading}
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

export default PixConfirmScreen;