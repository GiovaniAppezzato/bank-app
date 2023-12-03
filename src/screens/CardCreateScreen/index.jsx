import React, { useState, useRef } from "react";
import { SafeAreaView, StatusBar, View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { RectButton } from "react-native-gesture-handler";

import * as Yup from 'yup';
import { Modalize } from 'react-native-modalize';
import { Formik } from 'formik';

import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";
import InputPicker from "../../components/Formik/InputPicker";
import InputPassword from "../../components/Formik/InputPassword";
import Button from "../../components/Button";
import { useAccount } from "../../hooks/useAccount";
import { setValidationErrors } from '../../utils/yupUtils';

const schema = Yup.object().shape({
  password: Yup.string().required('A senha é obrigatória'),
  credit_limit: Yup.number().required('O limite é obrigatório'),
});

const CardCreateScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [optionsLimit, setOptionsLimit] = useState([
    { label: 'R$ 500,00', value: 500.00 },
    { label: 'R$ 1.000,00', value: 1000.00 },
    { label: 'R$ 1.500,00', value: 1500.00 },
    { label: 'R$ 2.000,00', value: 2000.00 },
    { label: 'R$ 2.500,00', value: 2500.00 },
    { label: 'R$ 3.000,00', value: 3000.00 },
    { label: 'R$ 3.500,00', value: 3500.00 },
    { label: 'R$ 4.000,00', value: 4000.00 },
    { label: 'R$ 4.500,00', value: 4500.00 },
    { label: 'R$ 5.000,00', value: 5000.00 },
  ]);

  const { createCard } = useAccount();

  const formRef = useRef(null);

  async function onSubmit(values) {
    setIsLoading(true);

    try {
      schema.validateSync(values, { abortEarly: false });

      await createCard(values);

      navigation.navigate('CardsScreen');
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
          <Header title={"Pedir cartão"} />

          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              password: '',
              credit_limit: 500.00,
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors, setFieldValue}) => (
              <>
                <View style={styles.main}>
                  <View>
                  <InputPicker 
                    label="Limite"
                    value={values.credit_limit}
                    error={errors.credit_limit ?? undefined}
                    containerStyle={{ marginTop: 0 }}
                    options={optionsLimit}
                    onValueChange={value => {
                      setFieldValue("credit_limit", value);
                    }}
                  />

                    <InputPassword
                      label={'Senha'}
                      placeholder={'Digite a senha'}
                      value={values.password}
                      error={errors.password ?? undefined}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                    />
                  </View>

                  <View>
                    <Button 
                      title="Pedir" 
                      onPress={handleSubmit} 
                      isLoading={isLoading}
                    />
                  </View>
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  )
};

export default CardCreateScreen;