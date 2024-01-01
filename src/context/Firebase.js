import { Children, createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth ,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {getDatabase,set,ref} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAQ_ATyk0_lhsgUwviLR3ICkvcZJh3sB1M",
    authDomain: "fir-fb0a6.firebaseapp.com",
    projectId: "fir-fb0a6",
    storageBucket: "fir-fb0a6.appspot.com",
    messagingSenderId: "710143189998",
    appId: "1:710143189998:web:8be1b954e45703119664ff",
    databseURL:"https://fir-fb0a6-default-rtdb.firebaseio.com/"};

// instance for config and auth
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
// instance for database.
const database = getDatabase(firebaseApp);

// const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext();

// create the custom hook
export const useFirebase = ()=>useContext(FirebaseContext);

export const FirebaseProvider = (props)=>{

    const signUpUserWithEmailAndPassword = (email,password)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password).then((data)=>console.log(data)).catch((err)=>console.log(err));
    }

    const putData = (key,data)=>{
        return set(ref(database,key),data);
    }

    // const signUpWithGoogle = ()=>{signInWithPopup(firebaseAuth,googleProvider).then((data)=>console.log(data)).catch((err)=>console.log(err));}
    
    return(
        <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword,putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
