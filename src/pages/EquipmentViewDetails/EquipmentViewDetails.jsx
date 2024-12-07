import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';



const EquipmentViewDetails = () => {
    const {id}=useParams()
    const [product,setProduct]=useState([])


    useEffect(()=>{
        fetch(`https://equi-sports-server-eight.vercel.app/products/${id}`)
        .then(res =>res.json())
        .then(data => setProduct(data))
    },[])

    const { categoryName, customization, description, image, itemName, price, processingTime, rating, stockStatus, _id } = product;
    console.log(product)


    return (
        <div>
            
            <div className="hero bg-base-200 min-h-screen ">
                <Helmet>
                    <title>Veiw Details | Equipment Sports </title>

                </Helmet> 
                <div className="hero-content text-center">
                    <div className="">
                        <h2 className='section-title text-center md:text-4xl text-2xl font-bold pb-10 mb-10 '>Equipment Details</h2>
                        <div className="card bg-base-100 md:w-96 shadow-xl py-6">
                            <figure>
                                <img
                                    src={image}
                                    alt="product" />
                            </figure>
                            <div className=" flex flex-col text-left px-10 gap-5 mb-6">
                                <h2 className="font-bold text-2xl">
                                   
                                   Item Name: {itemName}
                                </h2>
                                <p className='font-bold'>Price: {price} $</p>
                                <p className='font-bold'>Category: {categoryName}</p>
                                <p className='font-bold'> Processing Time: {processingTime}</p>
                                <p className='font-bold'> Customization: {customization}</p>  
                                {rating && <Rating name="read-only" value={rating} readOnly />}                             
                                <p className='font-bold'>Stock:  {stockStatus} </p>
                                <p className=''><span className='font-bold'>Description: </span>  {description}</p>
                               
                               
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default EquipmentViewDetails;