/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {name as appName} from './app.json';

import {createAppContainer} from 'react-navigation';
import AppStack from './nav/AppStack';

const App = createAppContainer(AppStack);

class AppNative extends Component {
  render () {
    return <View style={{flex: 1}}>
      <App/>
    </View>
  }
}

AppRegistry.registerComponent(appName, () => AppNative );
