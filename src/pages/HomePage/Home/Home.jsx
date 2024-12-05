import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../Slider/Slider';
import Products from '../Products/Products';
import Categories from '../Categories/Categories';
import Testimonial from '../Testimonial/Testimonial';
import ChooseUs from '../ChooseUs/ChooseUs';
import img from '../../../assets/bg-home.jpg'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Equipment Sports </title>
               
            </Helmet>           
            
                 <Slider></Slider>
                <Products></Products>
                <Categories></Categories>
                <Testimonial></Testimonial>
                <ChooseUs></ChooseUs>
            
            
        </div>
    );
};

export default Home;