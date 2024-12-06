import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { AuthContext } from '../../component/AuthProvider/AuthProvider';
import SingleCard from './singleCard';


const MyEquipment = () => {
    const { user}=useContext(AuthContext)
    const [products, setProducts] = useState([])
    const userEmail=user?.email;

    console.log(products)



    useEffect(() => {
        fetch(`http://localhost:5000/my-product/${userEmail}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []) 

   
    console.log(products, `http://localhost:5000/my-product/${userEmail}`)


    return (
        <div>

            <div className="hero bg-base-200  py-10">
                <div className="hero-content text-center">
                    <div className="">
                        <h2 className='section-title text-center md:text-4xl text-2xl font-bold pb-10 mb-10 '>My Equipment </h2>
                   <div className='grid md:grid-cols-3 gap-6'>
                            {
                                products.map((product, index) => <SingleCard product={product} key={index}></SingleCard>)
                            }
                   </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyEquipment;