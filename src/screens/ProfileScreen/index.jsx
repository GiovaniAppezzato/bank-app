import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import styles from "./styles";
import theme from "../../global/styles/theme";

const ProfileScreen = ({ navigation }) => {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </React.Fragment>
  )
};

export default ProfileScreen;