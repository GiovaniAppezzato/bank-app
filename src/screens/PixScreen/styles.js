import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';
import defaultStyles from '../../global/styles'; 

const styles = StyleSheet.create({
  ...defaultStyles,
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
  },
  main: {
    padding: 25
  },
  button: {
    backgroundColor: theme.colors.SHAPE,
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT_DARK,
    marginLeft: 10,
  },
  titleMoreActions: {
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT_DARK,
    fontSize: 14,
    marginBottom: 15,
  },
  buttonMoreActions: {
    width: 100,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
  },
  textButtonMoreActions: {
    textAlign: 'center',
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT,
    fontSize: 12,
    marginTop: 10
  },
  wrapperIcon: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: theme.colors.SHAPE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerModal: {
    padding: 25,
  },
  titleModal: {
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT_DARK,
    fontSize: 16,
    marginBottom: 15,
  }
})

export default styles;