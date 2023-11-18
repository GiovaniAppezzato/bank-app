import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Formik } from "formik";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Yup from 'yup';

import styles from './styles';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ImagePickerModal from '../../components/ImagePickerModal';
import { requestCameraPermission } from '../../utils/permissionsUtils';
import { useAuth } from '../../hooks/useAuth';

const schema = Yup.object().shape({
  photo: Yup.object().shape({
    uri: Yup.string()
      .required('A foto é obrigatória'),
  }),
});

const SignUpScreenPhoto = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisiblePhotoModal, setIsVisiblePhotoModal] = useState(false);

  const formRef = useRef(null);
  const scrollRef = useRef(null);

  const route = useRoute();
  const { signUp } = useAuth();

  async function onSubmit(values) {
    setIsLoading(true);

    try {
      // schema.validateSync(values, { abortEarly: false });

      await signUp({
        user: route.params?.user,
        address: route.params?.address,
        ...values,
      });
    } catch (errors) {
      if(errors instanceof Yup.ValidationError) {
        setValidationErrors(formRef, errors);
      }
  
      scrollRef.current?.scrollTo({ y: 0, animated: true }); 
    } finally {
      setIsLoading(false);
    }
  }

  function handlePickImage() {
    requestCameraPermission().then(response => {
      if(response) {
        setIsVisiblePhotoModal(true);
      }
    });
  }
  
  function onImageSelected(response) {
    if(response.assets) {
      const assets = response.assets[0];

      formRef.current?.setFieldValue("photo", {
        uri: assets.uri,
        type: assets.type,
        name: assets.fileName
      });
    }
  }

  function onRemoveImage() {
    formRef.current?.setFieldValue("photo", {
      uri: "",
      type: "",
      name: ""
    });
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
              Foto de perfil.
            </Text>
            <Text style={[styles.text, { marginBottom: 45 }]}>
              Por último, precisamos que você adicione uma foto de perfil para a sua identicação.
            </Text>
          </View>
          
          <Formik
            innerRef={formRef}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              photo: {
                uri: "",
                type: "",
                name: "",
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                {values.photo.uri === "" ? (
                  <View style={[ styles.wrapperPhoto, { marginBottom: 35 } ]}>
                    <View style={[
                      styles.photo,
                      { position: "relative" }
                    ]}>
                      <Feather 
                        name="user" 
                        size={38}
                        color={'#969CB2'} 
                      />

                      <TouchableOpacity
                        activeOpacity={.8}
                        style={styles.buttonPickPhoto}
                        onPress={() => {
                          handlePickImage();
                        }}
                      >
                        <FontAwesome
                          name="camera"
                          size={16}
                          color={theme.colors.SHAPE}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View style={[ styles.wrapperPhoto, { marginBottom: 35 } ]}>
                    <View style={{ position: "relative" }}>
                      <Image
                        source={{ uri: values.photo.uri }}
                        style={styles.photo}
                      />

                      <TouchableOpacity
                        activeOpacity={.8}
                        style={styles.buttonPickPhoto}
                        onPress={() => {
                          handlePickImage();
                        }}
                      >
                        <FontAwesome
                          name="camera"
                          size={16}
                          color={theme.colors.SHAPE}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                
                {errors.photo?.uri && (
                  <Text style={styles.textSm}>• {errors.photo.uri}</Text>
                )}

                <ImagePickerModal
                  isVisible={isVisiblePhotoModal}
                  hasRemoveOption={values.photo.uri !== ""}
                  onClose={() => setIsVisiblePhotoModal(false)}
                  onImageSelected={onImageSelected}
                  onRemoveImage={onRemoveImage}
                />

                <Button 
                  title="Realizar cadastro"
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

export default SignUpScreenPhoto;