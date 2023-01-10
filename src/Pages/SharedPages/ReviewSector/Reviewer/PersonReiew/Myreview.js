import React, { useContext, useEffect, useState } from 'react';
import { TravelContext } from '../../../../../ContextPage/AuthContext';

import MyReviewData from './MyReviewData';

const Myreview =() => {
    const [sightes, setSightes] =useState([]);
    
    const {user}=useContext(TravelContext)
    console.log(user)
    useEffect(()=>{
            fetch(`http://localhost:5000/reviewcoll?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSightes(data))
    }, [user?.email])
    
    console.log(sightes)
    return (
        <div>
            <div className="overflow-x-auto w-full">
                {
                    sightes.map(check => <MyReviewData
                        key={check._id}
                        check={check}
                    ></MyReviewData>)
                }
            </div>
        </div>
    );
};

export default Myreview;