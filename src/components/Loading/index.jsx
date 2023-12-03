import React from "react";
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';
import theme from "../../global/styles/theme";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.PRIMARY} size="large" />
    </View>
  )
}

export default Loading;