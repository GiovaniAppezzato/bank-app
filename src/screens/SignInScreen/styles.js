import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 181,
    height: 198,
    resizeMode: 'contain',
    position:'absolute',
    top:80
  },
  input: {
    marginBottom: 10,
    height: 60,
    width: 327,
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
    width: 327,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#2382F7",
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerView:{
    marginTop:350
  }
  
})

export default styles;

