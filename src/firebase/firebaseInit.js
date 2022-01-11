import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtjfwHkPGElM9jMNTwsRdxomR9OGVGC5k",
    authDomain: "bloggr-bd433.firebaseapp.com",
    projectId: "bloggr-bd433",
    storageBucket: "bloggr-bd433.appspot.com",
    messagingSenderId: "1041913693207",
    appId: "1:1041913693207:web:bbd1363b32a90620008852"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();