import React from 'react';
import logo from "../../../public/assets/Logo.png"
import logo2 from "../../../public/assets/footer/play.png"
import visa from "../../../public/assets/footer/Visa.png"
import paypal from "../../../public/assets/footer/Paypal.png"
import apple from "../../../public/assets/footer/ApplePay.png"
import emoji from "../../../public/assets/footer/1.png"
import emoji2 from "../../../public/assets/footer/2.png"
import emoji3 from "../../../public/assets/footer/3.png"
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    return (

        <div className='bg-white1'>
            <div className='max-w-container mx-auto py-10'> 
             {/* all element  */}
             <div className='flex justify-between border-b-2 pb-8'>

                {/* part one  start*/}
                <div>
                   <img src={logo} alt="" className='w-48' />
                   <img src={logo2} alt=""  className='cursor-pointer mt-115'/>
                </div>
                {/* part one  end*/}


                {/* part two  start*/}
                <div className=''>
                    <h3 className='font-rubik-medium text-lg text-black1'>Quicks links</h3>
                    <ul className='mt-4'> 
                        <li className='text-black2 font-questrial-regular text-sm  mb-2'>Home</li>
                        <li className='text-black2 font-questrial-regular text-sm mb-2'>Shop</li>
                        <li className='text-black2 font-questrial-regular text-sm mb-2'>About us</li>
                        <li className='text-black2 font-questrial-regular text-sm mb-2'>Blog</li>
                        <li className='text-black2 font-questrial-regular text-sm mb-2'>Detail Blog</li>
                    </ul>
                   
                </div>
                {/* part two  end*/}


                {/* part three  start*/}
                <div className=''>
                    <h3 className='font-rubik-medium text-lg text-black1'>Quicks links 2</h3>
                    <ul className='mt-4'>
                        <li className='text-black2 font-questrial-regular text-sm mb-2'>Favorites</li>
                        <li className='text-black2 font-questrial-regular text-sm mb-2'>Cart</li>
                        <li className='text-black2 font-questrial-regular text-sm mb-2'>Sign in</li>
                        <li className='text-black2 font-questrial-regular text-sm mb-2'>Register</li>
                    </ul>
                   
                </div>
                {/* part three  end*/}


                {/* part four  start*/}
                <div className=''>
                    <h3 className='font-rubik-medium text-lg text-black1'>Contact us</h3>
                     {/* ul list start */}
                    <ul className='mt-4'>
                        {/* one */}
                        <div className='flex items-center gap-x-2 mb-2'>
                          <MdLocalPhone />
                          <li className='text-black2 font-questrial-regular text-sm'>1234 5678 90</li>
                        </div>
                        {/* two */}
                        <div className='flex items-center gap-x-2 mb-2'>
                          <MdOutlineMailOutline />
                          <li className='text-black2 font-questrial-regular text-sm'>Freshharvests@gmail.com</li>
                        </div>
                        {/* three */}
                        <div className='flex items-center gap-x-2'>
                          <IoLocationOutline />
                          <li className='text-black2 font-questrial-regular text-sm'>Tanjung Sari Street, Pontianak, Indonesia</li>
                        </div>                       
                    </ul>
                    {/* ul list end */}

                    <p className='font-rubik-medium text-xs mt-3'>Accepted Payment Methods:</p>

                    <div className='flex gap-x-2 mt-5'>

                        <img src={visa} alt=""  className='cursor-pointer'/>
                        <img src={paypal} alt="" className='cursor-pointer' />
                        <img src={apple} alt="" className='cursor-pointer'/>

                    </div>

                   
                </div>
                {/* part four  end*/}

             </div>
             {/* all element  */}

             {/* Footer last part */}
              <div className='flex justify-between mt-5 items-center'>
                 <p className='font-rubik-medium text-sm text-black1'>© Copyright 2024, All Rights Reserved by Banana Studio</p>
                   
                  <div className='flex gap-x-3'>
                      <img src={emoji}  className='cursor-pointer' />
                      <img src={emoji2} className='cursor-pointer' />
                      <img src={emoji3} className='cursor-pointer' />
                  </div> 
                 

              </div>

             
            </div>
        </div>
     
    );
};

export default Footer;