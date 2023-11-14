import React from "react";
import { 
  Text, 
  ActivityIndicator,
} from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import theme from "../../global/styles/theme";

const Button = ({ 
  title, 
  isLoading = false,
  color = theme.colors.PRIMARY,
  titleStyle,
  style,
  ...rest 
}) => {
  return (
    <RectButton 
      style={[ 
        styles.button,
        style || {},
        { backgroundColor: color }
      ]} 
      {...rest}
    >
      {!isLoading ? (
        <Text style={[
          styles.title,
          titleStyle || {}
        ]}>
          {title}
          </Text>   
      ) : (
        <ActivityIndicator color={theme.colors.SHAPE} />
      )}
    </RectButton>
  )
}

export default Button;