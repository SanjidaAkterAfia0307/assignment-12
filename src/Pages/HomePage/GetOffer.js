import React from 'react';
import offer from '../../assets/GettyImages-949118068-1600x1068.jpg';
const GetOffer = () => {
    return (
        <div className='flex gap-10 flex-col md:flex-row mb-20'>
            <div>
                <img src={offer} className="rounded-2xl" alt="" />
            </div>
            <div>
                <h3 className='text-4xl font-bold pb-6 text-primary'>Get 50% off!</h3>
                <p className='text-lg'>Today, we are offering 50% discount on the books.If you don't wanna miss the chance, just pick your phone and order a your choicable books!</p>
                <div className='my-16'>
                    <button className='btn bg-primary border-none text-white '>Get The Offer</button>
                </div>
            </div>
        </div>
    );
};

export default GetOffer;