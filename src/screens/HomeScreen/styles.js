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
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        elevation:10,
        shadowColor:'blue',
        alignItems:'center'

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
        padding: 20,
        width:'80%',
        backgroundColor: '#4b9cf9',
        borderRadius: 16,
        elevation:25,
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
        height:'auto',
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
        elevation:0,
        marginRight: 20,
        shadowColor: 'black',
        backgroundColor: theme.colors.SHAPE,
    },
    textButton: {
        fontFamily: theme.fonts.MEDIUM,
        color: theme.colors.TEXT,
        fontSize: 14,
        marginTop:10
    },
    rowTransactions: {
        flexDirection: 'column',
        padding:20,
    },
    cardTransactions:{
        marginTop: 20,
        flexDirection: 'row',
        borderRadius: 20,
        padding: 10,
        height:75,
        shadowColor: 'black',
        backgroundColor: theme.colors.SHAPE,
        alignItems: 'center',
        borderColor: 'blue',
    },
    nameTransactions:{
        marginLeft: 10,
        fontFamily: theme.fonts.SEMI_BOLD,
        color: theme.colors.TEXT,
        fontSize: 13
    },
    valueTransactions:{
        marginLeft: 10,
        fontFamily: theme.fonts.SEMI_BOLD,
        color: theme.colors.TEXT,
        fontSize: 13,
    },
    dateTrasansactions:{
        marginLeft: 'auto',
        fontFamily: theme.fonts.REGULAR,
        color: theme.colors.TEXT_LIGHT,
    }
  })

  export default styles;