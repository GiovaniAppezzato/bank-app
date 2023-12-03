import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';
import defaultStyles from '../../global/styles'; 

const styles = StyleSheet.create({
  ...defaultStyles,
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
  },
  card: {
    width: 180,
    height: 220,
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: theme.colors.PRIMARY,
    padding: 25,
    justifyContent: "space-between",
  },
  cardAdd: {
    width: 180,
    height: 220,
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: theme.colors.PRIMARY_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center' 
  },
  buttonTrash: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#4b9cf9',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles;