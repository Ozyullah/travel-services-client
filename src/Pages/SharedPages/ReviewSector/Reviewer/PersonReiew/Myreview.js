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

                        const remining = sightes.filter(sight => sight._id !== id)
                        setSightes(remining)
                    }
                })
        }

    }

    const handleUpdateData=(event,id)=>{
        event.preventDefault();
        const form =event.target;
        const descriptions=form.details.value;


        const better ={
            massage:descriptions
        }

        fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json' 
            },
            body: JSON.stringify(better)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
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
                        handleUpdateData={handleUpdateData}
                    ></MyReviewData>)
                }
            </div>
            <from onSubmite={handleUpdateData}>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Only text update</h3>
                        <textarea className="textarea textarea-success mt-5 w-72"
                        name='details' placeholder="Enter Your Text"></textarea>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Ok</label>
                        </div>
                    </div>
                </div>
            </from>
        </div>
    );
};

export default Myreview;