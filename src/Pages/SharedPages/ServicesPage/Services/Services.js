import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesItems from '../ServicesItems/ServicesItems';

const Services = () => {

    const items =useLoaderData()
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {
                items.map(item =><ServicesItems
                    key={item._id}
                    item={item}
                    ></ServicesItems>)
            }
        </div>
    );
};

export default Services;