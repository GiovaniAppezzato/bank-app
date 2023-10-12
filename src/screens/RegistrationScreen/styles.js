const { StyleSheet } = require("react-native");
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e87d2a',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 125,
        resizeMode: 'contain',
    },
    input: {
        height: 55,
        width: 300,
        borderRadius: 12,
        color: '#FFF',
        padding: 13,
        marginTop: 25,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#cb6415',
        backgroundColor: "#de6d17",
        fontFamily: 'Poppins Regular'
    },
    backButton: {
        marginRight: 300,
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#b95b13",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDate: {
        marginLeft: 10,
        width: 150,
        height: 50,
        borderRadius: 12,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateContainer: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    textDate: {
        height: 50,
        width: 140,
        borderRadius: 12,
        color: '#FFF',
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#cb6415',
        backgroundColor: "#de6d17",
        fontFamily: 'Poppins Regular',
        textAlign: 'center',
        textAlignVertical: 'center'

        
    },
    textButton: {
        fontFamily: 'Poppins Regular'
    },
})