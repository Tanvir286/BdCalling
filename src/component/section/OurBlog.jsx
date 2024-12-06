import React from 'react';
import SectionHeader from '../layout/SectionHeader';
import one from "../../../public/assets/blog/blogone.png"
import two from "../../../public/assets/blog/blogtwo.png"
import three from "../../../public/assets/blog/blogthree.png"
import BlogCard from '../layout/BlogCard';

const OurBlog = () => {
    return (
        <div className='max-w-container mx-auto mb-120'>
             {/*==========Header Part start================== */}
             <div className='text-center'>
                <SectionHeader
                    title="Our Blog"
                    subtitle="Fresh Harvest Blog"
                    description="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
                    desclass="font-questriasl-regular  text-black2 mx-auto max-w-529"
                />
            </div>
            {/* ==========Header Part end ==============*/}
            {/* ==========blog Part end ==============*/}
            <div className='flex justify-between mt-8'>
      
               <BlogCard
                imageSrc={one}
                date="May 23, 2024"
                title="Exploring Seasonal Delights: A Guide to What's Fresh Right Now"
               />

                <BlogCard
                    imageSrc={two}
                    date="May 23, 2024"
                    title="Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"
                />

                <BlogCard
                    imageSrc={three}
                    date="May 23, 2024"
                    title="The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week"
                    titleClass="mr-9"
                 /> 
               

            </div>


        </div>
    );
};

export default OurBlog;