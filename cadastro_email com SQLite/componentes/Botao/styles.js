import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    botao: {
        width: '40%',
        height: 40,
        backgroundColor: '#110f61',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    sombra: {
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    

})

export default styles;