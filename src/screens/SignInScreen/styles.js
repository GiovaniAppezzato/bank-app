import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    flex: 1,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginTop:-320
  },
  input: {
    marginBottom: 10,
    height: 60,
    borderRadius: 12,
    color: '#000',
    padding: 13,
    marginTop: 20,
    fontSize: 15,
    backgroundColor: "#EDEDED",
    fontFamily: 'Poppins SemiBold',
  },
  textButton: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins SemiBold'
  },
  button: {
    marginTop: 20,
    height: 55,
    borderRadius: 30,
    backgroundColor: theme.colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerView:{
    flex:1,
    width:'100%',
    padding:25
  }, 
  containerHeader:{
    position:'relative',
    alignItems:'center',
    marginBottom: 125
  },
  textPassword:{
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.TEXT,
    fontSize: 14,

    textAlign: "center",
    marginTop: 20
  }
})

export default styles;

