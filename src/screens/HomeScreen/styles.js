import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      flex: 1,
    },
    header:{
        padding:25,
        paddingBottom:30,
        backgroundColor: theme.colors.PRIMARY,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    profileImage: {
        width: 48,
        height: 48,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 100,
        overflow: 'hidden', 
        alignItems: 'center',
    },
    image:{
        flex: 1,
    },
    textHeader:{
        fontFamily: theme.fonts.MEDIUM,
        color: '#FFF',
        marginLeft: 10
    },
    rowHeader: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 20
    },
    cardBalance:{
        padding:20,
        width:'100%',
        backgroundColor: '#rgba(255,255,255,0.25)',
        borderRadius: 16,
    },
    textSaldo: {
        fontFamily: theme.fonts.REGULAR,
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center'
    },
    textValue:{
        fontFamily: theme.fonts.SEMI_BOLD,
        fontSize: 35,
        color: '#FFF',
        textAlign: 'center'
    },
  })

  export default styles;