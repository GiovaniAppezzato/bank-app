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
  },
  wrapperPhoto: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: theme.colors.SHAPE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectPhotoWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textSelectPhoto: {
    color: theme.colors.PRIMARY,
    fontFamily: theme.fonts.MEDIUM,
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 15,
  },
  buttonPickPhoto: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: theme.colors.PRIMARY,
    width: 56,
    height: 56,
    borderRadius: 56,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: theme.colors.BACKGROUND,
  }
});

export default styles;