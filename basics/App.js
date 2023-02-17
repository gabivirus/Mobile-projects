import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function App(){
  return(
    <View style = {estilo.container}>
      <View>
        <Text style = {estilo.titulo}>Men I Trust</Text>
      </View>
      <ScrollView>
        <View style = {estilo.container}>
          <Text style = {estilo.subtitulo}>Melhores ALbums</Text>

          <Text>{'\n'}Oncle Jazz{'\n'}</Text>
          <Image style = {estilo.img} source = {require("./assets/Oncle.jpg")}/>

          <Text>{'\n'}Untourable{'\n'}</Text>
          <Image style = {estilo.img} source = {require("./assets/Untourable.jpeg")}/>

          <Text>{'\n'}HeadRoom{'\n'}</Text>
          <Image style = {estilo.img} source = {require("./assets/headroom.jpg")}/>

          <Text>{'\n'}Men I Trust{'\n'}</Text>
          <Image style = {estilo.img} source = {require("./assets/MenITrust.jpg")}/>
        </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems : 'center',
    backgroundColor: "#F6E6C2",
    padding: 20,
  },
  titulo:{
    fontSize: 30,
    color: "#EA8FEA",
    marginBottom: 10
  },
  img:{
    width: 250,
    height: 250,
    margin: 20,
    borderRadius: 6,
  },
  subtitulo:{
    fontSize: 15,
    color: "#FFAACF"
  }
})