// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
// import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDglsc8VY6zLqcu5Lu8N5GhKJBOEK4K2Nc",
  authDomain: "disney-hotstar-clone-aa11e.firebaseapp.com",
  projectId: "disney-hotstar-clone-aa11e",
  storageBucket: "disney-hotstar-clone-aa11e.appspot.com",
  messagingSenderId: "499526065133",
  appId: "1:499526065133:web:ffb301de9dada3874425e4",
  measurementId: "G-EFJ234YTXN"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage};
export default db;