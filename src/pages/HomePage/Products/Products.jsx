import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../component/AuthProvider/AuthProvider';
import Product from './product';

const Products = () => {
    const {theme}=useContext(AuthContext)
    const [products,setProducts]=useState([])
    useEffect(() => {
        fetch("https://equi-sports-server-eight.vercel.app/product-six")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div className='flex flex-col justify-center md:my-16 my-6 container mx-auto'>


            <h2 className={`section-title text-center md:text-4xl text-2xl font-bold pb-6   ${theme == "dark" ? "text-white" : "text-[#272a33]"}`}>Trending Sports Accessories</h2>

            <div className='md:pt-16 pt-8 grid md:grid-cols-3 gap-7'>
              {
                    products.map((product ,index)=><Product product={product} key={index}></Product>)
              }
            </div>


            
        </div>
    );
};

export default Products;