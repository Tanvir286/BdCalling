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


const Navbar = () => {
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Shop', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Contact', href: '#' }
    ];
    return (
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
            {/* Item with Icons and Button */}

            </div>
            {/* Navbar End */}
        </div>
    );
};

export default Navbar;