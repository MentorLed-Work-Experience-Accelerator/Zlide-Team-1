import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'

export default function Pricing2() {
  return (
    <div className='max-w-[1240px] mx-auto'>
          <div className='flex md:flex-row flex-col pt-12 text-center md:space-x-10 space-x-0 md:space-y-0 space-y-10 max-w-[900px] mx-auto'>
                <div>
                <ul className='border border-[#101] rounded-lg p-8 max-w-[259px] h-full mx-auto'>
                <li className='text-[18px] font-primaryRegular'>Free Plan</li>
                <li className='text-[42px] font-primaryBold pt-4'>$0/mos</li>
                <li className='pt-7 font-primaryRegular flex flex-col items-center'>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-[#50c] ' /></span>
                    <span className='text-[15px]'>Easy-to-use interface</span>
                    </span>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-[#50c] ' /></span>
                    <span className='text-[15px]'>Easy-to-use interface</span>
                    </span>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-[#50c] ' /></span>
                    <span className='text-[15px]'>Easy-to-use interface</span>
                    </span>
                </li>
                <li className='h-full mt-[120px]'><button className='text-center font-primaryThin text-white py-[15px] px-[14px] tracking-wider bg-gradient-to-l from-indigo-950 via-blue-900 to-violet-800 rounded-lg text-sm'>Get Started</button></li>
               </ul>
                </div>


                <div>
                <ul className='bg-gradient-to-l from-indigo-950 via-blue-900 to-violet-800 rounded-lg p-8 max-w-[260px] h-full text-white tracking-wider mx-auto'>
                <li className='text-[18px] font-primaryRegular'>Basic Plan</li>
                <li className='text-[42px] font-primaryBold pt-4'>$7/mos</li>
                <li className='pt-7 font-primaryRegular flex flex-col items-center'>
                  <span className='flex gap-[2px] items-center'>
                    <span><IoIosCheckmark className='text-white' /></span>
                    <span className='text-[13px]'>Easy-to-use interface</span>
                    </span>
                  <span className='flex gap-[2px] items-center'>
                    <span><IoIosCheckmark className='text-white' /></span>
                    <span className='text-[13px]'>Easy-to-use interface</span>
                    </span>
                  <span className='flex gap-[2px] items-center'>
                    <span><IoIosCheckmark className='text-white' /></span>
                    <span className='text-[13px]'>Easy-to-use interface</span>
                    </span>
                </li>
                <li className='h-full mt-[120px]'><button className='text-center font-primaryRegular py-[15px] px-[16px] tracking-wider bg-white rounded-lg text-sm'><span className=' text-transparent bg-clip-text 
                bg-gradient-to-r from-[#115] from-12.95% via-[#017] via-29.12% to-violet-800 to-75%'>Get Started</span></button></li>
               </ul>
                </div>


                <div>
                <ul className='border border-[#101] rounded-lg p-8 max-w-[259px] h-full mx-auto'>
                <li className='text-[18px] font-primaryRegular'>Professional Plan</li>
                <li className='text-[42px] font-primaryBold pt-4'>$17/mos</li>
                <li className='pt-7 font-primaryRegular flex flex-col items-center'>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-[#50c] ' /></span>
                    <span className='text-[15px]'>Easy-to-use interface</span>
                    </span>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-[#50c] ' /></span>
                    <span className='text-[15px]'>Easy-to-use interface</span>
                    </span>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-[#50c] ' /></span>
                    <span className='text-[15px]'>Easy-to-use interface</span>
                    </span>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-[#50c] ' /></span>
                    <span className='text-[15px]'>Easy-to-use interface</span>
                    </span>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-[#50c] ' /></span>
                    <span className='text-[15px]'>Easy-to-use interface</span>
                    </span>
                </li>
                <li className='h-full mt-[57px]'><button className='text-center font-primaryThin text-white py-[15px] px-[14px] tracking-wider bg-gradient-to-l from-indigo-950 via-blue-900 to-violet-800 rounded-lg text-sm'>Get Started</button></li>
               </ul>
                </div>

    </div>

    <h2 className='font-primaryRegular text-[18px] mr-[50px] text-center pt-9'>*Price billed annually, minimum of 2 users</h2>

    </div>
  )
}
