import React from 'react';
import ReviewSlider from './ReviewSlider';

const Testimonial = () => {
    return (
        <div className='container mx-auto md:w-10/12 py-10'>

            <h2 className='section-title text-center md:text-4xl text-2xl font-bold pb-6'>Testimonial</h2>

           <div className='md:pt-10 pt-6'>
                <ReviewSlider></ReviewSlider>
           </div>
            
        </div>
    );
};

export default Testimonial;