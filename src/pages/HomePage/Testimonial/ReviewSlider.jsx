import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonial';


import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

// import required modules
import { Pagination } from 'swiper/modules';


const ReviewSlider = () => {
    const [reviews,setReviews]=useState([]);
     useEffect(()=>{
         fetch("https://equi-sports-server-eight.vercel.app/review")
        .then(res => res.json())
        .then(data => setReviews(data))
     },[])
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide>
                        

                        <div className="card bg-base-100  shadow-2xl border border-[#146c43]">                            
                            <div className="p-8 flex flex-col gap-6">                               
                                
                                <p>{review.reviewText}</p>
                                <div className='flex gap-6 content-center items-center '>
                                    <div className='w-24 h-24'><img className='rounded-full w-24 h-24' src={review.avatar} alt="" /></div>
                                  
                                    <div className='flex flex-col gap-4'>
                                        <h2 className="card-title">{review.customerName}</h2>
                                        <div className='flex gap-2 '>
                                            <p className='font-bold '> Rating: {review.ratingStars}</p>
                                            <Rating name="read-only" value={review.ratingStars} readOnly />
                                        </div>
                                        
                                        </div>
                                   
                                    
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
                
            </Swiper>
            
        </div>
    );
};

export default ReviewSlider;