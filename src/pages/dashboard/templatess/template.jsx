import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa"
import All from './All'



export default function template() {
    const navs = [
        {name: "All Templates", link: "/template"},
        {name: "Business", link: "/business"},
        {name: "eCommerce", link: "/template"},
        {name: "Fashion", link: "/template"},
        {name: "Health", link: "/template"},
        {name: "Logistics", link: "/template"},
        
    ]


    
  return (
    <div className='max-w-[1240px]'>
        <div className='flex items-center w-full'>
            <div><h2 className='font-primaryMedium text-[26px] pl-[20px] mt-[2em]'>Template</h2></div>

            <div className='flex gap-1 mt-[3.5em] justify-end'>
            <Link to="/">
                <button className='flex items-center gap-2 border-2 rounded-lg px-5 py-1 border-[#115]'>
                    <span  className='font-primaryRegular text-[15px]  bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-80% via-[#017] via-60% to-violet-800 to-99% '>Create new zlide</span>
                    <span  className='text-[#115] text-[10px]'><FaPlus /></span>
                </button>
            </Link>
                
                <Link>
                <button className='bg-[#fd6] px-5 py-1 rounded-lg'>
                    <span className='font-primaryRegular text-[15px]  bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-80% via-[#017] via-60% to-violet-800 to-99% '>Upgrade</span>
                </button>
                </Link>
            </div>
        </div>

        <div className='mt-[40px]'>
            <input type="search" name="search" id="search" className='text-base w-full h-[43px] border-gray-300 border-[2px] rounded-lg shadow-sm' placeholder='Enter your search' />
        </div>


        <div className='flex gap-7 mt-[18px]'>
          {navs.map((nav, index) => (
            <Link to={nav.link} key={index} className='cursor-pointer'>
            <p className='font-primaryRegular text-[14px] text-gray-500'>{nav.name}</p>
            </Link>
          ))}
        </div>

        
        <div>
            <All />
            {/* <Work /> */}
        </div>
       
    </div>
  )
}
