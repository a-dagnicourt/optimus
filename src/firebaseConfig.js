import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUOmzfZuJuMUj-Uh1RX4D9pXe30XoKW4Y",
    authDomain: "optimus-328011.firebaseapp.com",
    databaseURL:
        "https://optimus-328011-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "optimus-328011",
    storageBucket: "optimus-328011.appspot.com",
    messagingSenderId: "99094929577",
    appId: "1:99094929577:web:0f72a13654355ed5aa89b8",
    measurementId: "G-ETSLRP3K6Q",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return signInWithGoogle();
};
export const SignOut = () => {
    return auth.currentUser && auth.signOut();
};
