/**
 *  Coded by Laura Vingada
 *  laura@vingada.com
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import lbd from './imgBase64';

const img = 'https://c21stores-weblinc.netdna-ssl.com/product_images/tee-dress/420/590b399f69702d086600013a/super_zoom.jpg?c=1493907871';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#4169E1',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
  },
  image: {
    height: 300,
  },
});

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      imgArr: [],
    }
  }


  render() {
    return (
    <View style={styles.container}>
      <Image
        source={require('./imgs/littleBlackDress.jpg')}
        style={styles.image}

        resizeMode='center'
      />
      <TouchableOpacity
        style={ styles.button }
        onPress = { this.send.bind(this) }>
        <Text style={ styles.btnText }>Send Image To Server</Text>
      </TouchableOpacity>

    </View>


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
        let imgArr = result.data;
        console.log(imgArr);
        this.setState({imgArr});
        let image = imgArr.map(item => {
          console.log(item.gofind_image_url_main);
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

AppRegistry.registerComponent('imageUpload', () => imageUpload);
