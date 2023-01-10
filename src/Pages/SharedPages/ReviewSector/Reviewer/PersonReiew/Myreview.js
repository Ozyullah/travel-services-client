import React, { useContext, useEffect, useState } from 'react';
import { TravelContext } from '../../../../../ContextPage/AuthContext';
import MyReviewData from './MyReviewData';

const Myreview = () => {
    const { user } = useContext(TravelContext)

    const [checks, setCheck] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewcoll?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCheck(data))
    }, [])
    console.log(checks)
    return (
        <div>
            <div className="overflow-x-auto w-full">
                {
                    checks.map(check =><MyReviewData 
                    key={check._id} 
                    check={check}
                    ></MyReviewData>)
                }
            </div>
        </div>
    );
};

export default Myreview;