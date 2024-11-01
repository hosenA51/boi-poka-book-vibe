import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();
    // Ideally we will directly get the read book list from the database

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        // worst way

        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, [])
    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        // worst way

        console.log(storedWishList, storedWishListInt, allBooks);

        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));

        setWishList(wishBookList);

    }, []);

    const handleSort = sortType =>{
        setSort(sortType);

        if(sortType === 'Number of pages'){
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }
        if(sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);
        }
    }

    return (
        <div>
            <h3 className='text-3xl my-3'>Listed Books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">{sort ? `Sort by: ${sort}` : 'Sort by'}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=> handleSort('Number of pages')}><a>Number of pages</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read: {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>Add to Wish List: {wishList.length}</h2>
                    {
                        wishList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;