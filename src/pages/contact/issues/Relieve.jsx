import React from 'react'

export default function Relieve() {
  return (
    <div className='max-w-[1000px] mx-auto'>
         <div className='max-w-[900] w-full'>
                <div className='p-5 max-w-[900px] m-auto'>
                <h2 className='font-primaryMedium text-[32px] text-center'>Trouble logging in?</h2>
                <p className='font-primaryRegular pt-[10px]  text-[15px] text-gray-600 text-center m-auto max-w-[840px]'>Please contact our support team for assistance</p>
                </div>

                <div className='max-w-[879px] m-auto'>
                 <div>
                 <p className='ml-3 font-primaryRegular'>Name</p>
                <input type="search" name="search" id="search"  className='p-4 rounded-lg w-full bg-gray-200 mt-1'/>
                 </div>

                 <div className='mt-6'>
                 <p className='ml-3 font-primaryRegular'>Email Address</p>
                <input type="search" name="search" id="search"  className='p-4 rounded-lg w-full bg-gray-200 mt-1'/>
                 </div>

                 <div className='mt-6'>
                 <p className='ml-3 font-primaryRegular'>Your Message</p>
                 <textarea name="text" id="text" cols="111" rows="10" className='bg-gray-200 rounded-lg mt-1'></textarea>
                {/* <input type="search" name="search" id="search"  className='py-16 rounded-lg w-full bg-gray-200 mt-1'/> */}
                 </div>

                 <button className='bg-[#fd4] text-center text-[15px] p-4 rounded-lg mt-10 w-full font-primaryRegular text-[#115]'>Send message</button>
                </div>
         </div>
    </div>
  )
}
