import React from 'react';
import { useLoaderData } from 'react-router';
import TableCollum from './TableCollum';

const AllSportsEquipment = () => {
    const products = useLoaderData();
    console.log(products)

   
   

    return (
        <div className='container mx-auto'>
            <h2 className='section-title text-center md:text-4xl text-2xl font-bold py-10'>All Sports Equipment</h2>

            <div className="overflow-x-auto py-10 md:w-8/12 mx-auto">
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