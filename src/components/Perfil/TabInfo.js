import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Content, Container, Separator, ListItem} from 'native-base';
import img2 from '../../assets/imgs/registro2.jpg'
import CabeceraPer from '../Cabecera/CabeceraPer';
import Premium from './Premium';

class TabInfo extends Component {
  render() {
    return (
      <Container style={styles.background}>
        <Content>
          <Separator bordered>
            <Text>Informacion Personal</Text>
          </Separator>
          <ListItem >
            <Text>Edad</Text>
          </ListItem>
          <ListItem>
            <Text>Sexo</Text>
          </ListItem>
          <ListItem last>
            <Text>Kelso Brittany</Text>
          </ListItem>
          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white'
  },
  img: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center'
  },
  nombre: {
    marginLeft: 20,
    alignSelf: 'center'
  },
  texto: {
    fontWeight: 'bold',
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  imgCard: {
    height: 150,
    width: '100%',
    position: 'relative'
  },
  card: {
    width: '50%',
    height: 150
  },
  view: {
    flexDirection: 'row',
    marginTop: 15
  },
  title: {
    fontSize: 20,
    color: 'black'
  }
});

export default TabInfo;
