import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

  const firebaseConfig = {
    apiKey: "AIzaSyBmdH7yEslTy21KxQLj0M5w4WPDhZFlUmc",
    authDomain: "e-ride-8dfe5.firebaseapp.com",
    projectId: "e-ride-8dfe5",
    storageBucket: "e-ride-8dfe5.appspot.com",
    messagingSenderId: "595032833384",
    appId: "1:595032833384:web:92b0800caa473307c76add"
  };

  // Initialize Firebase
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
