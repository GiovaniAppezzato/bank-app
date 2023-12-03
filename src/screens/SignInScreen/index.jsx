import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Image, ScrollView, Keyboard} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

import styles from './styles';
import Rectangle153 from '../../../assets/icons/Rectangle 153.svg';
import Button from '../../components/Button';
import Input from '../../components/Formik/Input';
import InputPassword from '../../components/Formik/InputPassword';
import Toast from '../../utils/toastUtils';
import {setValidationErrors} from '../../utils/yupUtils';
import {useAuth} from '../../hooks/useAuth';

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .required('O e-mail é obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

const SignInScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);
  const scrollRef = useRef(null);

  const {signIn} = useAuth();

  const handleSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  async function onSubmit(values) {
    setIsLoading(true);

    try {
      signUpSchema.validateSync(values, {abortEarly: false});

      Keyboard.dismiss();

      await signIn(values);
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
      showsVerticalScrollIndicator={false}
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
            email: 'usuario01@gmail.com',
            password: '123456',
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <Input
                label={'E-mail'}
                placeholder={'Digite o seu e-mail'}
                value={values.email}
                error={errors.email ?? undefined}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
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

              <Text
                style={styles.textPassword}
                onPress={() => {
                  handleSignUpScreen();
                }}>
                Abrir Conta
              </Text>

              {/* <Button
                isLoading={isLoading}
                title={'Abrir Conta'}
                style={{marginTop: 20}}
                onPress={() => {
                  if (!isLoading) {
                    handleSignUpScreen();
                  }
                }}
              /> */}
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
