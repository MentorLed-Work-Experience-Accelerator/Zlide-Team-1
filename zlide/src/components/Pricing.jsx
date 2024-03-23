import { useState } from 'react'
import { IoIosCheckmark } from 'react-icons/io'
import Pricing2 from './Pricing2'
import Pricing1 from './Pricing1'

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
   
  // const [isYearly, setIsYearly] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('monthly')
  const [textColor, setTextColor] = useState('white')
  const [buttonTextColor, setButtonTextColor] = useState('black')

  const handleButtonClick = (plan) => {
    setSelectedPlan(plan);
    setTextColor(plan === 'monthly' ? 'white' : 'initial')
    setButtonTextColor(plan === 'yearly' ? 'white' : 'initial')
 }
  return (
    <div className='max-w-[1240px] w-full mx-auto mt-[3em]'>
        <div className='justify-center items-center'>
            <h1 className='font-primaryMedium text-center md:text-3xl text-4xl bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-50.95% via-[#017] via-69.12% to-violet-800 to-75%'>Flexible Pricing</h1>
            <p className='text-center font-primaryRegular text-[18px] pt-2'>Take your presentations to the next level with our AI-powered webapp.</p>
             </div>

             <div className='text-center pt-14 space-x-1'>
             <button
           onClick={() => handleButtonClick('monthly')}
           style={{ backgroundColor: selectedPlan === 'monthly' ? '#101' : 'initial', color: textColor}}
          className={`p-[10px] border-2 border-black rounded-lg font-primaryRegular text-[16px] tracking-widest text-white`}
        >
          Monthly
        </button>
        <button
           onClick={() => handleButtonClick('yearly')}
           style={{ backgroundColor: selectedPlan === 'yearly' ? '#101' : 'initial', color: buttonTextColor }}
          className={`border-2 border-black px-[19px] py-[10px] rounded-lg text-[16px] tracking-widest font-primaryRegular`}
        >
          Yearly
        </button>
             </div>

          <div className='m-auto'>
          {selectedPlan === 'monthly' ? (
        <Pricing1 />
      ) : (
        <Pricing2 />
      )}

          </div>
    </div>
  )
}
