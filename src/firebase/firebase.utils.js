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

//save Oauth userprofile in firebase database
export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return; 
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
     const { displayName, email} = userAuth;
     const createdAt = new Date();

     try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
     }catch(error) {
      console.log('error creating user', error.message)
     }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accu, collection) => {
    accu[collection.title.toLowerCase()] = collection;
    return accu;
  }, {})
}

//initialize firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;