import React from 'react';
import Categories from '../Categories/Categories';
import HomeBanner from '../HomeBanner/HomeBanner';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import { useQuery } from '@tanstack/react-query';
import Contact from '../Contact';

const Home = () => {
    const { data: books = [] } = useQuery({
        queryKey: ['books'],
        queryFn: () => fetch('https://assignment-12-server-sanjidaakterafia0307.vercel.app/booksAd')
            .then(res => res.json())
    })
    if(books.length<=0){
        return(
            <div className='md:w-3/4 w-full p-5 mx-auto space-y-36'>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
        )
    }
    return (
        <div className='md:w-3/4 w-full p-5 mx-auto space-y-36'>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
            <AdvertiseItems></AdvertiseItems>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;