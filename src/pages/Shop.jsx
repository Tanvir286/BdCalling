import React from 'react';
import Navbar from '../component/section/Navbar';
import logo from "../../public/assets/Logo.png";
import { FaHeart } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import OurProduct from '../component/section/OurProduct';
import OurShop from '../component/section/OurShop';

const Shop = () => {
 
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Shop', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    return (

        <>

            <div className='max-w-container mx-auto'>

                {/* Navbar Start */}
                <div className='flex justify-between items-center py-4'>

                    <img src={logo} alt="Logo" className='w-48' />

                    {/* Navbar Links */}
                    <div className="flex gap-x-16">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-base font-questrial-regular text-black relative group"
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
                            <FaHeart className='text-halkagreen' />
                            <p className='text-halkagreen'>Favorites</p>
                        </div>

                        <div className='flex items-center gap-x-2 cursor-pointer'>
                            <IoCartSharp className='text-halkagreen text-xl' />
                            <p className='text-halkagreen'>Cart</p>
                        </div>

                        <button className='text-black border border-black px-4 py-2 rounded-xl '>
                            Sign in
                        </button>

                    </div>

                </div>
                {/* Navbar End */}

            </div>

             <hr /> 

            <OurShop/>

        </>

        
    );
};

export default Shop;