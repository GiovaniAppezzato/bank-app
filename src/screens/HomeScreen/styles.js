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
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor:'blue',
        alignItems:'center'
    },
    image:{ 
        width: 50, 
        height: 50, 
        borderRadius: 50,
        marginRight: 15
    },
    textHeader:{
        fontFamily: theme.fonts.MEDIUM,
        color: '#FFF',
    },
    rowHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    wrapperUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardBalance:{
        padding: 20,
        width: '100%',
        backgroundColor: '#4b9cf9',
        borderRadius: 16,
        // elevation:25,
    },
    textSaldo: {
        fontFamily: theme.fonts.REGULAR,
        fontSize: 16,
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
        width: '100%',
        height:'auto',
    },
    button: {
        backgroundColor: 'white', 
        padding:10,
        borderRadius: 15, 
        width: 110, 
        height: 134,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:0,
        marginRight: 15,
        shadowColor: 'black',
        backgroundColor: theme.colors.SHAPE,
    },
    textButton: {
        fontFamily: theme.fonts.MEDIUM,
        color: theme.colors.TEXT,
        fontSize: 14,
        marginTop: 15
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
    }
  })

  export default styles;