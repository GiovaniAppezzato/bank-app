import React from "react";
import { View, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BorderlessButton } from "react-native-gesture-handler";
import { 
  NavigationProp, 
  ParamListBase, 
  useNavigation 
} from "@react-navigation/native";

import styles from './styles';
import theme from "../../global/styles/theme";

const Header = ({ 
  title = null, 
  isDisabledBack = false,
  onPress
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      
      {!isDisabledBack && (
        <BorderlessButton 
          style={styles.button}
          onPress={() => {
            onPress ? onPress() : navigation.goBack();
          }}
        >
          <MaterialIcons
            name="keyboard-backspace"
            size={30}
            color={theme.colors.TEXT}
          />
        </BorderlessButton>
      )}
    </View>
  )
}

export default Header;