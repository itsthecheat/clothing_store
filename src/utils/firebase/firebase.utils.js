import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBq-T2wfI5iyY4dmNOR_7342g-gnfDvwp4",
  authDomain: "clothing-db-44131.firebaseapp.com",
  projectId: "clothing-db-44131",
  storageBucket: "clothing-db-44131.appspot.com",
  messagingSenderId: "141313505897",
  appId: "1:141313505897:web:9490c7d0d216f5eaa440f8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  
  console.log(userDocRef)
  
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};