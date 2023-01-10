import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const ServicesReviews = ({ aime }) => {
    const { name, photo, massage } = aime;

    return (
        <div>
            <tbody className='flex justify-between items-center'>
                <tr className=''>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={photo} />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{name}</div>
                            
                            </div>
                        </div>
                    </td>

                </tr>

                <td className=' mr-12'>
                        {massage}
                    </td>
            </tbody>
        </div>
    );
};

export default ServicesReviews;