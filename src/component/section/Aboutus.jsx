import React from 'react';
import About from "../../../public/assets/about/Aboutus.png"
import SectionHeader from '../layout/SectionHeader';
import Button from '../layout/Button';


const Aboutus = () => {
    return (
        <div className='max-w-container mx-auto mb-32 '>
            
           <div className='flex justify-between '>
             
              {/*========== This is Image part ===========*/}
              <div className='w-[50%]'>
                 <img src={About} alt="" />
              </div>
              {/* This is Image part */}


              {/* ==========This is description part ======*/}
              <div className='w-[50%] flex flex-col justify-center items-center'>

               <SectionHeader
                    title="About us"
                    subtitle="About Fresh Harvest"
                    description="Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience."
                    desclass="font-questriasl-regular text-sm text-black2 mx-auto max-w-458 leading-6"
                />
                 
                 <div className="-ml-[330px] text-left mt-4 "> {/* Ensures full width alignment and adds spacing */}
                   <Button text="Read More" />
                 </div>

              </div>

              
              {/* ==========This is description part ======*/}

           </div>


        </div>
    );
};

export default Aboutus;