import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const books=useLoaderData()
    console.log(books)
    return (
        <div className='grid grid-cols-2 gap-20 w-3/4 mx-auto my-12'>
            {
                books.map(book=><Book book={book} key={book._id}></Book>)
            }
        </div>
    );
};

export default Books;