import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCBbcSBFNDTPAfhizulEQuqjg95EVqoGdI",
  authDomain: "e-ride-app-1b0fd.firebaseapp.com",
  projectId: "e-ride-app-1b0fd",
  storageBucket: "e-ride-app-1b0fd.appspot.com",
  messagingSenderId: "790575020115",
  appId: "1:790575020115:web:e37a469621d0c446ed2ea6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
