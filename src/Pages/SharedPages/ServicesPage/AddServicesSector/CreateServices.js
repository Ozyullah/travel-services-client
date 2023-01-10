import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import './createdServices.css'

const CreateServices = () => {
    const handleServicesAdd=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const img =form.image.value;
        const price=form.price.value;
        const facility=form.facility.value;
        const descriptions=form.details.value;

        form.reset('')

        const service={
            name:name,
            img:img,
            price:price,
            facility:facility,
            descriptions:descriptions
        }


        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(service)
        }
        )
        .then(res =>res.json())
        .then(fact =>{
            console.log(fact)

            if(fact.acknowledged){
               return toast.success('Services succesfully added')
            }
        })

    }
    return (
        <div className='formBody'>
            <form className='intoForm' action="" onSubmit={handleServicesAdd}>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5'>
                        <input type="text" name='name' placeholder="Enter ServiceName" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='image' placeholder="Enter ImageUrl" className="input input-bordered w-full max-w-xs" required/>
                        <input type="text" name='price' placeholder="Enter Price" className="input input-bordered w-full max-w-xs" required/>
                        <input type="text" name='facility' placeholder="Enter Facility"  className="input input-bordered w-full max-w-xs" required/>

                        <textarea name='details' className="textarea textarea-bordered h-24" placeholder="Write a Descriptions" required></textarea>
                    </div>
                    <button className='w-full btn btn-outline m-5'>Submite<Toaster/></button>
                </form>
        </div>
    );
};

export default CreateServices;