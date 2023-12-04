import React, {useState, useRef} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {Masks} from 'react-native-mask-input';
import {Formik} from 'formik';
import * as Yup from 'yup';

import styles from './styles';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
import InputMask from '../../components/Formik/InputMask';
import Toast from '../../utils/toastUtils';
import {useAccount} from '../../hooks/useAccount';
import {setValidationErrors} from '../../utils/yupUtils';

const schema = Yup.object().shape({
  amount: Yup.string().required('O valor é obrigatório'),
});

const LoansScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const { applyLoan } = useAccount();

  async function onSubmit(values) {
    setIsLoading(true);

    try {
      schema.validateSync(values, {abortEarly: false});

      const amount = Number(values.amount.replace('R$', '').replace('.', '').replace(',', '.').trim());

      if(amount > 10000) {
        Toast.show('O valor máximo para empréstimo é de R$ 10.000,00');
      } else {
        await applyLoan(amount);
        navigation.navigate('HomeScreen');
        Toast.show('Empréstimo realizado com sucesso.');
      }
    } catch (errors) {
      if (errors instanceof Yup.ValidationError) {
        setValidationErrors(formRef, errors);
      } else {
        Toast.show('Ocorreu um erro ao realizar o empréstimo.');
      }
    } finally {
      setIsLoading(false);
    }
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
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={styles.cardContainer}>
              <View style={styles.cardLoan}>
                <Text style={styles.textLoan}> Valor disponível</Text>
                <Text style={styles.textValue}>R$ 10.000,00</Text>

                <InputMask
                  placeholder={'Valor do empréstimo'}
                  value={values.amount}
                  error={errors.amount ?? undefined}
                  mask={Masks.BRL_CURRENCY}
                  onChangeText={handleChange('amount')}
                  onBlur={handleBlur('amount')}
                  keyboardType="numeric"
                  fontSize={14}
                  style={{
                    backgroundColor: theme.colors.BACKGROUND,
                  }}
                />

                <Button
                  isLoading={isLoading}
                  title={'Solicitar'}
                  titleStyle={{
                    color: 'white',
                    fontSize: 15,
                    fontFamily: theme.fonts.REGULAR,
                  }}
                  style={{
                    marginTop: 10,
                  }}
                  onPress={() => {
                    handleSubmit();
                  }}
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
