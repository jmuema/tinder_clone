import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA7ANWV4hWB1kkREDBDy4EWWc2dzNjDWSI",
    authDomain: "tinder-clone-83ac6.firebaseapp.com",
    databaseURL: "https://tinder-clone-83ac6.firebaseio.com",
    projectId: "tinder-clone-83ac6",
    storageBucket: "tinder-clone-83ac6.appspot.com",
    messagingSenderId: "910705851589",
    appId: "1:910705851589:web:19f67e4d9e77dc6ee504ac",
    measurementId: "G-2BJC0CG44T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;