import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import {Button, Icon, Footer, FooterTab, StyleProvider} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';
import Valores from '../Modal/Modal';
import img from '../../assets/imgs/registro.jpeg';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Cliente extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
    this.state = {
      visibleModalCliente: null,
      visibleModalAsesor: null
    };
  }

  _renderModalContentCliente = () => (
    <View style={styles.view}>
      <Button transparent onPress={this.cancelar}>
        <Text style={styles.x}>x</Text>
      </Button>
    </View>
  );

  _renderModalContentAsesor = () => (
    <View style={styles.view}>
      <Button transparent onPress={this.cancelar}>
        <Text style={styles.x}>x</Text>
      </Button>
    </View>
  );

  activarCliente = () => {
    this.setState({visibleModalCliente: 1})
  }

  activarAsesor = () => {
    this.setState({visibleModalAsesor: 1})
  }

  cancelar = () => {
    this.setState({visibleModalCliente: null});
    this.setState({visibleModalAsesor: null});
  }

  render() {
    return (
      <View>
        <StyleProvider style={getTheme(material)}>
        <Footer style={styles.background}>
          <FooterTab>
            <Button vertical onPress={()=>Actions.Perfil()}>
              <Icon name="person"/>
              <Text>Perfil</Text>
            </Button>
            <Button vertical onPress={()=>Actions.ClienteDetalle()}>{/*onPress={this.activarCliente}*/}
              <Icon name="md-document"/>
              <Text>Mis Polizas</Text>
            </Button>
            <Button vertical onPress={()=>Actions.AsesorDetalle()}>{/*onPress={this.activarAsesor}*/}
              <Icon name="folder"/>
              <Text>Asesor</Text>
            </Button>
          </FooterTab>
        </Footer>
      </StyleProvider>

        <Modal isVisible={this.state.visibleModalCliente === 1}>
          {this._renderModalContentCliente()}
        </Modal>

        <Modal isVisible={this.state.visibleModalAsesor === 1}>
          {this._renderModalContentAsesor()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgb(34, 86, 160)',
    borderRadius: 25,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  img: {
    width: '80%',
    height: 100
  },
  x: {
    marginRight: 20
  }
});

module.export = Cliente;
