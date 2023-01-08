import React from 'react';
import img1 from "../../../assets/flybridge.jpg"
import img2 from "../../../assets/travelimg.jpg"
import img3 from "../../../assets/travelMohastan.png"
import img4 from "../../../assets/cleanPic.png"


const Home = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full h-48">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} className="w-full h-56" />
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
            <div className="card w-96 glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;