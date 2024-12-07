import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-xl p-5">
                <figure>
                    <img className='w-52 h-52  object-cover'
                        src={product?.image}
                        alt="Shoes" />
                    
                </figure>
                <div className="card-body gap-4">
                    <h2 className="card-title">
                      Name: {product.itemName}
                    </h2>

                    <h4 className='text-lg font-semibold'>Product Price : {product.price}</h4>

                    <div className="card-actions ">
                        <Link to={`all-sports/${product._id}`}>
                        <div className=" btn btn-primary border-0 border-b-4  hover:border-b-0 border-[#272a33] text-white bg-[#146c43] hover:bg-[#146c43] ">View Details</div>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;