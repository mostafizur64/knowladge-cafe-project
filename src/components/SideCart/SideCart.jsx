import React, { useState } from 'react';
const SideCart = ({ spentTime, bookTitle }) => {
  return (
    <div className='sticky top-0'>
      <div className='border border-indigo-600 bg-indigo-50 rounded-lg w-[100%] lg:px-10 lg:py-7 m-2'>
        <h2 className='text-purple-700'>Spent time on read : {spentTime} min</h2>
      </div>
      <div className='bg-gray-100 border rounded-lg w-full lg:px-10 lg:py-7 m-2'>
        <h1 className='text-lg font-semibold'>Bookmarked Blogs : {bookTitle.length}</h1>
        <div className='text-black mt-4 rounded-lg' >
          {
            bookTitle.map((book) =>
              <div className='m-2 p-3 rounded-lg  bg-white w-full mx-auto  mt-4'>
                <h1 className='text-black'>{book} !</h1>
              </div>

            )}

        </div>

      </div>


    </div>
  );
};

export default SideCart;