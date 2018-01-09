/**
 *  Coded by Laura Vingada
 *  laura@vingada.com
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ImageBackground,
  Button,
  StyleSheet
} from 'react-native';
import lbd from './imgBase64';

const img = 'https://c21stores-weblinc.netdna-ssl.com/product_images/tee-dress/420/590b399f69702d086600013a/super_zoom.jpg?c=1493907871';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  }
});

export default class App extends Component{
  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={{ uri: img }}
      >
      <View style={ styles.container }>
      <Button
        onPress = { this.send.bind(this) }
        title = "Send Image To Server"
        color = "#4169E1"
      />
      </View>

    </ImageBackground>
    );
  }

  send() {
    //let photo = {img64: img64Data};
    let photo = {img64: lbd.img64 }
    let url = "https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/";

    let config = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(photo),
    }

    fetch(url, config)
      .then((responseData) => {
        console.log(responseData);
        console.log("yay!");
        let result = JSON.parse(responseData._bodyInit);
        let dresses = result.data;
        console.log(dresses);
        let image = dresses.map(dress => {
          console.log(dress.gofind_image_url_main);
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

AppRegistry.registerComponent('imageUpload', () => imageUpload);
