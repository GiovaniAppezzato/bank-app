import { StyleSheet } from "react-native";

import theme from "../../../global/styles/theme";

const styles = StyleSheet.create({
  label: {
    fontFamily: theme.fonts.MEDIUM,
    fontSize: 15,
    color: theme.colors.TEXT,
    marginLeft: 5,
    marginBottom: 5
  },
  wrapper: {
    backgroundColor: theme.colors.SHAPE,
    padding: 5,
    borderRadius: 15,
    width: '100%',
    flexDirection: 'row',
  },
  option: {
    width: '50%',
    // backgroundColor: theme.colors.BACKGROUND,
    borderRadius: 15,
  },
  optionText: {
    textAlign: 'center',
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.TEXT,
    padding: 16,
  },
  optionActived: {
    backgroundColor: theme.colors.BACKGROUND,
  }
});

export default styles;