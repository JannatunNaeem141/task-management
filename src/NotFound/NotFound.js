import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div style={{ color: "#F2E7FE" }} className='mx-5 lg:mx-0 md:mx-0'>
                <img src="https://i.ibb.co/d7BzbQy/how-to-find-and-fix-404-errors-in-wordpress.png" alt="" />
                <p className='text-center lg:text-4xl md:text-3xl text-3xl mt-5 mb-3'> Page not found</p>
                <p className='text-center'>Sorry, the page you are looking for is not found. Please, make sure you have typed the correct URL</p>
            </div>
        </div>
    );
};

export default NotFound;