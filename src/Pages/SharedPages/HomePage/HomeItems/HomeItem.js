import React from 'react';
import { TiArrowRightThick } from 'react-icons/ti'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const HomeItem = ({ datae }) => {

    const { name, img, price, descriptions
    } = datae;

    return (
        <div className=''>
            <div className="card w-96 glass">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className=' h-80' src={img} alt="car!" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{descriptions.slice(0, 450)}</p>
                    <div className="m-5 flex justify-between">
                        <h5>Price: ৳ {price}</h5>
                        <div className="">
                            <Link className=""><TiArrowRightThick /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeItem;