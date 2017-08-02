'use strict';
import { Router } from './router';
import { AppRegistry } from 'react-native';
import { Constants } from './utils/constants';
import * as firebase from 'firebase';

export const firebaseApp = firebase.initializeApp(Constants.config);
AppRegistry.registerComponent('gossip', () => Router.SignedOut);