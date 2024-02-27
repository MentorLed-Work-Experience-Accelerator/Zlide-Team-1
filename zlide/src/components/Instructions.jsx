import React from 'react'

export default function Instructions() {
  return (
    <div id='instructions' className='max-w-[1240px] m-auto md:pl-20 p-4 py-16 flex md:flex-row flex-col md:space-x-3 space-y-4'>
    <div className='space-y-4 max-w-[700px] border-l-4 border-[#dcf] space-x-6  rounded-t rounded-b'>
        <div className='border-l-4 border-[#50c] rounded-t rounded-b space-x-4'>
        <h2 className='font-primaryMedium text-xl text-[#50c] px-7'>Easy to Use</h2>
        <p className='font-primaryRegular text-[17px] px-3 leading-[35px] '>Our webapp is designed to be user-friendly, allowing you to create stunning presentations with ease. No technical skills required!</p>
        
        </div>

        <h2 className='font-primaryMedium text-xl'>Customisation Options</h2>
        <p className='font-primaryRegular text-[17px]'>
Tailor your presentations to match your brand and style. With our webapp, you have full control over fonts, colors, layouts, and more.
         </p>
         
        <h2 className='font-primaryMedium text-xl'>Fast Generations</h2>
        <p className='font-primaryRegular text-[17px]'>Say goodbye to hours spent on creating presentations. Our webapp uses AI technology to generate slides quickly and efficiently.</p>
    </div>

    <div>
     <img src="/images/undraw_website_builder_re_ii6e 1.png" alt="pics" width={533} height={335} className='h-full'/>
    </div>
    </div>
  )
}
