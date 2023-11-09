import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TextInputProps, 
  ViewStyle 
} from 'react-native';

import styles from './styles';
import theme from '../../../global/styles/theme';

const Input = ({ 
  label, 
  error,
  style,
  containerStyle,
  editable = true,
  ...rest 
}) => {
  return (
    <View style={[styles.container, containerStyle ? containerStyle : {}]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        placeholderTextColor={theme.colors.PLACEHOLDER}
        style={[
          styles.input,
          style ? style : {},
          error ? styles.inputError : {},
          editable === false ? styles.inputDisabled : {}
        ]}
        {...rest} 
      />

      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
}

export default Input;