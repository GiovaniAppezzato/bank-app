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
        borderBottomRightRadius: 35,
        elevation:10
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
        backgroundColor: '#4b9cf9',
        borderRadius: 16,
        elevation:25
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
    rowItens: {
        flexDirection:'row',
        padding:20,
        width: '100%',
        marginTop: 40,
    },
    button: {
        backgroundColor: 'white', 
        padding:10,
        borderRadius: 20, 
        // borderWidth: 2, 
        // borderColor: '#D9D9D9',
        width: 110, 
        height: 134,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation:11,
        marginRight: 20,
        shadowColor: 'black'
    },
    textButton: {
        fontFamily: theme.fonts.MEDIUM,
        color: theme.colors.TEXT,
        fontSize: 14,
        marginTop:10
    },

  })

  export default styles;