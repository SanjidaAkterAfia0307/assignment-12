import React from 'react';
import Categories from '../Categories/Categories';
import HomeBanner from '../HomeBanner/HomeBanner';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';

const Home = () => {
    return (
        <div className='w-3/4 mx-auto space-y-36'>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
            
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;