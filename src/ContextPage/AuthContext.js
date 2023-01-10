import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import app from '../firebase/firebase.confige'


const auth = getAuth(app)
export const TravelContext =createContext();

const AuthContext = ({children}) => {

    const [user, setUser]=useState('');
    const [loader, setLoader]=useState(true);

    const addedUserWithEmailPassword =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const TravelValue={
        addedUserWithEmailPassword
    }
    return (
        <TravelContext.Provider value={TravelValue}>
            {children}
        </TravelContext.Provider>
    );
};

export default AuthContext;