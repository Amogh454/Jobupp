import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDEzhc4PPYpSyE-U5U-KtTZcDv4FecZm54",
  authDomain: "job-portal-d9b78.firebaseapp.com",
  projectId: "job-portal-d9b78",
  storageBucket: "job-portal-d9b78.appspot.com",
  messagingSenderId: "1179364321",
  appId: "1:1179364321:web:27adbf4b142ba9ce9a40a0"
};

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   