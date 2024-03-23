import React from 'react'

export default function WorkedWith() {
  return (
   <aside className='pt-[8em]'>
     <div className='max-w-[1240px] mx-auto w-full'>
        <h1 className='text-center font-primaryRegular text-[20px]'>Trusted by industry-leading companies worldwide</h1>
        
        <div className='flex flex-row md:space-x-14 space-x-5 justify-center mt-10 items-center max-w-[1240px] w-full'>
            <img src="/images/hsbc_logo.svg.png" alt="logo" className='md:w-[150px] w-[50px] md:h-[40.5px] h-[16px] items-center' />
            <img src="/images/tesla_logo.svg.png" alt="logo" className='md:w-[150px] w-[50px] md:h-[15.5px] h-[5px]' />
            <img src="/images/Logo.png" alt="logo" className='md:w-[181px] w-[50px] md:h-[24px] h-[10px]' />
            <img src="/images/slack_logo.svg.png" alt="logo" className='md:w-[150px] w-[50px] md:h-[61.5px] h-[20px]' />
            <img src="/images/Univelcity_logo.png" alt="logo" className='md:w-[184px] w-[50px] md:h-[41px] h-[14px]' />
           
        </div>
    </div>
   </aside>
  )
}
