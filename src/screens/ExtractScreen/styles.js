import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';
import defaultStyles from '../../global/styles'; 

const styles = StyleSheet.create({
  ...defaultStyles,
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
  },
  cardTransactions:{
    flexDirection: 'row',
    borderRadius: 15,
    padding: 20,
    backgroundColor: theme.colors.SHAPE,
    marginBottom: 15,
    alignItems: 'center',
  },
  nameTransactions:{
    marginLeft: 10,
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT,
    fontSize: 13
  },
  valueTransactions:{
    marginLeft: 10,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.TEXT,
    fontSize: 13,
  },
  dateTrasansactions:{
    marginLeft: 'auto',
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.TEXT_LIGHT,
    fontSize: 12,
  }
})

export default styles;