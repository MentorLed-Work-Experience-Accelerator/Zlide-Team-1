import { useState } from 'react'

export default function Course() {
  const [selectedText, setSelectedText] = useState('easy')
  const [textColor, setTextColor] = useState('#50c')
  const [buttonTextColor, setButtonTextColor] = useState('black')
  const [buttonColor, setButtonColor] = useState('black')



const handleButtonClick = (text) => {
  setSelectedText(text)
  setTextColor(text === 'easy' ? '#50c' : 'initial')
  setButtonTextColor(text === 'custom' ? '#50c' : 'initial')
  setButtonColor(text === 'fast' ? '#50c' : 'initial')
}


  return (
    <div id='instructions' className='max-w-[1240px] mx-auto md:pl-20 p-4 py-16 mt-[5em] flex md:flex-row flex-col md:space-x-14 space-y-4'>
    <div className='space-y-4 max-w-[600px]'>
    <div>
        <h2  className='font-primaryMedium text-right md:text-3xl text-xl bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-80% via-[#017] via-60% to-violet-800 to-99% mb-[40px]'>Why Choose Us</h2>
      </div>
        <div className={`cursor-pointer`} onClick={() => handleIndexSelection(0)}>
        <h2 className='font-primaryMedium text-xl text-[#50c] cursor-pointer'
        onClick={() => handleButtonClick('easy')}
        style={{ color: textColor}}

        >Easy to Use</h2>
        <p className='font-primaryRegular text-[16px] px-3 leading-[35px] max-w-[700px]'>Our webapp is designed to be user-friendly, allowing you to create stunning presentations with ease. No technical skills required!</p>
        
        </div>

        <h2 className='font-primaryMedium text-xl cursor-pointer'
        onClick={() => handleButtonClick('custom')}
        style={{ color: buttonTextColor}}

        >Customisation Options</h2>
        <p className='font-primaryRegular text-[16px] text-justify w-full px-3 leading-[35px] max-w-[600px]'>Tailor your presentations to match your brand and style. With our webapp, you have full control over fonts, colors, layouts, and more.
         </p>
         
        <h2 className='font-primaryMedium text-xl cursor-pointer'
        onClick={() => handleButtonClick('fast')}
        style={{ color: buttonColor}}

        >Fast Generations</h2>
        <p className='font-primaryRegular text-[16px] px-3 leading-[35px] '>Say goodbye to hours spent on creating presentations. Our webapp uses AI technology to generate slides quickly and efficiently.</p>
    </div>

    <div>
      {selectedText === 'easy' ?
     <img src="/images/undraw_website_builder_re_ii6e 1.png" alt="pics" width={399} height={335} className='h-full pt-[60px]'/>
     :
     <img src="/images/amico.png" alt="pics" width={380} height={406} className='h-full pt-[60px]'/>
  }
    </div>
    </div>
  )
}
