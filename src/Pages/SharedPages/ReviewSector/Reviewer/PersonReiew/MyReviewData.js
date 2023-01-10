import React from 'react';

const MyReviewData = ({ check }) => {
    const {img, massage, service_name}=check;
    return (
        <div>
            <table className="table w-full mt-10">
                    <tbody>
                        <tr className='flex justify-between'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex justify-start space-x-3 ">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service_name}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td className='mr-10'>
                                {massage}
                               
                            </td>
                            <td>
                                <button className='btn btn-outline pt-0'>Edite</button>
                            </td>
                            <td>
                                <button className='btn btn-outline pt-0'>Delete</button>
                            </td>

                        </tr>
                        
                        
                    </tbody>
                </table>
        </div>
    );
};

export default MyReviewData;