import React from 'react';
import logo from "../../../public/assets/Logo.png";
import { FaHeart } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import FreshSalad from "../../../public/assets/banner/two.png"
import Arrow from "../../../public/assets/banner/one.png"
import App from "../../../public/assets/banner/appstore.png"
import google from "../../../public/assets/banner/googleplay.png"
import girl from "../../../public/assets/banner/girl.png"
import leaf from "../../../public/assets/banner/leaf.png"

const Banner = () => {
    // Array of nav links with title and URL
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop' },
        { name: 'Services', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    return (
        <div className='banner py-10 bg-halkablue'>
            <div className='max-w-container mx-auto'>
                {/* Navbar Start */}
                <div className='flex justify-between items-center'>

                    <img src={logo} alt="Logo" className='w-48' />

                    {/* Navbar Links */}
                    <div className="flex gap-x-16">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-base font-questrial-regular text-halkagreen relative group"
                            >
                                {link.name}
                                <span
                                    className="absolute inset-x-0 top-5 h-0.5 bg-halkagreen transform -translate-y-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                                ></span>
                            </a>
                        ))}
                    </div>
                    {/* Navbar Links */}

                    {/* Item with Icons and Button */}
                    <div className='flex items-center gap-x-4 text-base font-questrial-regular'>

                        <div className='flex items-center gap-x-2 cursor-pointer'>
                            <FaHeart className='text-white' />
                            <p className='text-white'>Favorites</p>
                        </div>

                        <div className='flex items-center gap-x-2 cursor-pointer'>
                            <IoCartSharp className='text-white text-xl' />
                            <p className='text-white'>Cart</p>
                        </div>

                        <button className='text-white border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-halkagreen transition-colors duration-300'>
                            Sign in
                        </button>

                    </div>

                </div>
                {/* Navbar End */}
 
           
                 <div className='flex '>
                        {/* Banner Start  one Here */}
                        <div className='mt-24 w-[55%]'>

                            <h5 className="font-rubik-medium text-xl font-medium text-halkagreen px-4 py-2 inline-block bg-halkagreen/10 rounded-xl mb-5">Welcome to Fresh Harvest</h5>
                            <h1 className='font-rubik-medium text-80 text-black1 max-w-660 leading-tight'>Fresh Fruits and Vegetables</h1>
                            <p className='font-questrial-regular text-sm text-black2 leading-6 max-w-478 mt-4'>At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>

                            <button className='font-rubik-semibold text-base  px-5 rounded-xl py-2 mt-3 bg-orange text-white'>Shop Now</button>

                            {/* Image Part Start */}
                            <div className='relative'>   

                                <img src={ FreshSalad} alt=""  className='ml-[164px]'/>

                                <img src={Arrow} alt="" className='absolute top-0 left-24 w-[40px]' />
                            </div>   
                            {/* Image Part End */}

                            <div>
                                <p className='font-questrial-regular text-sm  text-black2'> Download App:</p>

                                <div className='flex gap-x-3 mt-3'>
                                    <img src={App} alt="" />
                                    <img src={google} alt="" />
                                </div>
                            </div>

                        </div>
                        {/* Banner Start one Here */}
                        {/* Banner Start two Here */}
                        <div className=' w-[45%] mt-[10px]  relative top-[35px] bottom-0'>
                          <img src={girl} alt="" className='w-[1190px] h-[700px] absolute '/>
                        </div>


                 </div> 
                   

            </div>
        </div>
    );
};

export default Banner;
