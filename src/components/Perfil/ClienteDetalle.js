import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Container, Content, Card, Icon, Right} from 'native-base';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import CabeceraPer from '../Cabecera/CabeceraPer';
import Premium from './Premium';

const CONTENT = [
  {
    nombre: 'Tipo de Poliza: Poliza',
    vigencia: 'Fecha de vencimiento: 18/Julio/2017',
    poliza: 'Noº de Poliza: 12113 93994163',
    contratacion: 'Fecha de contratacion: 18/Julio/2016',
    status: 'Status: Pagado',
    correo: 'avril@gmail.com'
  }, {
    nombre: 'Tipo de Poliza: Poliza',
    vigencia: 'Fecha de vencimiento: 18/Julio/2017',
    poliza: 'Noº de Poliza: 12113 93994163',
    contratacion: 'Fecha de contratacion: 18/Julio/2016',
    status: 'Status: Pagado',
    correo: 'avril@gmail.com'
  }, {
    nombre: 'Tipo de Poliza: Poliza',
    vigencia: 'Fecha de vencimiento: 18/Julio/2017',
    poliza: 'Noº de Poliza: 12113 93994163',
    contratacion: 'Fecha de contratacion: 18/Julio/2016',
    status: 'Status: Pagado',
    correo: 'avril@gmail.com'
  }, {
    nombre: 'Tipo de Poliza: Poliza',
    vigencia: 'Fecha de vencimiento: 18/Julio/2017',
    poliza: 'Noº de Poliza: 12113 93994163',
    contratacion: 'Fecha de contratacion: 18/Julio/2016',
    status: 'Status: Pagado',
    correo: 'avril@gmail.com'
  }, {
    nombre: 'Tipo de Poliza: Poliza',
    vigencia: 'Fecha de vencimiento: 18/Julio/2017',
    poliza: 'Noº de Poliza: 12113 93994163',
    contratacion: 'Fecha de contratacion: 18/Julio/2016',
    status: 'Status: Pagado',
    correo: 'avril@gmail.com'
  }
];

class ClienteDetalle extends Component {
  state = {
    activeSection: false,
    collapsed: true
  };

  _setSection(section) {
    this.setState({activeSection: section});
  }

  _renderHeader(section, i, isActive) {
    return (
      <Animatable.View duration={500} style={[
        styles.header, isActive
          ? styles.active
          : styles.inactive
      ]} transition="backgroundColor">
        <Card style={styles.headerText}>
          <Text style={styles.text1}>{section.nombre}</Text>
          <Text style={styles.text2}>{section.vigencia}</Text>
          <Right>
            <Icon name="ios-arrow-down"/>
          </Right>
        </Card>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View duration={500} style={[
        styles.content, isActive
          ? styles.active
          : styles.inactives
      ]} transition="backgroundColor">
          <Text>{section.poliza}</Text>
          <Text>{section.contratacion}</Text>
          <Text>{section.status}</Text>
      </Animatable.View>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CabeceraPer headerText="POLIZAS"/>

          <Accordion activeSection={this.state.activeSection} sections={CONTENT} renderHeader={this._renderHeader}
            renderContent={this._renderContent} duration={400} onChange={this._setSection.bind(this)}/>

        </Content>
        <Premium/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 1
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: 'rgb(143,180,130)'
  },
  content: {
    padding: 20,
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)'
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)'
  },
  text1: {
    marginLeft: 10,
    marginTop: 10
  },
  text2: {
    margin: 10
  }
});

export default ClienteDetalle;
