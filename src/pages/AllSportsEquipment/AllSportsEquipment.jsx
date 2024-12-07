import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TableCollum from './TableCollum';
import { Helmet } from 'react-helmet-async';

const AllSportsEquipment = () => {
    const data = useLoaderData();
    const [products,setProducts]=useState([...data])
    console.log(products)


    const handleSortByPrice=()=>{
      

        fetch(' https://equi-sports-server-eight.vercel.app/products?sort=true')
        .then(res => res.json())
        .then(data => setProducts(data))                

    }

   
   

    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>All sports Equipment | Equipment Sports </title>

            </Helmet> 
            <h2 className='section-title text-center md:text-4xl text-2xl font-bold py-10'>All Sports Equipment</h2>          

            
                <div className='py-6'>
                <button onClick={handleSortByPrice} className='btn btn-outline text-right float-end  '>Sort By Price</button>  
                
                </div>        



            <div className="overflow-x-auto py-10 md:w-8/12 w-full md:mx-auto px-5">
                <table className="table  table-zebra border  border-collapse">
                    <thead>
                        <tr >
                            <th></th>
                            <th >Name </th>
                            <th >Category  </th>
                            <th >Price </th>
                            <th >View details  Button </th>

                        </tr>
                    </thead>
                    <tbody>
                       {
                            products.map((product, index) => <TableCollum  product={product} index={index} key={product._id} ></TableCollum>)
                       }

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default AllSportsEquipment;