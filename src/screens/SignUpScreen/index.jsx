import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StatusBar,
  Keyboard,
} from 'react-native';
import {Masks} from 'react-native-mask-input';
import {Formik} from 'formik';
import * as Yup from 'yup';

import styles from './styles';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Formik/Input';
import InputMask from '../../components/Formik/InputMask';
import InputPassword from '../../components/Formik/InputPassword';
import InputSex from '../../components/Formik/InputSex';
import {setValidationErrors} from '../../utils/yupUtils';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),
  cpf: Yup.string()
    .required('O CPF é obrigatório'),
  birth: Yup.string()
    .required('A data de nascimento é obrigatória'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('A confirmação da senha é obrigatória'),
});

const SignUpScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);
  const scrollRef = useRef(null);

  function onSubmit(values) {
    setIsLoading(true);

    try {
      schema.validateSync(values, { abortEarly: false });

      Keyboard.dismiss();

      const data = {
        ...values,
        birth: values.birth.split('/').reverse().join('-'),
      }

      navigation.navigate('SignUpAddressScreen', {
        user: data,
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
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
        <Header />
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.BACKGROUND}
        />

        <View style={styles.main}>
          <View>
            <Text style={styles.titleXl}>Cadastre-se para começar.</Text>
            <Text style={[styles.text, {marginBottom: 45}]}>
              Junte-se a nós e desfrute de um lar sempre em ordem.
            </Text>
          </View>

          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              name: "",
              email: "",
              cpf: "",
              password: "",
              confirm_password: "",
              sex: "M",
              birth: "",
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
              <>
                <Input
                  label={'Nome completo'}
                  placeholder={'Digite seu nome'}
                  containerStyle={{marginTop: 0}}
                  error={errors.name ?? undefined}
                  value={values.name}
                  onBlur={handleBlur('name')}
                  onChangeText={handleChange('name')}
                />

                <Input
                  label={'E-mail'}
                  placeholder={'Digite seu e-mail'}
                  value={values.email}
                  error={errors.email ?? undefined}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />

                <InputMask
                  mask={Masks.BRL_CPF}
                  label={'CPF'}
                  placeholder={'Digite seu CPF'}
                  value={values.cpf}
                  error={errors.cpf ?? undefined}
                  onChangeText={handleChange('cpf')}
                  onBlur={handleBlur('cpf')}
                  keyboardType="numeric"
                />

                <InputMask
                  mask={Masks.DATE_DDMMYYYY}
                  label={'Data de nascimento'}
                  placeholder={'Digite sua data de nascimento'}
                  value={values.birth}
                  error={errors.birth ?? undefined}
                  onChangeText={handleChange('birth')}
                  onBlur={handleBlur('birth')}
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

                <InputPassword
                  label={'Confirmar senha'}
                  placeholder={'Confirme sua senha'}
                  value={values.confirm_password}
                  error={errors.confirm_password ?? undefined}
                  onChangeText={handleChange('confirm_password')}
                  onBlur={handleBlur('confirm_password')}
                />

                <InputSex
                  label={'Sexo'}
                  style={{marginTop: 15}}
                  value={values.sex}
                  formRef={formRef}
                />

                <Button
                  isLoading={isLoading}
                  title={'Próximo passo'}
                  style={{marginTop: 45}}
                  onPress={() => {
                    if (!isLoading) {
                      handleSubmit();
                    }
                  }}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
