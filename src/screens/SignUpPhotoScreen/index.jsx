import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, ScrollView, StatusBar } from 'react-native'
import { Formik } from "formik";
import * as Yup from 'yup';

import styles from './styles';
import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { setValidationErrors } from '../../utils/yupUtils';

const SignUpScreenPhoto = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);
  const scrollRef = useRef(null);

  function onSubmit(values) {
    // ...
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
              photo: null,
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <></>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpScreenPhoto;