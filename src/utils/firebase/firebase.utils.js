import { initializeApp } from "firebase/app";
// eslint-disable-next-line no-unused-vars
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB0z5t-puVkq-V_nTMQJrcGtf2VY7tt9fc",
  authDomain: "clothing-store-1ff78.firebaseapp.com",
  projectId: "clothing-store-1ff78",
  storageBucket: "clothing-store-1ff78.appspot.com",
  messagingSenderId: "409713757250",
  appId: "1:409713757250:web:5fc08dda1b187dccdcf1db"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());


    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {displayName, email, createdAt});
        } catch (error) {
            console.log('encountered an error creating user', error.message);
        }
    }
    return userDocRef;
};