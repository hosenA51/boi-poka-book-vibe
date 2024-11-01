import React from 'react';
import BannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
                <img
                    src={BannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-[56px] font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] font-bold text-white mt-12">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;