import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard, ScrollView, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from 'react';
import showPwd from './assets/showPwd.png';
import hidePwd from './assets/hidePwd.png';

export default function App() {
  const registros = "@lista_usuarios";
  const [cod, setCod] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [exibeSenha, setExibeSenha] = useState(false);

  useEffect(
    () => {
      processamentoUseEffect();}, []);

  async function processamentoUseEffect() {
    try {      
      await DbService.createTable();      
      await carregaDados();
    }
    catch (e) {
      console.log(e);
    }
  }

  function limpar() {
    setCod("");
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmaSenha("");
  }

  async function salvar() {
    if (!validarCampos())
      return;
    let novoRegistro = (cod);

    let obj = {
        cod,
        nome,
        email,
        senha
      };

    try {
      let resposta = false;
      if (novoRegistro)
        resposta = await DbService.adicionaRegistro(obj);
      else
        resposta = await DbService.alteraRegistro(obj);

      if (resposta)
        Alert.alert('Sucesso!');
      else
        Alert.alert('Falha!');

      Keyboard.dismiss();
      limpar();
      await carregar();
    } catch (e) {
      Alert.alert(e);
    }
  }

  function validarEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email);
  }

  function validarSenha(senha){
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-z\d]{5,}$/
    return regex.test(senha);
  }

  function validarCampos(){
    if (cod.length == 0  || codigo <=0 )
      {
        Alert.alert('Código deve ser maior que zero.');
        return false;
      }
  
      if (nome.length == 0) {
        Alert.alert('Informe o nome.');
        return false;
      }
  
      if (!validarEmail(email)) {
        Alert.alert('Informe um e-mail válido!');
        return false;
      }
      if (!validarSenha(senha)) {
        Alert.alert('Crie uma senha com no mínimo 1 letra maiúscula, 1 número e 5 caracteres.');
        return false;
      }
      if (senha !== confirmaSenha) {
        Alert.alert('Senha e confirmação de senha não coincidem!');
        return false;
      }
  
      return true 
  }

  async function carregar() {
    try {
      console.log('carregando');
      let registros = await DbService.obtemTodosRegistros();
        setLista(obj);
    } catch (e) {
      Alert.alert(e.toString());
    }
  }

  function editaRegistro(identificador) {
    const obj = lista.find((u) => u.codigo == identificador);

    if (obj!= undefined) {
      setCod(obj.cod);
      setNome(obj.nome);
      setEmail(obj.email);
      setSenha(obj.senha);
      setConfirmaSenha(obj.senha);
    } else {
      alert.Alert("Registro não localizado!");
    }
  }

  function removerRegistro(identificador) {
    Alert.alert("Atenção", "Confirma a remoção do registro?", [
      {
        text: "Sim",
        onPress: () => efetivaRemoverRegistro(identificador),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  async function efetivaRemoverRegistro(identificador) {
    try {
      await DbService.excluiRegistro(identificador);
      Keyboard.dismiss();
      Alert.alert("Registro apagado com sucesso!!!");
      limparCampos();
      await carregaDados();
    } catch (e) {
      Alert.alert(e.toString());
    }
  }

  async function efetivaExclusao() {
    try {
      await DbService.excluiTodosRegistros();
      await carregar();
    }
    catch (e) {
      Alert.alert(e);
    }
  }

  function apagarTudo() {
    if (Alert.alert('Muita atenção!!!', 'Confirma a exclusão de todos os registros?',
      [
        {
          text: 'Sim, confirmo!',
          onPress: () => {
            efetivaExclusao();
          }
        },
        {
          text: 'Não!!!',
          style: 'cancel'
        }
      ]));
  }

  return (
    <View style={styles.container}>
      <Titulo />

      <View style={styles.areaCodigoENome}>
        <View style={styles.areaCodigo}>
          <Text style={styles.labelCampo}>Código</Text>
          <TextInput
            style={[styles.campoEdicao, styles.sombra]}
            keyboardType="numeric"
            onChangeText={(texto) => setCod(texto)}
            value={cod}
          />
        </View>

        <View style={styles.areaNome}>
          <Text style={styles.labelCampo}>Nome</Text>
          <TextInput
            style={[styles.campoEdicao, styles.sombra]}
            onChangeText={(texto) => setNome(texto)}
            value={nome}
          />
        </View>
      </View>

      <Text style={styles.labelCampo}>E-mail</Text>
      <TextInput
        style={[styles.campoEdicao, styles.sombra]}
        keyboardType="email-address"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />

      <View style={styles.areaSenhas}>
        <View style={styles.areaSenha}>
          <Text style={styles.labelCampo}>Senha</Text>
          <View style={styles.areaSenha}>
            <View style={styles.areaSenhaEVerSenha}>
              <TextInput
                style={[styles.campoEdicao, styles.sombra, styles.campoSenha]}
                secureTextEntry={!exibeSenha}
                onChangeText={(texto) => setSenha(texto)}
                value={senha}
              />
              <TouchableOpacity onPress={() => setExibeSenha(!exibeSenha)}>
                <Image
                  source={exibeSenha ? hidePwd : showPwd}
                  style={styles.imgExibeSenha}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.areaConfirmacaoSenha}>
          <Text style={styles.labelCampo}>Confirmação de senha</Text>
          <TextInput
            style={[styles.campoEdicao, styles.sombra]}
            secureTextEntry={!exibeSenha}
            onChangeText={(texto) => setConfirmaSenha(texto)}
            value={confirmaSenha}
          />
        </View>
      </View>

      <View style={styles.areaBotao}>
        <Botao textoBotao={"Salvar"} funcaobotao={salvar} />
        <Botao textoBotao={"Limpar"} funcaobotao={limpar} />        
      </View>

      <ScrollView style={[styles.listaUsuarios]}>
        {
          lista.map((usuario, index) => (
             <CardUsuario usuario={usuario} editaRegistro={editaRegistro}
                          removerRegistro={removerRegistro} 
                          key={index.toString()} />
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}