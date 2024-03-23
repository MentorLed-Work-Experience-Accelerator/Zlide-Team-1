import React, { useState } from 'react'
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from 'react-icons/io'

const questions = [
    {
        id: 1,
        quest: 'How does the AI-powered text prompt feature work?',
        ans: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
    },
    {
        id: 2,
        quest: 'What is the purpose of this website?',
        ans: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
    },
    {
        id: 3,
        quest: 'Can I customize the design of my presentations?',
        ans: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
    },
    {
        id: 4,
        quest: 'Do you offer pre-designed templates for presentations?',
        ans: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
    },
    {
        id: 5,
        quest: 'Is collaboration possible on this platform?',
        ans: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
    },
    {
        id: 6,
        quest: 'Can I integrate this platform with other tools or applications?',
        ans: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
    },
    {
        id: 7,
        quest: 'How secure is my data on this platform?',
        ans: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
    },
    {
        id: 8,
        quest: 'Do you offer customer support?',
        ans: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
    },
    {
        id: 9,
        quest: 'Is there a free trial available?',
        ans: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
    },
    {
        id: 10,
        quest: 'What happens to my presentations after the trial period ends?',
        ans: 'Your presentations are securely stored on our platform, even after the trial period ends. If you choose not to subscribe, you\'ll still have access to your presentations, but you won\'t be able to create new ones or access premium features.'
    },
]


export default function AccordionItems() {
    // function Accordion({ questions }) {
    //     // Use an array to track the open state of each item
    //     const [openItems, setOpenItems] = useState([]);
       
    //     const toggleAccordion = (index) => {
    //        // Check if the item is already open
    //        const isOpen = openItems.includes(index);
       
    //        if (isOpen) {
    //          // If open, remove it from the array
    //          setOpenItems(openItems.filter(item => item !== index));
    //        } else {
    //          // If closed, add it to the array
    //          setOpenItems([...openItems, index]);
    //        }
    //     };
    const [open, setOpen] = useState(false);

 const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
 }


  return (
    <div className="max-w-[1055px] w-full px-8 mx-auto mt-20 space-y-2">

        {questions.map((question, index) => ( 
      <div className={`p-4 border-t ${open ? 'border-b-2' : 'border-b-0'}`} key={index}>
        <button
          className="w-full text-left font-semibold"
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex justify-between items-center">
            <span className='font-primaryRegular md:text-[19px] text-xl bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-40% via-[#017] via-20% to-violet-800 to-99% mt-4'>{question.quest}</span>
            {open === index ? <IoMdArrowRoundUp size={30}  className='
      bg-gradient-to-r from-[#115] from-40% via-[#017] via-20% to-violet-800 to-99% text-white rounded-full p-1'/> : <IoMdArrowRoundDown size={30} className='
      bg-gradient-to-r from-[#115] from-40% via-[#017] via-20% to-violet-800 to-99% text-white rounded-full p-1' />}
          </div>
        </button>
        {open === index && (
          <div className="mt-10 max-w-[800px]">
            <p className="text-[17px] leading-6 text-black font-primaryThin">
            {question.ans}
            </p>
          </div>
        )}
      </div>
      ))}
    </div>
  )
}
