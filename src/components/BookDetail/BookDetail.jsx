import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utility/addToDb';

const BookDetail = () => {

    const { bookId } = useParams();

    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image, tags, bookName, author, category, totalPages, rating, review, publisher, yearOfPublishing } = book;

    const handleRead = (id) => {
        /**
         * 1. Understand what to store or save: => bookId
         * 2. where to store: database
         * 3. array, list, collection: 
         * 4. check: if the book is already in the readList.
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book
         */

        addToStoredReadList(id);
    }
    const handleWishList = (id) => {
        /**
         * 1. Understand what to store or save: => bookId
         * 2. where to store: database
         * 3. array, list, collection: 
         * 4. check: if the book is already in the readList.
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book
         */

        addToStoredWishList(id);
    }

    return (
        <div className="card lg:card-side flex my-20">
            <figure className='bg-[#F3F3F3] p-[74px] rounded-2xl flex-1'>
                <img
                    src={image}
                    className='lg:h-[500px] lg:w-[350px] rounded-xl'
                    alt="book image" />
            </figure>
            <div className="card-body flex-1 p-0 ml-8">
                <h2 className="card-title text-[40px] font-bold mb-3">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-xl font-medium'>By: {author}</p>
                <div className="border-t-2 mb-2"></div>
                <div className='text-xl font-medium mb-2'>{category}</div>
                <div className="border-t-2 mb-3"></div>
                <p className='mb-4'><span className='text-xl font-bold'>Review:</span><small className='text-sm'>{review}</small></p>
                <div className='flex justify-start gap-4 mb-2'>
                    <p className='text-lg font-bold'>Tag</p>
                    {
                        tags.map((tag, index) => <button
                            key={index} className="btn btn-sm text-[#23BE0A]">{tag}</button>)
                    }
                </div>
                <div className="border-t-2 mb-2"></div>
                <div className='flex gap-14 mb-4'>
                    <div className='text-lg text-[#131313B3] space-y-2'>
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className='text-lg font-bold space-y-2'>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <button onClick={()=> handleRead(bookId)} className="btn btn-outline btn-accent font-semibold text-black px-4">Read</button>
                    <button onClick={()=> handleWishList(bookId)} className="btn bg-[#50B1C9] font-semibold text-white px-6">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;