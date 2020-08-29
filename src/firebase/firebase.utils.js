import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCUqnplhjJ6JZsrrSTrwxwrhH1C5W9nzC8",
  authDomain: "stickr-shop.firebaseapp.com",
  databaseURL: "https://stickr-shop.firebaseio.com",
  projectId: "stickr-shop",
  storageBucket: "stickr-shop.appspot.com",
  messagingSenderId: "248302195555",
  appId: "1:248302195555:web:cb74fe96ea7e6c07a53956",
  measurementId: "G-YJ5RR6MFFR"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;