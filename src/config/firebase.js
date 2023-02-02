import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD3GBRrouOv6T4xbRuxw-uvIFIrfbEUGgI",
  authDomain: "magic-chat-4cdc9.firebaseapp.com",
  databaseURL: "https://magic-chat-4cdc9.firebaseio.com",
  projectId: "magic-chat-4cdc9",
  storageBucket: "magic-chat-4cdc9.appspot.com",
  messagingSenderId: "32075859670",
  appId: "1:32075859670:web:7366a381982b99c63feb77",
  measurementId: "G-PMS9DFW6J0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export  const db = firebaseApp.database();

