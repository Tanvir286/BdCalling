import React, { useState, useEffect } from 'react';
import Image from "../../../public/assets/offer/offerTwo.png"

const Offer = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 18,
        minutes: 54,
        seconds: 21,
    });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3); // Example: 3 days from now
        targetDate.setHours(targetDate.getHours() + 18); // Example: Add 18 hours
        targetDate.setMinutes(targetDate.getMinutes() + 54); // Example: Add 54 minutes
        targetDate.setSeconds(targetDate.getSeconds() + 21); // Example: Add 21 seconds

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className='add py-120 '>
            <div className='max-w-container mx-auto relative'>
                {/* header one */}
                <div className='font-rubik-medium text-xl font-medium text-halkagreen px-8 py-2 inline-block bg-halkagreen/20 rounded-xl mb-5'>
                    Special Offers
                </div>
                {/* header one */}
                {/* sub header start */}
                <h2 className='font-rubik-medium text-80 text-black1'>Seasonal Fruit Bundle</h2>
                {/* sub header end */}
                {/* discount */}
                <p className='font-rubik-medium text-5xl text-black1'>
                    Discount up to <span className='text-orange'>80% OFF</span>
                </p>
                {/* Box  */}
                <div className='flex mt-5 gap-x-4'>
                    {/* one */}
                    <div className='px-4 py-2 bg-white'>
                        <p className='font-rubik-regular text-40 text-black1'>{timeLeft.days}</p>
                        <p className='font-questrial-regular text-lg text-black2'>Days</p>
                    </div>
                    {/* two */}
                    <div className='px-4 py-2 bg-white'>
                        <p className='font-rubik-regular text-40 text-black1'>{timeLeft.hours}</p>
                        <p className='font-questrial-regular text-lg text-black2'>Hours</p>
                    </div>
                    {/* three */}
                    <div className='px-4 py-2 bg-white'>
                        <p className='font-rubik-regular text-40 text-black1'>{timeLeft.minutes}</p>
                        <p className='font-questrial-regular text-lg text-black2'>Minutes</p>
                    </div>
                    {/* four */}
                    <div className='px-4 py-2 bg-white'>
                        <p className='font-rubik-regular text-40 text-black1'>{timeLeft.seconds}</p>
                        <p className='font-questrial-regular text-lg text-black2'>Seconds</p>
                    </div>
                </div>
                {/* Box */}
                {/* coupon */}
                <div className='mt-10'>
                    <p className='font-rubik-semibold text-32 rounded-full text-white bg-[#176D38] px-5 py-2 inline-block'>
                        CODE:<span className='text-orange'> FRUIT28</span>
                    </p>
                </div>
                   
                <img src={Image} alt="" className='absolute -right-[170px] top-[68px]' />

            </div>
             
             {/* Image set */}

        </div>
    );
};

export default Offer;
