import React from 'react';
import errorImg from "../../assets/404-error-page-header-transparent.webp"
import { Helmet } from 'react-helmet-async';

const FourOFour = () => {
    return (
        <div className='md:h-[70vh] flex flex-col justify-center items-center'>
            <Helmet>
                <title> Page Not Found | Canada Career Counselling</title>
            </Helmet>
            <div className="card bg-base-100    mx-auto">
                <figure>
                    <img className='h-96'
                        src={errorImg}
                        alt="Shoes" />
                </figure>
                <h2 className='text-5xl font-bold text-center'>Page not found</h2>

            </div>


        </div>
    );
};

export default FourOFour;