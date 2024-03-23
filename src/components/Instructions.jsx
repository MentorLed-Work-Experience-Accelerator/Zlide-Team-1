import { useState } from 'react'

export default function Instructions() {
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
    <div id='instructions' className='max-w-[1240px] mx-auto md:pl-20 p-4 py-16 mt-[5em] flex md:flex-row flex-col md:space-x-3 space-y-4'>
    
    <div className='space-y-4 max-w-[700px] border-l-4 border-[#dcf] space-x-6 relative'>
        <div className='border-l-4 mt-1.5 -left-1.5 border-[#50c] space-x-4'>
        <h2 className='font-primaryMedium text-xl text-[#50c] px-7 cursor-pointer'
        onClick={() => handleButtonClick('easy')}
        style={{ color: textColor}}

        >Easy to Use</h2>
        <p className='font-primaryRegular text-[17px] px-3 leading-[35px] '>Our webapp is designed to be user-friendly, allowing you to create stunning presentations with ease. No technical skills required!</p>
        
        </div>

        <h2 className='font-primaryMedium text-xl cursor-pointer'
        onClick={() => handleButtonClick('custom')}
        style={{ color: buttonTextColor}}

        >Customisation Options</h2>
        <p className='font-primaryRegular text-[17px]'>Tailor your presentations to match your brand and style. With our webapp, you have full control over fonts, colors, layouts, and more.
         </p>
         
        <h2 className='font-primaryMedium text-xl cursor-pointer'
        onClick={() => handleButtonClick('fast')}
        style={{ color: buttonColor}}

        >Fast Generations</h2>
        <p className='font-primaryRegular text-[17px]'>Say goodbye to hours spent on creating presentations. Our webapp uses AI technology to generate slides quickly and efficiently.</p>
    </div>

    <div>
      {selectedText === 'easy' ?
     <img src="/images/undraw_website_builder_re_ii6e 1.png" alt="pics" width={533} height={335} className='h-full'/>
     :
     <img src="/images/amico.png" alt="pics" width={353} height={235} className='h-full'/>
  }
    </div>
    </div>
  )
}
