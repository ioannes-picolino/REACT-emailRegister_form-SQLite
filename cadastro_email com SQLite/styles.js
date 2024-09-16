import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: StatusBar.currentHeight,
        marginLeft: 10,
    },    
    labelCampo: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    campoEdicao: {
        backgroundColor: '#7cd1eb',
        width: '90%',
        height: 40,
        shadowColor: "#000",
        fontSize: 17,
        fontWeight: 'bold',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    areaBotao: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
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
    imgExibeSenha: {
        width: 32,
        height: 32,
    },
    
    campoSenha: {
        width: '140%',
        marginRight: 5,
    },

    areaCodigoENome: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-around',
    },
    areaCodigo: {
        width: '40%',
    },
    areaNome: {
        width: '60%',
    },

    areaSenhas: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-around',
        alignItems: 'flex-end',

    },
    areaSenha: {
        width: '50%',        
    },
    areaConfirmacaoSenha: {
        width: '50%',
    },
    areaSenhaEVerSenha:{
        width: '100%',
        flexDirection: 'row',        
    },

    listaUsuarios: {
        width: '98%',
        height: '100%',
        backgroundColor: '#FFF',
        marginTop: 20,        
    },  

});


export default styles;