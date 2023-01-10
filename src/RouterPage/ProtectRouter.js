import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { TravelContext } from '../ContextPage/AuthContext';

const ProtectRouter = ({children}) => {
    const {user, loader}=useContext(TravelContext)
    const location =useLocation()
    console.log(user)


    if(loader){
        return <div>Loading ....</div>
    }

    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace/>
};

export default ProtectRouter;