import { StyleSheet } from "react-native";

import defaultStyles from "../../global/styles";
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
  ...defaultStyles,

  container: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND
  },
  main: {
    flex: 1,
    padding: 25,
    paddingTop: 0
  }
});

export default styles;