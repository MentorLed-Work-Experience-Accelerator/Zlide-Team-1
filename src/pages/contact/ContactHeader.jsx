import React from 'react'

export default function Header() {
  return (
    <div id='heder' className='max-w-[1240px] w-full'>
        <div className='md:bg-gradient-to-r md:from-[#115] md:from-8.95% md:via-[#017] md:via-49.12% md:to-violet-800 md:to-887.71% bg-gradient-to-br from-[#115] from-2% via-[#017] via-20% to-violet-800 to-60% w-full absolute  top-0 z-[-30] md:h-[409px] max-h-[498px]'>
            <div className='max-w-[1440px] w-full h-full justify-center items-center m-auto text-center md:pt-[13em] pt-32' style={{backgroundImage: 'url(/images/footer.png)', backgroundRepeat: 'repeat', backgroundSize: 'contain', backgroundPosition: 'right left',}}>
            <p className='md:text-[54px] text-2xl tracking-wide font-primaryBold mb-[20px] text-center text-white'>Contact Us</p>
            {/* <h2 className=' text-white font-primaryRegular text-[20px] pt-[18px]'></h2> */}
           

            </div>
            </div>


    </div>
  )
}
