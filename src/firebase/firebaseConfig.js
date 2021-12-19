import firebase from 'firebase'
import 'firebase/firebase-auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC96Vn8fBhck3en8BqiZcRF12fgTIkamXU",
  authDomain: "olx-2-9f9b8.firebaseapp.com",
  projectId: "olx-2-9f9b8",
  storageBucket: "olx-2-9f9b8.appspot.com",
  messagingSenderId: "770651491236",
  appId: "1:770651491236:web:08d50d6cc9c76bfdb20f31",
  measurementId: "G-1GDKN9P9HP"
};

  
  export default firebase.initializeApp(firebaseConfig)