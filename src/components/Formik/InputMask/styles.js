import { StyleSheet } from "react-native";

import theme from "../../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10
  },
  label: {
    fontFamily: theme.fonts.MEDIUM,
    fontSize: 15,
    color: theme.colors.TEXT,
    marginLeft: 5,
    marginBottom: 5
  },
  input: {
    width: '100%',
    fontSize: 14,
    backgroundColor: theme.colors.SHAPE,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.TEXT,
    borderColor: theme.colors.SHAPE,
    borderWidth: 1.5,

    padding: 16,
    paddingRight: 56,
    borderRadius: 15,
    height: 62.9,
  },
  inputError: {
    borderWidth: 1.5,
    borderColor: theme.colors.DANGER,
  },
  textError: {
    color: theme.colors.DANGER,
    fontSize: 13,
    fontFamily: theme.fonts.REGULAR,

    marginTop: 5,
    marginLeft: 5,
  }
});

export default styles;