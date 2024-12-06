import React from 'react';
import Banner from './../component/section/Banner';
import OurProduct from './../component/section/OurProduct';
import Aboutus from './../component/section/Aboutus';
import Offer from './../component/section/Offer';
import Testimonial from './../component/section/Testimonial';
import OurBlog from './../component/section/OurBlog';
import Footer from './../component/section/Footer';
import Navbar from './../component/section/Navbar';

const Home = () => {
    return (
        <>
           
           <Banner/>
           <OurProduct/>
           <Aboutus/>
           <Offer/>       
           <Testimonial/>
           <OurBlog/>
           <Footer/> 
         
           
        </>
    );
};

export default Home;