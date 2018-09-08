import './Config/ReactotronConfig';
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Routes from './Routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  };
  async componentDidMount() {
    const login = await AsyncStorage.getItem('@Colegio:login');
    this.appLoaded(login);
  }

  appLoaded = login => {
    this.setState({ userChecked: true, userLogged: !!login });
  };

  render() {
    if (!this.state.userChecked) return null;
    const Layout = Routes(this.state.userLogged);
    return <Layout />;
  }
}
