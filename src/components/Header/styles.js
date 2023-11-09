import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.TEXT_DARK,
    fontFamily: theme.fonts.SEMI_BOLD,
    fontSize: 18,
  },
  button: {
    position: 'absolute',
    left: 22.5,
    padding: 2.5,
    borderWidth: 1,
  }
});

export default styles;