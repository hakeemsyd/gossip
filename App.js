import App from "./app/index";

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBbBG-ZsqaSj0yz_sOhXfV3J5SRH71SXfc",
    authDomain: "gossip-bbb74.firebaseapp.com",
    databaseURL: "https://gossip-bbb74.firebaseio.com",
    projectId: "gossip-bbb74",
    storageBucket: "gossip-bbb74.appspot.com",
    messagingSenderId: "298354551253"
};
const firebaseApp = firebase.initializeApp(config);
console.log("App Name" + firebaseApp.name);
export default App;
