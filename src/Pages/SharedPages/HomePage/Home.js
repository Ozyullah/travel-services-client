import React, { useEffect, useState } from 'react';
import img1 from "../../../assets/flybridge.jpg"
import img2 from "../../../assets/travelimg.jpg"
import img3 from "../../../assets/travelMohastan.png"
import img4 from "../../../assets/cleanPic.png"
import { Link, useLoaderData } from 'react-router-dom';
import HomeItem from './HomeItems/HomeItem';
import useTitle from '../../../hooks/useTitle';
import './Home.css'


const Home = () => {

    const dataes = useLoaderData()
    console.log(dataes)

    useTitle('Home')

    return (
        <div >
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

            {/* optional card section */}
            <div className='bodyCard' id='cardItem'>
                <h3 className='font-semibold text-4xl text-center p-20'>Discover The World</h3>


                <div className='grid md:grid-cols-4 lg:grid-cols-6 gap-5'>
                    <div className=" image-full">
                        <img className='rounded-xl h-40' src="https://thefinancialexpress.com.bd/public/uploads/1623685867.jpg" alt="car!" />

                    </div>
                    <div className=" image-full">
                        <img className='rounded-xl h-40' src="https://thumbor.bigedition.com/sydney-opera-house/WC10wVtQEImDSv3RDFtzyAKEwGY=/800x0/filters:quality(80)/granite-web-prod/ca/1f/ca1f9fe650954918bb5b53fd47958764.jpeg" alt="car!" />

                    </div>
                    <div className="image-full">
                        <img className='rounded-xl h-40' src="https://www.travelandleisure.com/thmb/caqJem_7_utGpxx-KYEFu2rjtpk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201411-w-worlds-most-visited-tourist-attractions-great-wall-of-china-badaling-2000-8fb75adf709246a0a0c3d6bbf9787fba.jpg" alt="car!" />

                    </div>
                    <div className="image-full">
                        <img className='rounded-xl h-40' src="https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Kuakata.jpg" alt="car!" />

                    </div>
                    <div className="image-full">
                        <img className='rounded-xl h-40' src="https://www.travelandleisure.com/thmb/b2-ee45Q1DEjuzOa51XLhJ7Rfmc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-wall-china-tourists-GWOC0417-10bddbf0783644c386178f62117b2132.jpg" alt="car!" />

                    </div>
                    <div className="image-full">
                        <img className='rounded-xl h-40' src="https://deih43ym53wif.cloudfront.net/blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg" alt="car!" />

                    </div>
                </div>
            </div>
            {/* optional card section end */}

            {/* HomePage Card section started */}
            <div className='bodyCard'>
                <div>
                    <div className='text-center mx-auto mt-10 mb-10'>
                        <h1 className='font-serif font-semibold'>Attractive Locations for
                            Travel</h1>
                        <p className='text-center mx-auto'>The various reasons for travel include, tourism and leisure chiton, travel for information gathering, travel for people on vacation, volunteering for donors, migration to other residences.</p>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10'>
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
        </div>
    );
};

export default Home;