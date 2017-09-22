import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Content, Container, H1, Title, Card, ListItem} from 'native-base';
import * as Animatable from 'react-native-animatable';
import img2 from '../../assets/imgs/registro2.jpg'
import CabeceraPer from '../Cabecera/CabeceraPer';
import Premium from './Premium';

class Perfil extends Component {
  render() {
    return (
      <Container style={styles.background}>

        <CabeceraPer headerText="PERFIL"/>

        <Content>
          <Image style={styles.img} source={{
            uri: 'https://avatars1.githubusercontent.com/u/20559576?v=4&s=400&u=5561130e57f79c0fcebe86983b852fc1eecc9962'
          }}/>

          <H1 style={styles.nombre}>Saul Sandoval M</H1>

          <Text style={styles.nombre}>sauldevelop@gmail.com</Text>

          <ListItem itemDivider style={{marginTop: 15}}>
            <Title style={styles.title}>Guardados</Title>
          </ListItem>

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

        <Premium/>

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
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: 'black'
  }
});

export default Perfil;
