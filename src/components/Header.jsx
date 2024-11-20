import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { TbRosetteDiscount } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true)
  }

  const hidesideMenu = () => {
    setToggle(false)
  }

  const navItems = [
    {
      icon: <IoSearch />,
      name: "Search"
    },
    {
      icon: <TbRosetteDiscount />,
      name: "Deals"
    },
    {
      icon: <FaRegUserCircle />,
      name: "Sign In"
    },
    {
      icon: <MdOutlineShoppingCart />,
      name: "Cart"
    }
  ]

  return (
    <>
      <div className='overlay w-full h-full fixed duration-500' style={{opacity: toggle ? 1 : 0, visibility: toggle ? "visible": "hidden"}} onClick={hidesideMenu}>
        <div className='w-3/12 h-full bg-white absolute duration-[600ms]' style={{left: toggle ? '0%' : '-100%'}} onClick={(e)=>{e.stopPropagation()}}></div>
      </div>
      <header className='p-3 shadow-xl text-slate-500'>
        <div className='max-w-[1200px] mx-auto flex items-center'>
          <div className='w-[80px]'>
            <img src="images/logo2.png" alt="FoodBuddy" className='w-full' />
          </div>
          <div className='px-6'>
            <span className='font-bold border-b-4 text-sky-950 border-sky-950'>Khudiyan</span> Kasur, Punjab, Pakistan <RxCaretDown className='inline text-[25px] text-sky-950' onClick={showSideMenu} />
          </div>
          <nav className='flex list-none gap-10 ml-auto'>
            {
              navItems.map(
                (navItem, index) => {
                  return <li key={index} className='flex gap-2 items-center font-semibold hover:text-sky-950'>
                    {navItem.icon}
                    {navItem.name}
                  </li>
                }
              )
            }
          </nav>
        </div>
      </header>
    </>
  )
}
