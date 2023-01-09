import React from 'react';
import {BsArrowLeft} from 'react-icons/bs'
import { Link, useLoaderData } from 'react-router-dom';
import './ServicesDetails.css'

const ServicesDetails = () => {

    const { img, descriptions, facility, name, price, service_id } = useLoaderData()

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
                    
                </div>
            </div>
            <Link className='btn btn-outline mt-7' title='Back to Services route' to={'/services'}><BsArrowLeft/></Link>
        </div>
    );
};

export default ServicesDetails;