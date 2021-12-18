import firebase from 'firebase'
import 'firebase/firebase-auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBU64OtC874VvblB4wAwmvyRNxK_6i1U6s",
    authDomain: "react-olx-83dfe.firebaseapp.com",
    projectId: "react-olx-83dfe",
    storageBucket: "react-olx-83dfe.appspot.com",
    messagingSenderId: "817689972762",
    appId: "1:817689972762:web:00124252210ade79fc41a3",
    measurementId: "G-48C4TGXQSE"
  };

  export default firebase.initializeApp(firebaseConfig)