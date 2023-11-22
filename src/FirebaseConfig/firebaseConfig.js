import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore,} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCarzRO1REgdXgyI6Op6iPjgOgi8BoJK1I",
    authDomain: "netflix-clone-1447e.firebaseapp.com",
    projectId: "netflix-clone-1447e",
    storageBucket: "netflix-clone-1447e.appspot.com",
    messagingSenderId: "767166037387",
    appId: "1:767166037387:web:758eb977e028373d89038e",
    measurementId: "G-LBJX3L2Y6H"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
}