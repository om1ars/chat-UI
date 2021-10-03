import firebase from 'firebase/compat/app'
const firebaseConfig = {
  apiKey: "AIzaSyCgZfQS2YoYI6frbAhZVNA4mI3cwjch0QY",
  authDomain: "whatsapp-clone-e7308.firebaseapp.com",
  projectId: "whatsapp-clone-e7308",
  storageBucket: "whatsapp-clone-e7308.appspot.com",
  messagingSenderId: "348792886391",
  appId: "1:348792886391:web:2988f9a8c11453a6822272",
  measurementId: "G-T0JLK7P8BM",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;