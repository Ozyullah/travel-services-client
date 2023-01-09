import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const ServicesItems = ({ item }) => {

    const { name, img, descriptions, price, _id} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} style={{ objectFit: 'cover' }} alt="Shoes" className="rounded-xl h-56" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{descriptions.slice(0, 200)}</p>
                    <div className="flex justify-between m-10">
                        <h5>Price: ৳ {price}</h5>
                        <div>
                            <Link to={`/services/${_id}`} className="btn btn-outline">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesItems;