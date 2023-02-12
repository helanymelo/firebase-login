import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyANfbQuSJfsIMAit_Xk9fd604iYPAGTqcY",
    authDomain: "curso-50a1f.firebaseapp.com",
    projectId: "curso-50a1f",
    storageBucket: "curso-50a1f.appspot.com",
    messagingSenderId: "25655466460",
    appId: "1:25655466460:web:647805b85dc67db8505719",
    measurementId: "G-FK9034J1JN"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)


  export {db, auth}