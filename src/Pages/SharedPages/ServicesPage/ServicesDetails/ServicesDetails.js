import React, { useEffect, useState } from 'react';
import {BsArrowLeft} from 'react-icons/bs'
import { Link, useLoaderData } from 'react-router-dom';
import './ServicesDetails.css'
import ServicesReviews from './ServicesReviews';

const ServicesDetails = () => {

    const [aimes, setAimes]=useState([])

    const { img, descriptions, facility, name, _id } = useLoaderData()

    useEffect(()=>{
        fetch(`http://localhost:5000/opinion?service_id=${_id}`)
        .then(res => res.json())
        .then(info => setAimes(info))
    },[])

    console.log(aimes,_id)

    return (
        <div className='m-10'>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="font-semibold text-2xl text-center">{name}</h2>
                        <p>{descriptions}</p>
                        <div className="">
                            <div>

                            </div>
                            <div>
                                {
                                    facility.map(hit => <div key={hit.name}>
                                        <h3 className='font-bold mb-3 mt-3'>{hit.name} :</h3>
                                        <p>{hit.details}</p>

                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Review Sections Started */}
                <div>

                    {
                        aimes.map(aime =><ServicesReviews 
                            key={aime._id}
                            aime={aime}
                        ></ServicesReviews>)
                    }

                   <Link className='btn btn-outline flex justify-center mt-5' to={`/review/${_id}`}>Add Review</Link> 
                </div>
            </div>
            <Link className='btn btn-outline mt-7' title='Back to Services route' to={'/services'}><BsArrowLeft/></Link>
        </div>
    );
};

export default ServicesDetails;