import React from 'react'
import { FaStar } from "react-icons/fa"
import { GoDotFill } from "react-icons/go";
import { PiArrowCircleLeft } from "react-icons/pi"

export default function Comment() {
  return (
    <div className='pt-[2em]'>
      <div className='bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-800 h-full'>
         <div className='max-w-[1164px] m-auto md:pl-20 p-4 py-20 w-full'>
         <div className='flex text-[#fd4] space-x-2 justify-center pr-[30px]'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>

        <div className='max-w-[900px] text-center justify-center items-center text-xl text-white font-primaryThin m-auto gap-[32px] py-7 text-[16px] tracking-wider'>
        <p className='font-primaryThin text-[17px] tracking-widest '>I've always struggled with creating visually stunning presentations that captivate my audience. Thanks to this AI-powered platform, I can now turn my ideas into polished slideshows effortlessly. It's a game-changer for my marketing presentations!</p>
        <p className='pt-9 pb-1 font-primaryMedium text-[15px] tracking-widest'>Zuckerberg Temitope</p>
        <p className='pb-7 text-[#fd4] font-primaryRegular text-[15px]'>Project manager | Facebook</p>
        </div>
         </div>

         <div className='flex justify-center text-[16px] space-x-3 md:pl-[60px] pt-[-19px]'>
            <span className='text-[#fd4]'><GoDotFill /></span>
           <span className='text-white'> <GoDotFill /></span>
            <span className='text-white'><GoDotFill /></span>
         </div>

      </div>
    </div>
  )
}
