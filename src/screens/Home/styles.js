const { StyleSheet } = require("react-native");
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e87d2a',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 181,
        height: 198,
        marginBottom: 100,
        resizeMode: 'contain',
    },
    input: {
        height: 52,
        width: 300,
        borderRadius: 12,
        color: '#FFF',
        padding: 13,
        marginTop: 25,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#cb6415',
        backgroundColor:"#de6d17",
        fontFamily: 'Poppins Regular'
    },
    textButton: {
        color: '#5c2e0a',
        fontSize: 18,
        fontFamily:'Poppins Medium'
    },
    buttonEntrar: {
        marginTop: 100,
        width: 300,
        height: 50,
        borderRadius: 30,
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCadastrar: {
        marginTop: 25,
        width:300,
        height: 50,
        borderRadius: 30,
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
})