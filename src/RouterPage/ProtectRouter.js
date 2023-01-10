import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { TravelContext } from '../ContextPage/AuthContext';

const ProtectRouter = ({ Children }) => {
    const {user, loader}=useContext(TravelContext)
    const location =useLocation()

    
    if(loader){
        return <div>Loading ....</div>
    }

    if(user){
        return Children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace/>
};

export default ProtectRouter;