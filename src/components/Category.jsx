import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


export default function Category() {
  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    setCategory(data.slice(0, 15));
  }

  useEffect(
    () => {
      fetchCategory();
    }, []
  )
  
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
            <div className='flex overflow-hidden'>
              {
                categories.map(
                  (c, index) => {
                    return (
                      <div key = {index} className='w-[150px] mx-2 flex-shrink-0'>
                        <img src={c.url} alt={c.title} />
                      </div>
                    )
                  }
                )
              }
            </div>
        </div>
    </>
  )
}
