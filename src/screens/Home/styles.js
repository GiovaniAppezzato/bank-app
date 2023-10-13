const { StyleSheet } = require("react-native");
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#003554',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 181,
        height: 198,
        marginTop: 50,
        marginBottom: 50,
        resizeMode: 'contain',
    },
    input: {
        height: 55,
        width: 300,
        borderRadius: 12,
        color: '#051923',
        padding: 13,
        marginTop: 20,
        fontSize: 15,
        backgroundColor: "#FFF",
        fontFamily: 'Poppins SemiBold'
    },
    textButton: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Poppins SemiBold'
    },
    buttonEntrar: {
        marginTop: 100,
        width: 300,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#051923",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCadastrar: {
        marginTop: 10,
        width: 300,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#051923",
        alignItems: 'center',
        justifyContent: 'center',
    },
})