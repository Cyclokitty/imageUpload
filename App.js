/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Button
} from 'react-native';

const img = 'https://c21stores-weblinc.netdna-ssl.com/product_images/tee-dress/420/590b399f69702d086600013a/super_zoom.jpg?c=1493907871';

export default class App extends Component{
  render() {
    const resizeMode = 'center';
    return (
      <Image
        style={{
          flex: 1,
          resizeMode,
        }}
        source={{ uri: img }}        
      />
      

      
    );
  }
}

AppRegistry.registerComponent('imageUpload', () => imageUpload);