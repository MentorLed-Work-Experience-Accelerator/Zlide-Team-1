import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function BlogNav() {
  return (
    <div id='navbar' className='w-full h-[100px] flex justify-between p-8 items-center relative bg-transparent z-20'>
        <div>
          {/* <img src="" alt="" />   */}
        </div>

        <ul className='flex space-x-10 text-white text-[17px] tracking-wider font-primaryThin '>
            <li className='flex items-center space-x-1'><a href='/'>Products</a><span><MdKeyboardArrowDown /></span></li>
            <li className='flex items-center space-x-1 font-primaryThin'><a href='/'>Templates</a><span><MdKeyboardArrowDown /></span></li>
            <li className='flex items-center space-x-1 font-primaryThin'><a href='/'>Pricing</a><span><MdKeyboardArrowDown /></span></li>
           
         </ul>

         <div className='space-x-4 relative right-[10%] items-center'>
            <button className='bg-black text-white py-[15px] px-[20px] rounded-lg text-[15px] font-primaryThin'>Login</button>
            <button className='bg-white text-black py-[8px] px-[20px] rounded-lg text-[15px] font-primaryRegular'>Signup</button>
            
         </div>

    </div>
  )
}
