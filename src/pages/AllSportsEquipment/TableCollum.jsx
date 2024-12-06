import React from 'react';
import { Link } from 'react-router';

const TableCollum = ({ product, index }) => {
    const { category, customization, description, image, name, price, proccesing, rating, stock, _id } = product
    return (
        
            <tr>
                <th>{index + 1}</th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={image}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td><h3 className='font-bold'>{category}</h3></td>
                <td><h3 className='font-bold'>{price}</h3></td>
            <td > <Link to={`${_id}`}><button className='font-bold btn text-white hover:bg-[#146c43] bg-[#146c43]'>View Details</button></Link></td>

            </tr>
            
        
    );
};

export default TableCollum;