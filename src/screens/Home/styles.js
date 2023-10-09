const { StyleSheet } = require("react-native");
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191970',
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
        height: 50,
        width: 300,
        backgroundColor: '#rgba(0,0,0,0.4)',
        borderRadius: 30,
        color: '#fff',
        padding: 15,
        marginTop: 25,
        fontSize: 15,
    },
    textButton: {
        color: '#fff',
        fontSize: 20
    },
    buttonEntrar: {
        marginTop: 50,
        width: 150,
        height: 35,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonCadastrar: {
        marginTop: 25,
        width:150,
        height: 35,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
})