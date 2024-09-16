import {
    Text,
    View,
} from "react-native";
import styles from "./styles";

export default function Titulo()
{
    return (
        <View style={styles.areaTitulo}>
            <Text style={styles.titulo}>Cadastro de Usuários</Text>
        </View>        
    );
}