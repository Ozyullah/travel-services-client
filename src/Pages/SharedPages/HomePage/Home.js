import React, { useEffect, useState } from 'react';
import img1 from "../../../assets/flybridge.jpg"
import img2 from "../../../assets/travelimg.jpg"
import img3 from "../../../assets/travelMohastan.png"
import img4 from "../../../assets/cleanPic.png"
import { Link, useLoaderData } from 'react-router-dom';
import HomeItem from './HomeItems/HomeItem';
import useTitle from '../../../hooks/useTitle';


const Home = () => {

    const dataes = useLoaderData()
    console.log(dataes)

    useTitle('Home')

    return (
        <div>
            <div>
                <div className="carousel w-full h-60">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} className="w-full h-60" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={img2} className="w-full h-56" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={img3} className="w-full h-56" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={img4} className="w-full h-56" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn border-none btn-outline btn-xs">1</a>
                    <a href="#item2" className="btn border-none btn-outline btn-xs">2</a>
                    <a href="#item3" className="btn border-none btn-outline btn-xs">3</a>
                    <a href="#item4" className="btn border-none btn-outline btn-xs">4</a>
                </div>
            </div>
            <div>
                <div className='text-center w-80 mx-auto mb-10'>
                    <h1 className='font-serif font-semibold'>Attractive Locations for
                        Travel</h1>
                        <p className='text-center w-64 mx-auto'>The various reasons for travel include, tourism and leisure chiton, travel for information gathering, travel for people on vacation, volunteering for donors, migration to other residences.</p>
                </div>
                <div  className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                    {
                        dataes.map(datae => <HomeItem
                            key={datae._id}
                            datae={datae}
                        ></HomeItem>)
                    }

                </div>
            </div>
            <div className='m-5 flex justify-center'>
                <Link to={'/services'} className='btn btn-outline bg-fuchsia-200'>See All</Link>
            </div>
        </div>
    );
};

export default Home;