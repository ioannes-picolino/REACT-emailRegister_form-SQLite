import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({

    areaTitulo: {
        width: '95%',
        height: 50,
        backgroundColor: '#2e1cd4',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,

    },
    titulo: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    }

})

export default styles;