import React from 'react';
import { GiBookshelf } from "react-icons/gi";
const AboutUs = () => {
    return (
        <div className='text-center my-36 shadow-lg rounded-xl md:p-20 bg-secondary text-slate-700'>
                <div className='flex items-center justify-center'>
                    
                        <GiBookshelf className="w-32 h-32  text-primary"></GiBookshelf>
                    
                    <h2 className='text-5xl ml-5 font-bold'>About Us</h2>
                </div>
                <div className='lg:w-1/2 md:mx-auto px-4 py-6 md:text-justify'>
                    <p className='text-xl font-medium '></p>
                </div>
            </div>
    );
};

export default AboutUs;