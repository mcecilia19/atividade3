import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
import { ListItem } from '@rneui/themed';

const Stack = createStackNavigator();

const cores = {
  principal: '#3498db',
  secundario: '#2980b9',
  claro: '#e1f5fe',
  escuro: '#2c3e50',
  destaque: '#1abc9c',
};

function Login({ navigation }) {
  return (
    <View>
      <Avatar
        size={100}
        rounded
        source={{ uri: "https://media.licdn.com/dms/image/v2/D4D03AQGi_zQ3KPZz3A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670178002431?e=2147483647&v=beta&t=v2xh_fLiT68IyOO_TvM3IFtbErpporfiBO0GiR3ry1w" }}
      />
      <Text>Bem-vindo</Text>
      <Text>Login</Text>
      <Input placeholder='digite seu login' />
      <Text>Senha</Text>
      <Input placeholder='digite sua senha' />
      <Button title="Login" onPress={() => navigation.navigate('Listacontatos')} />
      <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
}

const lista = [
  { nome: 'Marcos Andrade', avatar_url: 'https://cdn-icons-png.flaticon.com/512/552/552721.png', numero: '81 98888888' },
  { nome: 'Patrícia Tavares', avatar_url: 'https://cdn-icons-png.flaticon.com/512/552/552721.png', numero: '81 977777777' },
  { nome: 'Rodrigo Antunes', avatar_url: 'https://cdn-icons-png.flaticon.com/512/552/552721.png', numero: '81 96666666' }
];

function Listacontatos({ navigation }) {
  return (
    <View>
      {lista.map((l, i) => (
        <ListItem key={i} bottomDivider onPress={() => navigation.navigate('Alterarcontato', { nome: l.nome, telefone: l.numero })}>
          <Avatar source={{ uri: l.avatar_url }} size='medium' rounded />
          <ListItem.Content>
            <ListItem.Title>{l.nome}</ListItem.Title>
            <ListItem.Subtitle>{l.numero}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
      <Button title="Adicionar contato" onPress={() => navigation.navigate('Cadastrocontato')} />
    </View>
  );
}

function Cadastro({ navigation }) {
  return (
    <View>
      <Text>Cadastro de Usuário</Text>
      <Text>Nome</Text>
      <Input placeholder='Digite seu nome' />
      <Text>CPF</Text>
      <Input placeholder='Digite seu CPF' />
      <Text>Email</Text>
      <Input placeholder='Digite seu email' />
      <Text>Senha</Text>
      <Input placeholder='Digite sua senha'/>
      <Button title="Salvar" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

function Cadastrocontato({ navigation }) {
  return (
    <View>
      <Text>Novo Contato</Text>
      <Text>Nome</Text>
      <Input placeholder='Digite o nome' />
      <Text>Email</Text>
      <Input placeholder='Digite o email' />
      <Text>Telefone</Text>
      <Input placeholder='Digite o telefone' />
      <Button title="Salvar" onPress={() => navigation.navigate('Listacontatos')} />
    </View>
  );
}

function Alterarcontato({ route, navigation }) {
  const { nome, telefone } = route.params;

  return (
    <View>
      <Text>Editar Contato</Text>
      <Text>Nome</Text>
      <Input placeholder='Nome' value={nome} />
      <Text>Telefone</Text>
      <Input placeholder='Telefone' value={telefone} />
      <Button title='Alterar' onPress={() => navigation.navigate('Listacontatos')} />
      <Button title='Excluir' onPress={() => navigation.navigate('Listacontatos')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: { backgroundColor: cores.principal },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name='Login' component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name='Listacontatos' component={Listacontatos} options={{ title: 'Contatos' }} />
        <Stack.Screen name='Cadastro' component={Cadastro} options={{ title: 'Cadastro' }} />
        <Stack.Screen name='Cadastrocontato' component={Cadastrocontato} options={{ title: 'Novo Contato' }} />
        <Stack.Screen name='Alterarcontato' component={Alterarcontato} options={{ title: 'Editar Contato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
