import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Content, Container, H1, Title, Card, ListItem, Tabs, Tab} from 'native-base';
import img2 from '../../assets/imgs/registro2.jpg'
import CabeceraPer from '../Cabecera/CabeceraPer';
import Premium from './Premium';

class TabGuard extends Component {
  render() {
    return (
      <Container style={styles.background}>
        <Content>
          <View style={styles.view}>
            <Card style={styles.card}>
                <Image style={styles.imgCard} source={img2}/>
                <Text style={styles.texto}>NOTICIAS</Text>
            </Card>
            <Card style={styles.card}>
                <Image style={styles.imgCard} source={img2}/>
                <Text style={styles.texto}>AUTOESTIMA E IMAGEN PROFECIONAL</Text>
            </Card>
          </View>

          <View style={styles.view}>
            <Card style={styles.card}>
              <Image style={styles.imgCard} source={img2}/>
              <Text style={styles.texto}>EL CEREBRO CARISMATICO</Text>
            </Card>
            <Card style={styles.card}>
              <Image style={styles.imgCard} source={img2}/>
              <Text style={styles.texto}>NEGOCIACION</Text>
            </Card>
          </View>
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

export default TabGuard;
