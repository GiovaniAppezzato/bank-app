import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { Formik } from "formik";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Yup from 'yup';

import styles from './styles';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
// import ImagePickerModal from '../../components/ImagePickerModal';
// import { requestCameraPermission } from '../../utils/permissionsUtils';

const SignUpScreenPhoto = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisiblePhotoModal, setIsVisiblePhotoModal] = useState(false);

  const formRef = useRef(null);
  const scrollRef = useRef(null);

  function onSubmit(values) {
    console.log(values);
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

      formRef.current?.setFieldValue("picture", {
        uri: assets.uri,
        type: assets.type,
        name: assets.fileName
      });
    }
  }

  function onRemoveImage() {
    formRef.current?.setFieldValue("picture", {
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

                {/* <ImagePickerModal
                  isVisible={isVisiblePhotoModal}
                  hasRemoveOption={values.picture.uri !== ""}
                  onClose={() => setIsVisiblePhotoModal(false)}
                  onImageSelected={onImageSelected}
                  onRemoveImage={onRemoveImage}
                /> */}
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpScreenPhoto;