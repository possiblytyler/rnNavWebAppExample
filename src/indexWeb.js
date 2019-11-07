import React from 'react';
import ReactDOM from 'react-dom';
import {name as appName} from './app.json';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {createBrowserApp} from '@react-navigation/web';
import * as serviceWorker from './serviceWorker';
import AppStack from './nav/AppStack';
import AppOptions from './nav/AppOptions';

const App = createBrowserApp(AppStack, AppOptions);

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, { rootTag: document.getElementById('root') });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
