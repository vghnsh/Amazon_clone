import firebase from 'firebase';

var firebaseApp = {
    apiKey: "AIzaSyANVIiogGuycSDr4TBOW9zKBuc72JY-hwc",
    authDomain: "clone-1b796.firebaseapp.com",
    databaseURL: "https://clone-1b796.firebaseio.com",
    projectId: "clone-1b796",
    storageBucket: "clone-1b796.appspot.com",
    messagingSenderId: "834581695192",
    appId: "1:834581695192:web:3ce734ddc2db4e7d5d65ad",
    measurementId: "G-3M2S87G29F"
  };
firebase.initializeApp(firebaseApp);

const auth= firebase.auth();
const storage= firebase.storage();

export  {auth,storage};