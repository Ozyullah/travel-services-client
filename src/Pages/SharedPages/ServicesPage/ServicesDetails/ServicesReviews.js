import React from 'react';

const ServicesReviews = ({ aime }) => {
    const {email, name, massage, photo}=aime;
    return (
            <tr className='flex justify-between items-center bg-slate-200 p-5 rounded-xl'>
                <td>
                    <div className="flex items-center space-x-3 ml-10  mt-5">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td className='mr-10'>
                    {massage}
                </td>
            </tr>
    );
};

export default ServicesReviews;