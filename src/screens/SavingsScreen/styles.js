import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';
import defaultStyles from '../../global/styles'; 

const styles = StyleSheet.create({
  ...defaultStyles,
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
  },
  cardSavings: {
    justifyContent:'center',
    alignItems: 'center', 
    marginBottom: 25
  }, 
  totalSavings: {
    padding: 20,
    width: '90%',
    backgroundColor: theme.colors.PRIMARY_LIGHT,
    borderRadius: 10,
  },
  textCard: {
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.SECONDARY,
    fontSize: 15,
  },
  textValue: {
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.SECONDARY,
    fontSize:30
  }, 
  textButton: {
    marginTop:10,
    width: "100%",
    height: 56,
    alignContent: 'center',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.PRIMARY,
  }, 
  textRetirar: {
    color: 'white',
    fontFamily: theme.fonts.REGULAR,
    fontSize: 15,
  },
  titleTransactions: {
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT,
    fontSize: 14,
    marginBottom: 15
  },
  rowTransactions: {
    flexDirection: 'column',
    paddingHorizontal: 25,
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
  },
  containerModal: {
    padding: 25,
  },
  titleModal: {
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT_DARK,
    fontSize: 16,
    marginBottom: 15,
  }, 
  cardMovements: {
    flexDirection: 'row',
    borderRadius: 15,
    padding: 20,
    backgroundColor: theme.colors.PRIMARY_LIGHT,
    marginBottom: 25,
    alignItems: 'center',
  },
  textMovements: {
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT_DARK,
    fontSize: 15
  }, 
  valueMovements: {
    marginLeft: 10,
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.SECONDARY,
    fontSize: 15,
  },
  buttonMovements: {
    marginTop: 10,
    borderRadius: 10,
  },
  titleButtonMovements: {
    color: '#0160A6',
    fontSize: 15,
    fontFamily: theme.fonts.REGULAR,
  }
})

export default styles;