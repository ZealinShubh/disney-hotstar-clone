import {firebase} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDglsc8VY6zLqcu5Lu8N5GhKJBOEK4K2Nc",
    authDomain: "disney-hotstar-clone-aa11e.firebaseapp.com",
    projectId: "disney-hotstar-clone-aa11e",
    storageBucket: "disney-hotstar-clone-aa11e.appspot.com",
    messagingSenderId: "499526065133",
    appId: "1:499526065133:web:ffb301de9dada3874425e4",
    measurementId: "G-EFJ234YTXN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  

  export { auth, provider, storage};
  export default db;