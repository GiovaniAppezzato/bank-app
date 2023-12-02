import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";

const ExtractScreen = ({ navigation }) => {
  return (
    <React.Fragment>
      <StatusBar barStyle='dark-content' backgroundColor={theme.colors.BACKGROUND} />
      <SafeAreaView style={styles.container}>
        <Header title={"Extrato"} />
      </SafeAreaView>
    </React.Fragment>
  )
};

export default ExtractScreen;