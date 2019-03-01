import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import api from '../../services/api';

import styles from './styles';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    loading: false,
    error: false,
  };

  checkUserExist = async (username) => {
    console.tron.log(username);
    console.log(username);
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber: username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;
    this.setState({ loading: true });
    try {
      await this.checkUserExist(username);
      await this.saveUser(username);
      navigation.navigate('Repositories');
    } catch (e) {
      this.setState({ loading: false, error: true });
      console.tron.log('usuario nao encontrado');
    }
  };

  render() {
    const { username, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que voce informe seu usuario do github
        </Text>
        {error ? <Text style={styles.error}>Usuario nao encontrado</Text> : null}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Digite seu usario"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.signIn}>
          {loading ? (
            <ActivityIndicator size="small" color="F00" />
          ) : (
            <Text style={styles.buttonText}> Prosseguir</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
