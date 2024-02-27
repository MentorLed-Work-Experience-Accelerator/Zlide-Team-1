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
    <div id='started' className='max-w-[1240px] m-auto md:pl-20 p-4 py-16 md:pt-[29em] pt-[21em]'>
      <div className=''>
      <h1 className='font-primaryMedium text-center md:text-3xl text-xl'>Create Stunning Presentations With Ease</h1>
        <p className='max-w-[650px] font-primaryRegular text-[16px] text-center m-auto py-2'>Zlide is the revolutionary software that simplifies the process of creating visually compelling PowerPoint presentations. With the power of AI, Zlide converts your textual data into well-structured slides, saving you time and effort.</p>
      </div>

      <div className='py-12 flex md:flex-row flex-col space-x-4 w-full'>
    {steps.map((step, index) => (
        <ul key={index}>
            <li className=''><img src={step.src} alt="pic" className='w-[397px] h-[290px]'/></li>
            <li className='max-w-[300px] font-primaryMedium text-center md:text-2xl text-2xl py-2'>{step.text1}</li>
            <li className='max-w-[650px] font-primaryRegular text-[15px] text-center m-auto py-1'>{step.text2}</li>
            
        </ul>
    ))}
      </div>

      <div className='text-center'>
        <button className='text-center font-primaryThin text-white py-3 px-4 tracking-wider bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-800 rounded text-sm'>Get Started</button>
      </div>
    </div>
  )
}
