import React, { useContext, useEffect, useState } from 'react';
import { TravelContext } from '../../../../../ContextPage/AuthContext';
import useTitle from '../../../../../hooks/useTitle';

import MyReviewData from './MyReviewData';

const Myreview =() => {
    const [sightes, setSightes] =useState([]);
    
    useTitle('My-Reviews')
    const {user}=useContext(TravelContext)
    console.log(user)
    useEffect(()=>{
            fetch(`http://localhost:5000/reviews?email=${user?.email}`)
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