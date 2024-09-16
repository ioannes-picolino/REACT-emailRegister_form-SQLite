import {    
    TextInput,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function CardUsuario({usuario, editaRegistro, removerRegistro})
{
    return (
        <View
            style={[styles.cardUser, , styles.sombra]} >
            <Text style={styles.textoCard}>
              {usuario.codigo.toString().padStart(3, "0")}
            </Text>
            <Text>   </Text>
            <Text style={styles.textoCard}>{usuario.nome}</Text>

            <View style={styles.areaBotoesCard}>
              <TouchableOpacity
                style={styles.botaoEditar}
                onPress={() => editaRegistro(usuario.codigo)}
              >
                <AntDesign name="edit" size={24} color="black" />
              </TouchableOpacity>
              <Text> </Text>
              <TouchableOpacity
                style={styles.botaoApagar}
                onPress={() => removerRegistro(usuario.codigo)}
              >
                <AntDesign name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
    );
}