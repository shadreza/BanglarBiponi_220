import firebase from "firebase";  
  
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE6Le-XFTRPY66F7izLsZMv-mBASPDYgs",
  authDomain: "banglarbiponi-20e27.firebaseapp.com",
  databaseURL: "https://banglarbiponi-20e27.firebaseio.com",
  projectId: "banglarbiponi-20e27",
  storageBucket: "banglarbiponi-20e27.appspot.com",
  messagingSenderId: "436307665513",
  appId: "1:436307665513:web:1f4cd1e096b5edf7d4f8f8",
  measurementId: "G-YVE483L3D7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db,auth};