import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({

    
    cardUser:{
        backgroundColor: "#DDA",
        flexDirection: 'row',
        height: 40,
        marginBottom: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textoCard:{
        fontWeight: 'bold',
    },
    areaBotoesCard:{    
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        marginRight: 5,
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