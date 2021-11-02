import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCc7L4qjf8FxA3JSrLzpwOLSM_do37dmF8",
  authDomain: "react-blogs-465c1.firebaseapp.com",
  projectId: "react-blogs-465c1",
  storageBucket: "react-blogs-465c1.appspot.com",
  messagingSenderId: "570364543473",
  appId: "1:570364543473:web:bdd5e6bd088ef5066a8450"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export {projectAuth, projectStorage, projectFirestore}

