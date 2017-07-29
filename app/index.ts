import { SignedOut } from './router';
import { AppRegistry } from 'react-native';
import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBbBG-ZsqaSj0yz_sOhXfV3J5SRH71SXfc",
	authDomain: "gossip-bbb74.firebaseapp.com",
	databaseURL: "https://gossip-bbb74.firebaseio.com",
	projectId: "gossip-bbb74",
	storageBucket: "gossip-bbb74.appspot.com",
	messagingSenderId: "298354551253"
};
export const firebaseApp = firebase.initializeApp(config);
AppRegistry.registerComponent('gossip', () => SignedOut);