import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EquipmentViewDetails = () => {
    const {id}=useParams()
    const [product,setProduct]=useState([])


    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res =>res.json())
        .then(data => setProduct(data))
    },[])

    const { category, customization, description, image, name, price, proccesing, rating, stock, _id } = product;
    console.log(product)


    return (
        <div>
            
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="">
                        <h2 className='section-title text-center md:text-4xl text-2xl font-bold pb-10 mb-10 '>Equipment Details</h2>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={image}
                                    alt="product" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                   
                                    {name}
                                </h2>
                                <p>{price}</p>
                                <p>{category}</p>
                                <p>{category}</p>
                                <p>{customization}</p>
                                <p>{rating}</p>
                                <p>{stock}</p>
                                <p>{description}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default EquipmentViewDetails;