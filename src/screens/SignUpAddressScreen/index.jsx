import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, ScrollView, StatusBar, ActivityIndicator, Keyboard } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Masks } from "react-native-mask-input";
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

import styles from './styles';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Formik/Input';
import InputMask from '../../components/Formik/InputMask';
import { setValidationErrors } from '../../utils/yupUtils';

const schema = Yup.object().shape({
  zip_code: Yup.string()
    .required('O CEP é obrigatório'),
  state: Yup.string()
    .required('O estado é obrigatório'),
  city: Yup.string()
    .required('A cidade é obrigatória'),
  neighborhood: Yup.string()
    .required('O bairro é obrigatório'),
  street: Yup.string()  
    .required('A rua é obrigatória'),
  number: Yup.string()
    .required('O número é obrigatório'),
});

const SignUpScreenAddress = ({ navigation }) => {
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);

  const route = useRoute();

  const formRef = useRef(null);
  const scrollRef = useRef(null);

  function onSubmit(values) {
    try {
      schema.validateSync(values, { abortEarly: false });

      Keyboard.dismiss();

      navigation.navigate('SignUpPhotoScreen', {
        user: route.params?.user,
        address: values,
      });
    } catch (errors) {
      if(errors instanceof Yup.ValidationError) {
        setValidationErrors(formRef, errors);
      }
  
      scrollRef.current?.scrollTo({ y: 0, animated: true }); 
    }
  }

  async function autoFillAddressByZipCode(text) {
    setIsLoadingAddress(true);

    try {   
      const response = await axios.get(`https://viacep.com.br/ws/${text}/json`);

      formRef?.current?.setFieldValue('state', response.data.uf);
      formRef?.current?.setFieldValue('city', response.data.localidade);
      formRef?.current?.setFieldValue('neighborhood', response.data.bairro);
      formRef?.current?.setFieldValue('street', response.data.logradouro);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingAddress(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        ref={scrollRef}
      > 
        <Header />
        <StatusBar 
          barStyle="dark-content"
          backgroundColor={theme.colors.BACKGROUND}
        />
        
        <View style={styles.main}>
          <View>
            <Text style={styles.titleXl}>
              Adicione seu endereço.
            </Text>
            <Text style={[styles.text, { marginBottom: 45 }]}>
              Para que possamos encontrar os melhores profissionais para você.
            </Text>
          </View>
          
          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              zip_code: "",
              state: "",
              city: "",
              neighborhood: "",
              street: "",
              number: "",
              complement: "",
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                <View style={{ position: "relative" }}>
                  <InputMask
                    label={"CEP"}
                    placeholder={"Digite seu CEP"}
                    mask={Masks.ZIP_CODE}
                    containerStyle={{ marginTop: 0 }}
                    value={values.zip_code}
                    error={errors.zip_code ?? undefined}
                    onBlur={handleBlur("zip_code")}
                    keyboardType="numeric"
                    onChangeText={text => {
                      formRef?.current?.setFieldValue('zip_code', text);

                      if(text.length === 9 && !isLoadingAddress) {
                        autoFillAddressByZipCode(text.replace('-', ''));
                      }
                    }}
                  />  

                  {isLoadingAddress && (
                    <View style={{ position: 'absolute', right: 20, top: 52.5 }}>
                      <ActivityIndicator 
                        size="small" 
                        color={theme.colors.TEXT} 
                      />
                    </View>
                  )}
                </View>

                <Text style={[styles.text, { marginBottom: 15, fontSize: 14 }]}>
                  <Text style={{ color: theme.colors.PRIMARY }}>Observação:</Text>{' '}
                  Informe o CEP para preencher os campos abaixo.
                </Text>

                <Input
                  label={"Estado"}
                  placeholder={"Digite seu estado"}
                  value={values.state}
                  error={errors.state ?? undefined}
                  onChangeText={handleChange("state")}
                  onBlur={handleBlur("state")}
                />

                <Input
                  label={"Cidade"}
                  placeholder={"Digite sua cidade"}
                  value={values.city}
                  error={errors.city ?? undefined}
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                />

                <Input
                  label={"Bairro"}
                  placeholder={"Digite seu bairro"}
                  value={values.neighborhood}
                  error={errors.neighborhood ?? undefined}
                  onChangeText={handleChange("neighborhood")}
                  onBlur={handleBlur("neighborhood")}
                />

                <Input
                  label={"Rua"}
                  placeholder={"Digite sua rua"}
                  value={values.street}
                  error={errors.street ?? undefined}
                  onChangeText={handleChange("street")}
                  onBlur={handleBlur("street")}
                />

                <Input
                  label={"Número"}
                  placeholder={"Digite o número"}
                  value={values.number}
                  error={errors.number ?? undefined}
                  onChangeText={handleChange("number")}
                  onBlur={handleBlur("number")}
                  keyboardType="numeric"
                />

                <Input
                  label={"Complemento (Opcional)"}
                  placeholder={"Digite o complemento"}
                  value={values.complement}
                  error={errors.complement ?? undefined}
                  onChangeText={handleChange("complement")}
                  onBlur={handleBlur("complement")}
                />

                <Button 
                  title="Próximo passo"
                  style={{ marginTop: 30 }}
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpScreenAddress;