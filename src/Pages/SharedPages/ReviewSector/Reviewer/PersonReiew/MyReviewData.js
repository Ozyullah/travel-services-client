import React from 'react';
import { Toaster } from 'react-hot-toast';

const MyReviewData = ({ check, handleDelete,handleUpdateData }) => {
    const { img, massage, service_name, _id } = check;
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
                            <label onClick={()=>handleUpdateData(_id)} htmlFor="my-modal-6" className="btn">open modal</label>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(_id)} className='btn btn-outline pt-0'>Delete <Toaster /></button>
                        </td>

                    </tr>


                </tbody>
            </table>

        </div>
    );
};

export default MyReviewData;