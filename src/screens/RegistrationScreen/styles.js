const { StyleSheet } = require("react-native");
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#003554',
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
        borderRadius: 10,
        padding: 13,
        color: "#003554",
        marginTop: 25,
        fontSize: 15,
        backgroundColor: "#FFF",
        fontFamily: 'Poppins SemiBold'
    },
    backButton: {
        marginRight: 300,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDate: {
        marginLeft: 10,
        width: 150,
        height: 53,
        borderRadius: 10,
        backgroundColor: "#051923",
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
        borderRadius: 10,
        color: '#0582ca',
        fontSize: 17,
        backgroundColor: "#FFF",
        fontFamily: 'Poppins SemiBold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
})