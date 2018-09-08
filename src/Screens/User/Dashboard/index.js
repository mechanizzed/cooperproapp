import React, { Component } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity } from 'react-native';

class Dashboard extends Component {
  logout = async () => {
    await AsyncStorage.removeItem('@Colegio:login');
    this.props.navigation.navigate('LoginStack');
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.logout}>
          <Text>Fazer logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Dashboard;
