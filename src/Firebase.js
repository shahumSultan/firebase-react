import * as firebase from 'firebase';
//import firestore from 'firebase/firestore';

const settings = {
    timestampsInSnapshots: true
};

const config = {
    apiKey: "AIzaSyDPlHXNonIQwBq87mP5FEjF7X8zsx2gCAg",
    authDomain: "fire-react-7c45b.firebaseapp.com",
    databaseURL: "https://fire-react-7c45b.firebaseio.com",
    projectId: "fire-react-7c45b",
    storageBucket: "fire-react-7c45b.appspot.com",
    messagingSenderId: "629075613445",
    appId: "1:629075613445:web:53c56f7f8ada133852096c",
    measurementId: "G-8NRV8S6HC2"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();
firebase.firestore().settings(settings);

export default firebase;