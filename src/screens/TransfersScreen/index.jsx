import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import styles from "./styles";
import theme from "../../global/styles/theme";
import Header from "../../components/Header";

const TransferScreen = ({ navigation }) => {
  return (
    <React.Fragment>
      <StatusBar barStyle='dark-content' backgroundColor={theme.colors.BACKGROUND} />
      <SafeAreaView style={styles.container}>
        <Header title={"Transferir"} />
      </SafeAreaView>
    </React.Fragment>
  )
};

export default TransferScreen;