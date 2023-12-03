import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import theme from '../../../global/styles/theme';

const Input = ({
  formRef,
  label,
  error,
  style,
  value,
  editable = true,
  ...rest
}) => {
  function handleChange(value) {
    console.log(formRef?.current?.setFieldValue('type', value));
  }

  return (
    <View style={style || {}}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[
            styles.option,
            value == 'Deposit' ? styles.optionActived : {},
          ]}
          onPress={() => {
            handleChange('Deposit');
          }}>
          <Text style={styles.optionText}>Depositar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            value == 'Withdraw' ? styles.optionActived : {},
          ]}
          onPress={() => {
            handleChange('Withdraw');
          }}>
          <Text style={styles.optionText}>Retirar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
