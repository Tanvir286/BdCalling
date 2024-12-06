// Card.jsx
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ imageSrc, date, title, titleClass }) => {
  return (
    <div className='w-1/3'>
      <img src={imageSrc} alt={title || "Blog card image"} />
      <p className='font-questrial-regular text-base text-black2 mt-4'>{date}</p>
      <p className={`font-rubik-medium text-base text-black1 ${titleClass}`}>{title}</p>
      <div className='flex items-center gap-x-3 mt-1 hover:underline hover:decoration-orange cursor-pointer'>
        <p className='font-rubik-medium text-base text-orange'>Read More</p>
        <FaArrowRight className='text-orange' />
      </div>
    </div>
  );
};

export default BlogCard;
