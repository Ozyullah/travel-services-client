import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { TravelContext } from '../../../../../ContextPage/AuthContext';
import useTitle from '../../../../../hooks/useTitle';

import MyReviewData from './MyReviewData';

const Myreview = () => {
    const [sightes, setSightes] = useState([]);

    useTitle('My-Reviews')

    const { user } = useContext(TravelContext)
    console.log(user)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSightes(data))
    }, [user?.email]);

    const handleDelete = (id) => {
        const confution = window.confirm('Are you sure delete this review')
        if (confution) {
            fetch(`http://localhost:5000/reviews/${id}`,
                {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(info => {
                    console.log(info)

                    if (info.deletedCount > 0) {
                        toast.success('Review succesfully deleted')

                        const remining =sightes.filter(sight =>sight._id !== id )
                        setSightes(remining)
                    }
                })
        }

    }

    console.log(sightes)
    return (
        <div>

            <h3 className='text-center font-semibold'>Number of Review: <span className=' text-blue-500'>{sightes.length}</span>  Founded</h3>
            <div className="overflow-x-auto w-full">
                {
                    sightes.map(check => <MyReviewData
                        key={check._id}
                        check={check}
                        handleDelete={handleDelete}
                    ></MyReviewData>)
                }
            </div>
        </div>
    );
};

export default Myreview;