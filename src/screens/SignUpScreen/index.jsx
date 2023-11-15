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
import {setValidationErrors} from '../../utils/yupUtils';

const signUpSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),
  birth: Yup.string().required('A data de nascimento é obrigatória'),
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
      // signUpSchema.validateSync(values, { abortEarly: false });

      Keyboard.dismiss();

      navigation.navigate('SignUpAddressScreen', {
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
              name: '',
              email: '',
              password: '',
              confirm_password: '',
              sex: '',
              birth: '',
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
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

                <View style={{marginTop: 15}}>
                  <Text
                    style={{
                      fontFamily: theme.fonts.MEDIUM,
                      fontSize: 15,
                      color: theme.colors.TEXT,
                      marginLeft: 5,
                      marginBottom: 5,
                    }}>
                    Sexo
                  </Text>

                  <View
                    style={{
                      backgroundColor: theme.colors.SHAPE,
                      padding: 5,
                      borderRadius: 15,
                      width: '100%',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: '50%',
                        backgroundColor: theme.colors.BACKGROUND,
                        borderRadius: 15,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: theme.fonts.REGULAR,
                          color: theme.colors.TEXT,
                          padding: 16,
                        }}>
                        Masculino
                      </Text>
                    </View>

                    <View
                      style={{
                        width: '50%',
                        backgroundColor: theme.colors.SHAPE,
                        borderRadius: 15,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: theme.fonts.REGULAR,
                          color: theme.colors.TEXT,
                          padding: 16,
                        }}>
                        Feminino
                      </Text>
                    </View>
                  </View>
                </View>

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
