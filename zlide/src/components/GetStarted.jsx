import React from 'react'

const steps = [
    {
      text1: 'Step 1: Input your Text Prompt',
      text2: 'Easily input text prompt into Zlide',  
      src: './images/img1.png',
    },
    {
      text1: 'Step 2: Customise Your Design',
      text2: 'Choose from a variety of professionally designed templates and customise them to fit your brand.', 
      src: './images/img3.png',

    },
    {
      text1: 'Step 3: Export and Present',
      text2: 'Export your presentation as a PowerPoint file and deliver a stunning presentation.', 
      src: './images/img2.png',

    },
]

export default function GetStarted() {
  return (
    <div id='started' className='max-w-[1140px] mx-auto md:pt-[28em] md:mt-[4em] mt-[19em]'>
      <div className='relative'>
      <h1 className='font-primaryMedium text-center md:text-3xl text-xl bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-12.95% via-[#017] via-29.12% to-violet-800 to-75% '>Create Stunning Presentations With Ease</h1>
        <p className='max-w-[650px] font-primaryRegular text-[16px] text-center m-auto py-2'>Zlide is the revolutionary software that simplifies the process of creating visually compelling PowerPoint presentations. With the power of AI, Zlide converts your textual data into well-structured slides, saving you time and effort.</p>
      </div>

      <div className='py-12 flex md:flex-row flex-col gap-7 max-w-[1240px]'>
        <div>
          <img src="/images/img1.png" alt="pmg1" className='w-[597px] h-[290px]'/>
          <h2 className='max-w-[200px] font-primaryMedium text-center md:text-2xl text-2xl py-2 mx-auto'>Step 1: Input your Text prompt</h2>
          <p className='max-w-[650px] font-primaryRegular text-[15px] text-center m-auto py-1 w-full mx-auto'>Easily input text prompt into Zlide</p>
        </div>
        <div>
          <img src="/images/img3.png" alt="pmg3" className='w-[597px] h-[290px]' />
          <h2 className='max-w-[250px] font-primaryMedium text-center md:text-2xl text-2xl py-2 mx-auto'>Step 2: Customise Your Design </h2>
          <p className='max-w-[450px] font-primaryRegular text-[15px] text-center m-auto py-1 w-full mx-auto leading-[22px]'>Choose from a variety of professionally designed templates and customise them to fit your brand.</p>
        </div>
        <div>
          <img src="/images/img2.png" alt="pmg2" className='w-[597px] h-[290px]' />
          <h2 className='max-w-[250px] font-primaryMedium text-center md:text-2xl text-2xl py-2 mx-auto'>Step 3: Export and Present</h2>
          <p className='max-w-[450px] font-primaryRegular text-[15px] text-center m-auto py-1 w-full leading-[22px]'>Export your presentation as a PowerPoint file and deliver a stunning presentation.</p>
        </div>
    {/* {steps.map((step, index) => (
        <ul key={index} className='md:space-x-4 space-x-0 md:space-y-0 space-y-4'>
            <li className=''><img src={step.src} alt="pic" width={397} height={220} className='w-[357px] h-[200px]'/></li>
            <li className='max-w-[300px] font-primaryMedium text-center md:text-2xl text-2xl py-2'>{step.text1}</li>
            <li className='max-w-[650px] font-primaryRegular text-[15px] text-center m-auto py-1'>{step.text2}</li>
            
        </ul>
    ))} */}
      </div>

      <div className='text-center'>
        <button className='text-center font-primaryThin text-white py-3 px-4 tracking-wider bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-800 rounded text-sm'>Get Started</button>
      </div>
    </div>
  )
}
