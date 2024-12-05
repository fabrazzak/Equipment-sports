import React from 'react';

const Product = ({ product }) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body gap-4">
                    <h2 className="card-title">
                      Name: {product.itemName}
                    </h2>

                    <h4 className='text-lg font-semibold'>Product Price : {product.price}</h4>

                    <div className="card-actions ">
                        <div className=" btn btn-primary border-0 border-b-4  hover:border-b-0 border-[#272a33] text-white bg-[#146c43] hover:bg-[#146c43] ">View Details</div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;