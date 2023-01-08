import React, { createContext } from 'react';


export const TravelContext =createContext();

const AuthContext = ({children}) => {

    const TravelValue={

    }
    return (
        <TravelContext.Provider value={TravelValue}>
            {children}
        </TravelContext.Provider>
    );
};

export default AuthContext;