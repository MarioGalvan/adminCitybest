import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import {initializeApp}  from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDOTRgjmCI_KUCJZET8_cyM44my4MEjfH8",
  authDomain: "acontracorriente-4f9aa.firebaseapp.com",
  projectId: "acontracorriente-4f9aa",
  storageBucket: "acontracorriente-4f9aa.appspot.com",
  messagingSenderId: "1082534328069",
  appId: "1:1082534328069:web:031c722f9e5eb89a93a96c"
};

const appAcontra = initializeApp(firebaseConfig);
const auth = getAuth(appAcontra);


export {appAcontra,auth };
