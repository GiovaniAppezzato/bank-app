import ToastLibrary from 'react-native-root-toast';
import theme from '../global/styles/theme';

export default class Toast {
  static positions = {
    TOP: 75,
    BOTTOM: -75,
    CENTER: 0
  };

  static durations = {
    DEFAULT: 7500,
    LONG: 10000,
    MEDIUM: 5000,
    SHORT: 3000
  }

  static defaultOptions = {
    duration: Toast.durations.MEDIUM,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    opacity: 1,
    containerStyle: {
      borderRadius: 10,
      backgroundColor: '#000000',
      opacity: 1,
    },
    textStyle: {
      fontFamily: theme.fonts.REGULAR,
      color: '#FFF',
      fontSize: 13,
    },
  };

  static show = (message, options = {}) => {    
    return ToastLibrary.show(message, { 
      ...Toast.defaultOptions, 
      ...options 
    });
  };

  static hide = (toast) => {
    ToastLibrary.hide(toast);
  };
}
