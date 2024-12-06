
import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router';

const SingleCard = ({ product }) => {
    const { categoryName, customization, description, image, itemName, price,processingTime, rating, stockStatus, _id } = product;
    console.log(product)

    return (
        <div>


            <div className="card bg-base-100 md:w-96 shadow-xl py-5">
                <figure>
                    <img
                        src={image}
                        alt="product" className='object-cover ' />
                </figure>
                <div className=" flex flex-col text-left px-10 gap-5 mb-6">
                    <h2 className="font-bold text-2xl mt-4">

                        Name: {itemName}
                    </h2>
                    <p className='font-bold'>Price: {price} $</p>
                                <p className='font-bold'>Category: {categoryName}</p>
                                <p className='font-bold'> Processing Time: {processingTime}</p>
                                <p className='font-bold'> Customization: {customization}</p>
                    <p className='flex gap-5 font-bold'>Rating:  <Rating name="read-only" value={rating} readOnly /></p>
                                <p className='font-bold'>Stock:  {stockStatus}</p>
                                <p className=''>Description: {description.slice(0,100)} .........</p>

                    <div className="card-actions justify-between">
                        <Link to={`${_id}`}> <button className='font-bold btn text-white hover:bg-[#146c43] bg-[#146c43]'>Update</button></Link>
                        <button onClick={()=>handleDelete(_id)} className='font-bold btn text-white hover:bg-[#dc3545] bg-[#dc3545]'>Delete</button>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default SingleCard;