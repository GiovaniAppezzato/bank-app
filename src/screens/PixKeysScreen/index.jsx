import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, StatusBar, View, Text, ScrollView  } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Feather from "react-native-vector-icons/Feather";
import Clipboard from '@react-native-clipboard/clipboard';
import * as Yup from 'yup';
import { RectButton } from "react-native-gesture-handler";
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { Formik } from 'formik';
import { Masks } from 'react-native-mask-input';

import api from "../../services/api";
import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Toast from "../../utils/toastUtils";
import InputMask from "../../components/Formik/InputMask";
import InputPicker from "../../components/Formik/InputPicker";
import { setValidationErrors } from '../../utils/yupUtils';
import { useAuth } from "../../hooks/useAuth";

const storeSchema = Yup.object().shape({
  status: Yup.string()
    .required('O tipo de chave é obrigatório'),
  name: Yup.string()
    .required('A chave é obrigatória'),
});

const PixKeysScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const [isLoadingDestroy, setIsLoadingDestroy] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 
  const [isVisibleDestroy, setIsVisibleDestroy] = useState(false);
  const [currentDestroyKey, setCurrentDestroyKey] = useState(null);
  const [pixKeys, setPixKeys] = useState([]);
  const [optionsPixKeys, setOptionsPixKeys] = useState([]);

  const { user } = useAuth();

  const formRef = useRef(null);
  const modalCreateRef = useRef(null);
  const modalDestroyRef = useRef(null);

  useEffect(() => {
    async function loadPixKeys() {
      const response = await api.get('/pix-keys');
      setPixKeys(response.data.pixKeys);
      setIsLoading(false);
    }

    loadPixKeys(); 
  }, [])

  function renderTypeKey(key) {
    switch (key.status) {
      case 'cpf':
        return <FontAwesome6 name="id-card" size={24} color={theme.colors.TEXT} />
      case 'email':
        return <FontAwesome6 name="envelope" size={24} color={theme.colors.TEXT} />
      case 'phone':
        return <FontAwesome6 name="phone" size={24} color={theme.colors.TEXT} />
      default:
        return <FontAwesome6 name="key" size={24} color={theme.colors.TEXT} />
    }
  }

  function handleCopyKey(key) {
    Clipboard.setString(key.value);
    Toast.show('Chave copiada para a área de transferência');
  }

  function handleToggleModal() {
    if(isVisible) {
      modalCreateRef.current?.close();
    } else {
      const options = [
        { label: '', value: '' },
      ];

      if (!pixKeys.find(key => key.status === 'cpf')) {
        options.push({ label: 'CPF', value: 'cpf' });
      }

      if (!pixKeys.find(key => key.status === 'email')) {
        options.push({ label: 'E-mail', value: 'email' });
      }

      if (!pixKeys.find(key => key.status === 'phone')) {
        options.push({ label: 'Telefone', value: 'phone' });
      }

      setOptionsPixKeys(options);

      modalCreateRef.current?.open();
    }

    setIsVisible(!isVisible);
  }

  function getMaskType(type) {
    switch (type) {
      case 'cpf':
        return Masks.BRL_CPF;
      case 'email':
        return null;
      case 'phone':
        return Masks.BRL_PHONE;
      default:
        return '';
    }
  }

  async function onSubmit(values) {
    setIsLoadingCreate(true);

    try {
      await storeSchema.validateSync(values, { abortEarly: false });

      const response = await api.post('/pix-keys', values);  
      setPixKeys([...pixKeys, response.data.pixKey]);

      handleToggleModal();
    } catch (errors) {
      if (errors instanceof Yup.ValidationError) {
        setValidationErrors(formRef, errors);
      }
    } finally {
      setIsLoadingCreate(false);
    }
  }

  function handleToggleModalDestroy(id) {
    if(isVisibleDestroy) {
      setCurrentDestroyKey(null);
      modalDestroyRef.current?.close();
    } else {
      setCurrentDestroyKey(id);
      modalDestroyRef.current?.open();
    }

    setIsVisibleDestroy(!isVisibleDestroy);
  }

  async function handleDestroyPixKey() {
    setIsLoadingDestroy(true);

    try {
      await api.delete(`/pix-keys/${currentDestroyKey}`);

      setPixKeys(pixKeys.filter(key => key.id !== currentDestroyKey));
      handleToggleModalDestroy();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDestroy(false);
    }
  }

  if (isLoading) {
    return (
      <Loading />
    );
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
          <Header title='Minhas chaves' />

          <View style={styles.main}>
            <View>
              {pixKeys.map(key => (
                <RectButton style={styles.containerKey} key={key.id}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                      {renderTypeKey(key)}
                    </View>
                    <View style={{ marginLeft: 20 }}>
                      <Text style={styles.titleKey}>Chave {key.status}</Text>
                      <Text style={styles.textKey}>
                        {key.name}
                      </Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    {/* <RectButton style={[styles.buttonCopy, { marginRight: 10 }]} onPress={() => handleToggleModalDestroy(key.id)}>
                      <Feather name="trash" size={18} color={theme.colors.DANGER} />
                    </RectButton>  */}

                    <RectButton style={styles.buttonCopy} onPress={() => handleCopyKey(key)}>
                      <Feather name="copy" size={18} color={theme.colors.TEXT} />
                    </RectButton> 
                  </View>
                </RectButton>
              ))}
            </View>

            <View>
              {pixKeys.length < 3 && (
                <Button
                  title='Adicionar chave'
                  onPress={() => {
                    handleToggleModal();
                  }}
                /> 
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <Portal>
        <Modalize
          ref={modalCreateRef}
          adjustToContentHeight={true}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClose={() => {
            setIsVisible(false);
          }}
        >
          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            initialValues={{
              status: '',
              name: '',
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
              <View style={styles.containerModal}>
                <Text style={styles.titleModal}>Nova chave</Text>

                <InputPicker 
                  label="Tipo de chave"
                  value={values.status}
                  error={errors.status ?? undefined}
                  containerStyle={{ marginTop: 0 }}
                  options={optionsPixKeys}
                  onValueChange={value => {
                    setFieldValue("status", value);
                    
                    if (value === 'cpf') {
                      setFieldValue("name", user.cpf);
                    } else if (value === 'email') {
                      setFieldValue("name", user.email);
                    } else {
                      setFieldValue("name", '');
                    }
                  }}
                />

                {values.status && (
                  <InputMask
                    mask={getMaskType(values.status)}
                    label={'Chave'}
                    placeholder={'Digite a chave'}
                    value={values.name}
                    error={errors.name ?? undefined}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />
                )}

                <Button
                  isLoading={isLoadingCreate}
                  title='Adicionar chave'
                  onPress={handleSubmit}
                  style={{ marginTop: 15 }}
                />
              </View>
            )}
          </Formik>
        </Modalize>
      </Portal>

      <Portal>
        <Modalize
          ref={modalDestroyRef}
          adjustToContentHeight={true}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClose={() => {
            setIsVisibleDestroy(false);
          }}
        >
          <View style={styles.containerModal}>
            <Text style={styles.titleModal}>Deseja realmente excluir a chave?</Text>

            <Button
              isLoading={isLoadingDestroy}
              title='Excluir'
              color={theme.colors.DANGER}
              onPress={() => handleDestroyPixKey()}
              style={{ backgroundColor: theme.colors.DANGER }}
            />
          </View>
        </Modalize>
      </Portal>
    </React.Fragment>
  )
}

export default PixKeysScreen;