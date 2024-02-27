import React from 'react'

export default function BlogHeader() {
  return (
    <div id='heder'>
        <div className='bg-gradient-to-br from-[#fd4] from-10% via-[#fea] to-[#ec4] w-full h-[95vh] absolute top-0 '>
            <div className='max-w-[1040px] w-full h-full justify-center items-center m-auto text-center pt-[9em]'>
            <h2 className='md:text-[80px] text-3xl tracking-wide font-primaryBold text-black'>See our stories,</h2>
            <h2 className='md:text-[80px] text-3xl tracking-wide font-primaryBold text-black md:py-16 py-4'>thoughts and ideas</h2>
            <p className='text-[15px] text-black tracking-widest font-primaryMedium'>Subscribe to learn about our new product and the latest trends in presenting and updates.</p>
            <div className='py-7 text-center'>
            <input type="text" name="create" id="create" placeholder='Email Address' className='max-w-[200px] md:w-full  p-2 rounded-lg shadow-2xl' />
            </div>

            <div className='py-1 text-center'>
                <button className='bg-[#50c] text-white py-[16px] px-[32px] rounded-lg text-[15px] font-primaryThin tracking-wider text-center'>Suscribe</button>
            </div>
        </div>
            </div>


    </div>
  )
}
