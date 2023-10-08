const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B54B00',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 181,
        height: 198,
        resizeMode: 'contain',
    },
    input: {
        height: 50,
        width: 300,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        color: '#000000',
        padding: 15,
        marginTop: 25,
        fontSize: 17
    },
    textButton: {
        color: '#ffffff',
        fontSize: 20
    },
    buttonLogar: {
        marginTop: 50,
        width: 200,
        height: 45,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonCadastrar: {
        marginTop: 100,
        width: 200,
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})