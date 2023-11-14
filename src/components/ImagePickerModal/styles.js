import { StyleSheet } from "react-native";

import theme from "@src/global/styles/theme";

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontFamily: theme.fonts.MEDIUM,
    color: theme.colors.TEXT_DARK,
    fontSize: 16,
    marginBottom: 15
  },
  text: {
    color: theme.colors.TEXT,
    fontFamily: theme.fonts.REGULAR,
    fontSize: 14
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5
  },
  icon: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: theme.colors.BACKGROUND,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  }
});

export default styles;