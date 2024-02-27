import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'

const prices = [
  {
    plan: 'Free Plan',
    price: '$0/mo',
    bonus: [
      "Easy-to-use interface",
      "Easy-to-use interface",
      "Easy-to-use interface",
    ],
    start: 'Get Started',
  },
  {
    plan: 'Basic Plan',
    price: '$9/mo',
    bonus: [
      "Easy-to-use interface",
      "Easy-to-use interface",
      "Easy-to-use interface",
    ],
    start: 'Get Started',
  },
  {
    plan: 'Professional Plan',
    price: '$19/mo',
    bonus: [
      "Easy-to-use interface",
      "Easy-to-use interface",
      "Easy-to-use interface",
      "Easy-to-use interface",
      "Easy-to-use interface",
    ],
    start: 'Get Started',
  },
]

export default function Pricing() {
  return (
    <div className='max-w-[1240px] w-full m-auto md:pl-20 p-4 py-16 pt-[7em]'>
        <div className='justify-center items-center'>
            <h1 className='font-primaryMedium text-center text-[30px] tracking-wider'>Flexible Pricing</h1>
            <p className='text-center font-primaryRegular text-[18px] pt-2'>Take your presentations to the next level with our AI-powered webapp.</p>
             </div>

             <div className='text-center pt-14 space-x-1'>
              <button className='bg-[#101] p-[10px] rounded-lg font-primaryRegular text-[16px] tracking-widest text-white'>Monthly</button>
              <button className='border-2 border-black p-[10px] rounded-lg text-[16px] tracking-widest font-primaryRegular'>Yearly</button>
             </div>


             <div className='flex md:flex-row flex-col pt-12 text-center md:space-x-10 space-x-0 md:space-y-0 space-y-10 max-h-[450px] max-w-[900px] h-full m-auto justify-center'>
                <div>
                <ul className='border-2 border-[#101] rounded-lg p-8 max-w-[259px] max-h-[568px]'>
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
                <ul className='border-2 border-[#101] bg-gradient-to-l from-indigo-950 via-blue-900 to-violet-800 rounded-lg p-8 max-w-[260px] max-h-[568px] text-white tracking-wider'>
                <li className='text-[18px] font-primaryRegular'>Basic Plan</li>
                <li className='text-[42px] font-primaryBold pt-4'>$9/mos</li>
                <li className='pt-7 font-primaryRegular flex flex-col items-center'>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-white' /></span>
                    <span className='text-[13px]'>Easy-to-use interface</span>
                    </span>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-white' /></span>
                    <span className='text-[13px]'>Easy-to-use interface</span>
                    </span>
                  <span className='flex gap-1 items-center'>
                    <span><IoIosCheckmark className='text-white' /></span>
                    <span className='text-[13px]'>Easy-to-use interface</span>
                    </span>
                </li>
                <li className='h-full mt-[120px]'><button className='text-center font-primaryRegular text-[#115] py-[15px] px-[16px] tracking-wider bg-white rounded-lg text-sm'>Get Started</button></li>
               </ul>
                </div>


                <div>
                <ul className='border-2 border-[#101] rounded-lg p-8 max-w-[259px] max-h-[444px]'>
                <li className='text-[18px] font-primaryRegular'>Professional Plan</li>
                <li className='text-[42px] font-primaryBold pt-4'>$19/mos</li>
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
                <li className='h-full mt-[57px]'><button className='text-center font-primaryRegular text-white py-[15px] px-[14px] tracking-wider bg-gradient-to-l from-indigo-950 via-blue-900 to-violet-800 rounded-lg text-sm'>Get Started</button></li>
               </ul>
                </div>
             
             </div>
    </div>
  )
}

{/* <ul key={index}  className=' border-2 border-[#101] rounded-lg p-8'>
<li className='text-[18px] font-primaryRegular'>{price.plan}</li>
<li className='text-[42px] font-primaryBold pt-4'>{price.price}</li>
<li className='pt-6 font-primaryRegular'>

   <section key={index} className='flex items-center space-x-2'>
    <span><IoIosCheckmark className='text-[#50c]' /></span>
    <span className='text-[15px]'>{para}</span>


</li>
<li className='pt-[108px] '>
<button className='text-center font-primaryThin text-white py-3 px-4 tracking-wider bg-gradient-to-l from-indigo-950 via-blue-900 to-violet-800 rounded text-sm'>{price.start}</button>
</li> */}