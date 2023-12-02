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
    flex: 1,
    justifyContent: 'space-between',
    padding: 25
  },
  containerKey: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  titleKey: {
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT,
    fontSize: 14,
  },
  textKey: {
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.TEXT,
    fontSize: 12,
  },
  buttonCopy: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: theme.colors.SHAPE,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default styles;