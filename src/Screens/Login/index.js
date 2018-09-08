import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  StatusBar
} from 'react-native';

import Styles from './styles';

//import api
import api from '../../Services/api';

class Login extends Component {
  state = {
    login: '',
    password: '',
    loading: false,
    error: false,
    errorLogin: false
  };

  // Check if user existe and save in AsyncStorage
  checkAndSaveUser = async () => {
    const response = await api.post('/authenticate', {
      login: this.state.login,
      password: this.state.password
    });
    console.tron.log(response.data);
    if (response.data === false) throw Error;
    await AsyncStorage.setItem('@Colegio:login', this.state.login);
  };

  // Get values from input text and redirect if checkuser is true
  signIn = async () => {
    const { login, password } = this.state;
    if (login.length === 0 || password.length === 0)
      return this.setState({ error: true, errorLogin: false, loading: false });
    this.setState({ loading: true, error: false });
    this.checkAndSaveUser()
      .then(() => {
        this.props.navigation.navigate('ScreenTabs');
      })
      .catch(() => {
        this.setState({ errorLogin: true, loading: false });
      });
  };

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require('../../Assets/Images/bg_login.jpg')}
          style={Styles.backGroundImage}
        >
          <View style={Styles.formContainer}>
            <View style={Styles.welcomeContainer}>
              <Text style={Styles.welcomeTitle}>Bem-vindo</Text>
              <Text style={Styles.welcomeText}>
                Para continuar, precisamos que você informe seu RA de aluno e
                sua senha
              </Text>
            </View>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              style={Styles.textInput}
              placeholder="DIGITE SEU RA"
              placeholderTextColor="#82bdda"
              onChangeText={login => {
                this.setState({ login });
              }}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              style={Styles.textInput}
              placeholder="DIGITE SUA SENHA"
              placeholderTextColor="#82bdda"
              secureTextEntry={true}
              onChangeText={password => {
                this.setState({ password });
              }}
            />
            <TouchableOpacity style={Styles.buttonLogin} onPress={this.signIn}>
              {this.state.loading ? (
                <ActivityIndicator size="small" color="#395ca9" />
              ) : (
                <Text style={Styles.textLoginButton}>
                  <Icon name="ios-log-in" size={15} /> Entrar
                </Text>
              )}
            </TouchableOpacity>
            {this.state.error ? (
              <View style={Styles.errorContainer}>
                <Text style={Styles.errorText}>
                  Preencha todos os campos corretamente
                </Text>
              </View>
            ) : (
              <Text />
            )}

            {this.state.errorLogin ? (
              <View style={Styles.errorContainer}>
                <Text style={Styles.errorText}>Login ou senha inválidos</Text>
              </View>
            ) : (
              <Text />
            )}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Login;
