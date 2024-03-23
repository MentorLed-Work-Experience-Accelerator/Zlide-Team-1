import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div id='navbar' className='max-w-[1240px] mx-auto w-full h-[100px] flex justify-between p-8 items-center relative bg-transparent z-20'>
        <div>
          <img src="/images/Zlide Logo.png" alt="zlide-logo" width={80} height={12} className='relative md:left-10 left-3 w-[102px] h-[32px]' />  
        </div>

        <ul className='flex space-x-10 text-white text-[17px] tracking-wider font-primaryThin '>
            <li className='flex items-center space-x-1'><a href='/'>Products</a><span><MdKeyboardArrowDown /></span></li>
            <li className='flex items-center space-x-1 font-primaryThin'><a href='/'>Templates</a><span><MdKeyboardArrowDown /></span></li>
            <li className='flex items-center space-x-1 font-primaryThin'><a href='/faq'>Pricing</a><span><MdKeyboardArrowDown /></span></li>
           
         </ul>

         <div className='space-x-4 relative right-[1%] items-center'>
            <button className='bg-[#fd4] w-[88px] h-[50px] text-black rounded-lg text-[15px] font-primaryRegular'><Link to="/login">Login</Link></button>
            <button className='bg-white text-black  w-[88px] h-[50px] rounded-lg text-[15px] font-primaryRegular'><Link to="/signup">Signup</Link></button>
            
         </div>

    </div>
  )
}
