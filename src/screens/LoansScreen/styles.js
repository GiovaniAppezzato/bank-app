import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';
import defaultStyles from '../../global/styles'; 

const styles = StyleSheet.create({
  ...defaultStyles,
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
  },
  cardLoan:{
    marginTop: '10%',
    padding: 20,
    width: '90%',
    height: '75%',
    backgroundColor: theme.colors.SHAPE,
    borderRadius: 20,
    justifyContent:'center',
    alignItems: 'center', 
  },
  cardContainer:{
    justifyContent:'center',
    alignItems: 'center', 
  },
  textLoan:{
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.TEXT,
    fontSize: 15,
  },
  textValue: {
    fontFamily: theme.fonts.SEMI_BOLD,
    color: theme.colors.SECONDARY,
    fontSize: 40,
  }
})

export default styles;