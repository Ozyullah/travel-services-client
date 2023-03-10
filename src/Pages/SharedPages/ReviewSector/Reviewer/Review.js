import React, { useContext } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
import { TravelContext } from '../../../../ContextPage/AuthContext';

const Review = () => {

    const { user } = useContext(TravelContext)
    const { name, img, _id} = useLoaderData();
    console.log(_id)

    const handleReviews = event => {
        if(!user){
            toast.error('Please at first Login then write review')
            return(false)
        }
        event.preventDefault(); 
        const form = event.target;
        const name1 = `${form.firstName.value} ${form.lastName.value}`;
        const massage = form.massage.value;
        const email = user?.email
        const photo = user?.photoURL

        form.reset('')

      
        const review = {
            name: name1,
            service_id: _id,
            massage: massage,
            email,
            photo,
            service_name:name,
            img

        }


        fetch('http://localhost:5000/reviews',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    toast.success('Review Succesfully added')
                }
            })

    }
    return (
        <div className='review-section'>
            <div className=' w-96 mx-auto'>
                <div>
                    <div className='flex justify-center mt-8'>
                        <img className=' w-32 rounded-md' src={img} alt="" />
                    </div>
                    <h4 className='text-center m-4'>Name: {name}</h4>
                </div>
                <form action="" onSubmit={handleReviews}>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5 ml-9'>
                        <input type="text" name='firstName' placeholder="Enter firstname" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='lastName' placeholder="Enter Lastname" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" value={user?.photoURL} className="input input-bordered w-full max-w-xs" readOnly />
                        <input type="email" placeholder="Type here" value={user?.email} className="input input-bordered w-full max-w-xs" readOnly />

                        <textarea name='massage' className="textarea textarea-bordered h-20 w-44" placeholder="Write Your Opinion" required></textarea>
                    </div>
                    <button className='w-80 btn btn-outline mt-5 ml-9'>Submite</button>
                </form>
            </div>

            <Link to={'/services'} className='btn btn-outline border-gray-300 m-5 px-6'><BiArrowBack/><Toaster/></Link>
        </div>
    );
};

export default Review;