import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './Slider.css';

import slider1 from '../../../assets/slider-1.jpg'
import slider2 from '../../../assets//slider-2.png'
import slider3 from '../../../assets/slider-3.jpg'
import slider4 from '../../../assets/slider-4.webp'
import { AuthContext } from '../../../component/AuthProvider/AuthProvider';


const Slider = () => {
    const {  theme } = useContext(AuthContext)
    return (
        <div className='text-black z-0'>
           
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper z-0"
                >
                <SwiperSlide>
                    
                    <div
                        className="hero "
                        style={{
                            backgroundImage: `url(${slider1})`,
                            backgroundSize:"cover",
                            backgroundRepeat:"no-repeat",
                            backgroundPosition:"center"
                        }}>
                        <div className={`hero-overlay  ${theme == "dark" ? " bg-opacity-60" : " bg-opacity-0"} `}></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="md:py-72 py-40 ">
                                <h1 className="mb-5 md:text-5xl text-3xl font-bold">Gear Up for Victory <br /> Find Your Perfect Sports Companion!</h1>
                               
                                <button className="btn btn-primary border-0 border-b-4 hover:border-b-0 border-white text-white bg-[#146c43] hover:bg-[#146c43]">Shop Now</button>
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                 <SwiperSlide>
                    
                    <div
                        className="hero "
                        style={{
                            backgroundImage: `url(${slider2})`,
                            backgroundSize:"cover",
                            backgroundRepeat:"no-repeat",
                            backgroundPosition:"center"
                        }}>
                        <div className={`hero-overlay  ${theme == "dark" ? " bg-opacity-60" : " bg-opacity-0"} `}></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="md:py-72 py-40">
                                <h1 className="mb-5 md:text-5xl text-3xl font-bold">Explore Accessories for Every Sport <br></br> Browse Now!</h1>
                               
                                <button className="btn btn-primary border-0 border-b-4  hover:border-b-0 border-white text-white bg-[#146c43] hover:bg-[#146c43]">Discover More</button>
                            </div>
                        </div>
                    </div>


                </SwiperSlide>

                 <SwiperSlide>
                    
                    <div
                        className="hero "
                        style={{
                            backgroundImage: `url(${slider3})`,
                            backgroundSize:"cover",
                            backgroundRepeat:"no-repeat",
                            backgroundPosition:"center"
                        }}>
                        <div className={`hero-overlay  ${theme == "dark" ? " bg-opacity-60" : " bg-opacity-0"} `}></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="md:py-72 py-40">
                                <h1 className="mb-5 md:text-5xl text-3xl font-bold">Quality and Affordability  <br></br> Only at EquiSports!</h1>
                               
                                <button className="btn btn-primary border-0 border-b-4 hover:border-b-0 border-white  text-white bg-[#146c43] hover:bg-[#146c43]">Get Started</button>
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
               
               
            </Swiper>
            
        </div>
    );
};

export default Slider;