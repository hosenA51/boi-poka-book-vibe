import React from 'react';

const Book = ({ book }) => {

    const { image, bookName, author, tags, category, rating } = book;

    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6 border">
            <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt={bookName} />
            </figure>
            <div className="card-body space-y-3">
                <div className='flex justify-start gap-4'>
                    {
                        tags.map(tag => <button className="btn btn-xs text-[#23BE0A]">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="border-t-2 border-dashed"></div>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className='flex gap-2'>
                        <p>{rating}</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;