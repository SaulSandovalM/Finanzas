import React, {Component} from 'react';
import {StyleSheet, BackHandler, TouchableOpacity} from 'react-native';
import {Header, Left, Button, Icon, Title, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class CabeceraPer extends Component {
  atras() {
    Actions.Inicio()
  }

  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={this.atras.bind(this)}>
            <Icon name='arrow-back' style={styles.color}/>
          </Button>
        </Left>
        <Title style={styles.texto}>{this.props.headerText}</Title>
        <Right></Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white"
  },
  color: {
    color: 'rgb(102,165,138)'
  },
  texto: {
    color: 'rgb(102,165,138)',
    top: 16,
    backgroundColor: 'transparent'
  }
});

module.export = CabeceraPer;
