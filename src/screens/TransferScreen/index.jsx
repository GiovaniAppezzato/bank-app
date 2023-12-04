import React, { useRef, useState } from "react";
import { SafeAreaView, StatusBar, View, ScrollView  } from "react-native";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Masks } from "react-native-mask-input";

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
  number: Yup.string().required('A conta é obrigatória'),
});

const TransferScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);
  const { account, transfer } = useAccount();

  async function onSubmit(values) {
    setIsLoading(true);

    try {
      schema.validateSync(values, { abortEarly: false });

      const amount = Number(values.amount.replace('R$', '').replace('.', '').replace(',', '.').trim());

      if(amount > account.balance) {
        Toast.show('Não há saldo suficiente para realizar a transferência');
      } else {
        await transfer(values.number, amount);
        navigation.navigate('HomeScreen');
      }
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
          <Header title='Para quem?' />

          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              number: '',
              amount: '',
            }}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View style={styles.main}>
                <View>
                  <InputMask
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]}
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
                    isLoading={isLoading}
                    title='Transferir'
                    onPress={() => {
                      handleSubmit();
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