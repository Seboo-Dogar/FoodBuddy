import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


export default function Category() {
  return (
    <>
        <div className='max-w-[1200px] mx-auto'>
            <div className='my-3 items-center justify-between flex'>
              <div className='text-2xl font-bold text-sky-950'>What's on your mind</div>
              <div className='flex'>
                <div className='flex items-center justify-center text-sky-950 w-8 h-8 bg-gray-300 rounded-full mx-2 cursor-pointer'><FaArrowLeft /></div>
                <div className='flex items-center justify-center text-sky-950 w-8 h-8 bg-gray-300 rounded-full mx-2 cursor-pointer'><FaArrowRight /></div>
              </div>
            </div>
        </div>
    </>
  )
}
