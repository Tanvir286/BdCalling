import React from 'react';
import SectionHeader from './../layout/SectionHeader';
import TestOne from "../../../public/assets/Testimonial.png";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialComponent from './Testimonial'; // Ensure you import this correctly.

const TestimonialSlider = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="max-w-container mx-auto py-150">
            {/* Header */}
            <div className="text-center mb-5">
                <SectionHeader
                    title="Testimonial"
                    subtitle="What Our Customers Say"
                    description="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"
                    desclass="font-questriasl-regular text-base text-black2 mx-auto max-w-538"
                />
            </div>

            {/* Slider */}
            <Slider {...sliderSettings} className='px-28 custom-dots'>
                <div>
                    <img src={TestOne} alt="Testimonial 1" />
                </div>
                <div>
                    <img src={TestOne} alt="Testimonial 2" />
                </div>
                <div>
                    <img src={TestOne} alt="Testimonial 3" />
                </div>
            </Slider>
        </div>
    );
};

export default TestimonialSlider;
