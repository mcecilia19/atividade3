import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Input} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
import { ListItem } from '@rneui/themed';

const Stack = createStackNavigator();

const colors = {
  primary: '#3498db',
  secondary: '#2980b9',
  light: '#e1f5fe',
  dark: '#2c3e50',
  accent: '#1abc9c',
};

function Login({navigation}){
  return (
  <View style={styles.loginContainer}>
  <Avatar
    size={100}
    rounded
    source={{ uri: "https://media.licdn.com/dms/image/v2/D4D03AQGi_zQ3KPZz3A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670178002431?e=2147483647&v=beta&t=v2xh_fLiT68IyOO_TvM3IFtbErpporfiBO0GiR3ry1w" }}
  containerStyle={styles.avatar}
  />
  <Text style={styles.title}>Bem-vindo</Text>
  <View style={styles.inputContainer}>
  <Text style={styles.label}>Login</Text>
  <Input 
  placeholder='digite seu login'
  inputStyle={styles.input}
  containerStyle={styles.inputWrapper}
  placeholderTextColor={colors.dark}
  />
  </View>
  <View style={styles.inputContainer}>
  <Text style={styles.label}>Senha</Text>
  <Input 
        placeholder='digite sua senha'
        inputStyle={styles.input}
        containerStyle={styles.inputWrapper}
        placeholderTextColor={colors.dark}/>
  </View>
  <Button title="Login" 
        onPress={()=>navigation.navigate('Listacontatos')}
        buttonStyle={[styles.button, {backgroundColor: colors.primary}]}
        containerStyle={styles.buttonContainer}/>
  <Button 
        title="Cadastrar"
        onPress={() => navigation.navigate('Cadastro')}
        buttonStyle={[styles.button, { backgroundColor: colors.secondary }]}
        containerStyle={styles.buttonContainer}
      />
    </View>
  )
}

const lista = [
  {
    nome: 'Marcos Andrade',
    avatar_url:'https://cdn-icons-png.flaticon.com/512/552/552721.png',
    numero: '81 98888888'
  },
  {
    nome: 'Patrícia Tavares',
    avatar_url:'https://cdn-icons-png.flaticon.com/512/552/552721.png',
    numero: '81 977777777'
  },
  {
    nome: 'Rodrigo Antunes',
    avatar_url:'https://cdn-icons-png.flaticon.com/512/552/552721.png',
    numero: '81 96666666'
  }
]

function Listacontatos({navigation}){
  return(
  <View style={styles.listContainer}>
  {
    lista.map((l, i) => (
      <ListItem key={i} bottomDivider 
      containerStyle={styles.listItem}
      onPress={()=>navigation.navigate('Alterarcontato', {
        nome: l.nome,
        telefone: l.numero
      })}>
        <Avatar source={{ uri: l.avatar_url }}
        size='medium'
        rounded />
         <ListItem.Content>
              <ListItem.Title style={styles.listTitle}>{l.nome}</ListItem.Title>
              <ListItem.Subtitle style={styles.listSubtitle}>{l.numero}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      }
      <Button 
        title="Adicionar contato"
        onPress={() => navigation.navigate('Cadastrocontato')}
        buttonStyle={[styles.button, { backgroundColor: colors.accent }]}
        containerStyle={[styles.buttonContainer, { marginTop: 20 }]}
      />
    </View>
  )
}


function Cadastro({navigation}){
  return (
    <View style={styles.formContainer}>
    <Text style={styles.formTitle}>Cadastro de Usuário</Text>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Nome</Text>
      <Input 
        placeholder='Digite seu nome' 
        inputStyle={styles.input}
        containerStyle={styles.inputWrapper}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>CPF</Text>
      <Input 
        placeholder='Digite seu CPF' 
        inputStyle={styles.input}
        containerStyle={styles.inputWrapper}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Email</Text>
      <Input 
        placeholder='Digite seu email' 
        inputStyle={styles.input}
        containerStyle={styles.inputWrapper}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Senha</Text>
      <Input 
        placeholder='Digite sua senha' 
        secureTextEntry
        inputStyle={styles.input}
        containerStyle={styles.inputWrapper}
      />
    </View>
    <Button 
      title="Salvar"
      onPress={() => navigation.navigate('Login')}
      buttonStyle={[styles.button, { backgroundColor: colors.primary }]}
      containerStyle={styles.buttonContainer}
    />
  </View>
)
}

function Cadastrocontato({navigation}){
  return (
    <View style={styles.formContainer}>
    <Text style={styles.formTitle}>Novo Contato</Text>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Nome</Text>
      <Input 
        placeholder='Digite o nome' 
        inputStyle={styles.input}
        containerStyle={styles.inputWrapper}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Email</Text>
      <Input 
        placeholder='Digite o email' 
        inputStyle={styles.input}
        containerStyle={styles.inputWrapper}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Telefone</Text>
      <Input 
        placeholder='Digite o telefone' 
        inputStyle={styles.input}
        containerStyle={styles.inputWrapper}
      />
    </View>
    <Button 
      title="Salvar" 
      onPress={() => navigation.navigate('Listacontatos')}
      buttonStyle={[styles.button, { backgroundColor: colors.primary }]}
      containerStyle={styles.buttonContainer}
    />
  </View>
)
}


function Alterarcontato({route, navigation}){
  const {nome, telefone} = route.params;

  return(
    <View style={styles.formContainer}>
    <Text style={styles.formTitle}>Editar Contato</Text>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Nome</Text>
      <Input 
        placeholder='Nome'
        value={nome}
        inputStyle={styles.input}
        containerStyle={styles.inputWrapper}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Telefone</Text>
      <Input 
        placeholder='Telefone'
        value={telefone}
        inputStyle={styles.input}
        containerStyle={styles.inputWrapper}
      />
    </View>
    <Button 
      title='Alterar' 
      onPress={() => navigation.navigate('Listacontatos')}
      buttonStyle={[styles.button, { backgroundColor: colors.primary }]}
      containerStyle={styles.buttonContainer}
    />
    <Button 
      title='Excluir' 
      onPress={() => navigation.navigate('Listacontatos')}
      buttonStyle={[styles.button, { backgroundColor: '#e74c3c' }]} // Vermelho para ação perigosa
      containerStyle={styles.buttonContainer}
    />
  </View>
)
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name='Login' component={Login} options={{ title: 'Login' }}/>
        <Stack.Screen name='Listacontatos' component={Listacontatos} options={{ title: 'Contatos' }}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{ title: 'Cadastro' }}/>
        <Stack.Screen name='Cadastrocontato' component={Cadastrocontato} options={{ title: 'Novo Contato' }}/>
        <Stack.Screen name='Alterarcontato' component={Alterarcontato} options={{ title: 'Editar Contato' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Estilo base para containers
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
  // Estilo para telas de login/cadastro
  loginContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.light,
  },
  
  // Estilo para formulários
  formContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: colors.light,
  },
  
  // Estilo para lista de contatos
  listContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.light,
  },
  
  // Estilo para o avatar
  avatar: {
    marginBottom: 30,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  
  // Estilo para títulos
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 30,
  },
  
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 20,
    textAlign: 'center',
  },
  
  // Estilo para inputs
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  
  label: {
    fontSize: 16,
    color: colors.dark,
    marginBottom: 5,
    fontWeight: '500',
  },
  
  inputWrapper: {
    paddingHorizontal: 0,
  },
  
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  
  // Estilo para botões
  button: {
    borderRadius: 8,
    paddingVertical: 12,
  },
  
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  
  // Estilo para itens da lista
  listItem: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark,
  },
  
  listSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});