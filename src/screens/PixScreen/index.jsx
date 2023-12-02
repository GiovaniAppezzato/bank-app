import React, { useState, useRef } from "react";
import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, ScrollView } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { Masks } from 'react-native-mask-input';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";
import Input from "../../components/Formik/Input";
import Button from "../../components/Button";

const schema = Yup.object().shape({
  key: Yup.string().required('A chave é obrigatória'),
  // amount: Yup.string().required('O valor é obrigatório'),
});

const PixScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false); 

  const modalRef = useRef(null);
  const formRef = useRef(null);

  function handleToggleModal() {
    if(isVisible) {
      modalRef.current?.close();
    } else {
      modalRef.current?.open();
    }

    setIsVisible(!isVisible);
  }

  function onSubmit(values) {
    try {
      schema.validateSync(values, { abortEarly: false });

      console.log(values);
    } catch (errors) {

    }
  }

  return (
    <React.Fragment>
      <StatusBar barStyle='dark-content' backgroundColor={theme.colors.BACKGROUND} />
      <SafeAreaView style={styles.container}>
        <Header title='Pix' />

        <View style={styles.main}>
          <View style={{ marginBottom: 45 }}>
            <TouchableOpacity style={styles.button} onPress={() => handleToggleModal()}>
              <View style={styles.rowButton}>
                <FontAwesome6 name="money-bill-transfer" size={22} color={theme.colors.TEXT} />
                <Text style={styles.textButton}>Pagar</Text>
              </View>
              <FontAwesome6 name="chevron-right" size={16} color={theme.colors.TEXT} />
            </TouchableOpacity>
          </View>

          <Text style={styles.titleMoreActions}>
            Mais ações
          </Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.buttonMoreActions} onPress={() => navigation.navigate('PixKeysScreen')}>
              <View style={styles.wrapperIcon}>
                <FontAwesome6 name="key" size={24} color={theme.colors.TEXT} />
              </View>
              <Text style={styles.textButtonMoreActions}>Minhas chaves</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.buttonMoreActions}>
              <View style={styles.wrapperIcon}>
                <FontAwesome6 name="money-bill-wave-alt" size={24} color={theme.colors.TEXT} />
              </View>
              <Text style={styles.textButtonMoreActions}>Ajustar limite</Text>
            </TouchableOpacity> */}
          </ScrollView>
        </View>
      </SafeAreaView>

      <Portal>
        <Modalize
          ref={modalRef}
          adjustToContentHeight={true}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClose={() => {
            console.log('Modalize :: close');
            setIsVisible(false);
          }}
        >
          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            initialValues={{
              amount: '',
              description: '',
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View style={styles.containerModal}>
                <Text style={styles.titleModal}>Pagar com Pix</Text>

                <Input
                  label={'Digite a chave'}
                  placeholder={'CPF, e-mail ou telefone'}
                  value={values.key}
                  error={errors.key ?? undefined}
                  onChangeText={handleChange('key')}
                  onBlur={handleBlur('key')}
                />

                {/* <InputMask
                  mask={Masks.BRL}
                  label={'Valor'}
                  placeholder={'R$ 0,00'}
                  value={values.amount}
                  error={errors.amount ?? undefined}
                  onChangeText={handleChange('amount')}
                  onBlur={handleBlur('amount')}
                  keyboardType='numeric'
                /> */}

                <Button
                  title='Continuar'
                  onPress={handleSubmit}
                  style={{ marginTop: 15 }}
                />
              </View>
            )}
          </Formik>
        </Modalize>
      </Portal>
    </React.Fragment>
  )
}

export default PixScreen;