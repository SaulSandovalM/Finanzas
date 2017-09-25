import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Content, Container, H1, Title, Card, ListItem, Separator, Button} from 'native-base';
import * as Animatable from 'react-native-animatable';
import CabeceraPer from '../Cabecera/CabeceraPer';
import Premium from './Premium';
import img2 from '../../assets/imgs/registro2.jpg'

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contenido: 1
    };
  }

  changeContenido = (num) => {
    this.setState({
      contenido:num
    });
  };

    render() {
      const {contenido} = this.state;
      return (
        <Container style={styles.background}>

          <CabeceraPer headerText="PERFIL"/>

          <Content>
            <Image style={styles.img} source={{
              uri: 'https://avatars1.githubusercontent.com/u/20559576?v=4&s=400&u=5561130e57f79c0fcebe86983b852fc1eecc9962'
            }}/>

            <H1 style={styles.nombre}>Saul Sandoval M</H1>

            <Text style={styles.nombre}>sauldevelop@gmail.com</Text>

            <View style={styles.view1}>
              <View style={styles.view2}>
                <Button onPress={()=>this.changeContenido(1)} style={styles.content}>
                  <View>
                  <Text>4</Text>
                  <Text>Guardados</Text>
                  </View>
                </Button>
              </View>
              <Button onPress={()=>this.changeContenido(2)} style={styles.content}>
                <View>
                <Text>1</Text>
                <Text>Información</Text>
                </View>
              </Button>
            </View>

            <View>
              {contenido === 1
                ? <View>
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
                  </View>
                :
                <View>
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
                </View>
              }
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
      backgroundColor: 'transparent'
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
    },
    view1: {
      margin: 10,
      flexDirection: 'row'
    },
    view2: {
      marginRight: 10
    },
    content: {
      backgroundColor: 'transparent'
    }
  });

  export default Perfil;
