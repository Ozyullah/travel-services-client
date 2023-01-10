import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from '../firebase/firebase.confige'


const auth = getAuth(app)
export const TravelContext =createContext();

const AuthContext = ({children}) => {

    const [user, setUser]=useState('');
    const [loader, setLoader]=useState(true);

    const addedUserWithEmailPassword =(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const signInWithGoogle =(provider)=>{
        setLoader(true)
        return signInWithPopup(auth, provider)
    }


    const logInWithEmailandPassword =(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut =()=>{
        setLoader(true)
        return signOut(auth)
    }



    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoader(false);
        });
        
        return ()=>{
            unSubscribe();
        }
    },[])

    const TravelValue={
        addedUserWithEmailPassword,
        user,
        loader,
        signInWithGoogle,
        logInWithEmailandPassword,
        logOut
    }
    return (
        <TravelContext.Provider value={TravelValue}>
            {children}
        </TravelContext.Provider>
    );
};

export default AuthContext;