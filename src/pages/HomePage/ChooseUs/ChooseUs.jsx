import React, { useContext } from 'react';
import img from "../../../assets/choose-us.jpg"
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from '../../../component/AuthProvider/AuthProvider';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/choose.json";




const ChooseUs = () => {
    const { products, theme } = useContext(AuthContext)
    return (
       
        <div className='container mx-auto md:w-10/12 py-10'>
            <Fade direction="left" delay={500} duration={2000} cascade damping={0.3}>
                
           
               
           

                <h2 className={`section-title text-center md:text-4xl text-2xl font-bold pb-6   ${theme == "dark" ? "text-white" : "text-[#272a33]"}`}>Why Choose Us </h2>

            <div className='md:pt-10 pt-6 grid md:grid-cols-2 gap-8'>
                <div className='bg-white rounded-lg shadow-xl'>                    
                        <Lottie className='object-cover h-96' animationData={groovyWalkAnimation} />;
                </div>
                <div>                    

                    <div className="card bg-base-100  shadow-xl h-full">
                        <h2 className='section-title text-center md:text-2xl text-xl font-bold pb-6'>Why Shop with EquiSports?</h2>
                       
                        <div className="card-bod p-10">
                           
                             
                            <ul className='flex flex-col gap-5 md:text-2xl'>
                                <li className='font-bold list-disc '>High-Quality Products</li>
                                <li className='font-bold list-disc '>Affordable Prices</li>
                                <li className='font-bold list-disc '>Fast Delivery Worldwide</li>
                                <li className='font-bold list-disc '>Customer-Centric Support</li>
                                <li className='font-bold list-disc '>Secure Payments</li>
                              
                                   
                               
                            </ul>                        
                            
                            
                        </div>
                    </div>


                </div>
              
            </div>
            </Fade>
           

        </div>
        
    );
};

export default ChooseUs;