import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Category from './Category';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:7000/categories')
            .then(res => res.json())
    })
    return (
        <div>
            <h2 className='text-primary text-4xl font-semibold text-center my-16'>Choose Your Own Genre</h2>
        <div className='grid grid-cols-1  lg:grid-cols-3 gap-10'>
            {
                categories.map(category=> <Category key={category._id} category={category}></Category>)

            }
        </div>
        </div>
    );
};

export default Categories;