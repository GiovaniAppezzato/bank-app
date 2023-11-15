import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import styles from './styles';
import Rectangle153 from '../../../assets/icons/Rectangle 153.svg';
import {Masks} from 'react-native-mask-input';
import theme from '../../global/styles/theme';
import * as Yup from 'yup';
import {setValidationErrors} from '../../utils/yupUtils';
import Button from '../../components/Button';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';
import InputMask from '../../components/Formik/InputMask';

const signUpSchema = Yup.object().shape({
  cpf: Yup.string()
    .email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);
  const scrollRef = useRef(null);
  const handleSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };
  function onSubmit(values) {
    setIsLoading(true);

    try {
      signUpSchema.validateSync(values, { abortEarly: false });

      Keyboard.dismiss();
      navigation.navigate('HomeScreen', {
        user: values,
      });
    } catch (errors) {
      if (errors instanceof Yup.ValidationError) {
        setValidationErrors(formRef, errors);
      }

      scrollRef.current?.scrollTo({y: 0, animated: true});
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <View style={styles.containerHeader}>
        <Rectangle153 />
        <Image
          style={styles.logo}
          source={require('../../../assets/icons/Logo.png')}
        />
      </View>

      <View style={styles.containerView}>
        <Formik
          innerRef={formRef}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            cpf: '',
            password: '',
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <InputMask
                mask={Masks.BRL_CPF}
                label={'CPF'}
                placeholder={'Digite o seu CPF'}
                value={values.cpf}
                error={errors.cpf ?? undefined}
                onChangeText={handleChange('cpf')}
                onBlur={handleBlur('cpf')}
                keyboardType="numeric"
              />

              <InputPassword
                label={'Senha'}
                placeholder={'Digite sua senha'}
                value={values.password}
                error={errors.password ?? undefined}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />

              <Button
                isLoading={isLoading}
                title={'Entrar'}
                style={{marginTop: 10}}
                onPress={() => {
                  if (!isLoading) {
                    handleSubmit();
                  }
                }}
              />
              <Button
                isLoading={isLoading}
                title={'Abrir Conta'}
                style={{marginTop: 20}}
                onPress={() => {
                  if (!isLoading) {
                    handleSignUpScreen();
                  }
                }}
              />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
