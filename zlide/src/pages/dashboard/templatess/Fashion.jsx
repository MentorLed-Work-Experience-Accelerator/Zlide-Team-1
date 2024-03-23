import React from 'react'
// import { templates } from './All'
import { Link } from 'react-router-dom'


export default function Fashion() {
   

    const slides = [
      {
        id: 10,
        text: 'Artificial Intelligence in finance project prop',
        src: '/src/images/Copy of Investment Business Plan XL by Slidesgo.png',
        category: 'business'  
      },
      {
        id: 11,
        text: 'Software development',
        src: '/src/images/images (20) 1software.png',
        category: 'business'  
      },
      {
        id: 12,
        text: 'Marketing plan',
        src: '/src/images/download (9) 1.png',
        category: 'business'  
      },
      {
        id: 13,
        text: 'Business plan',
        src: '/src/images/images (19) 1.png',
        category: 'business'  
      },
      {
        id: 14,
        text: 'Corporate brand promotion',
        src: '/src/images/images (18) 1.png',
        category: 'business'  
      },
      {
        id: 15,
        text: 'Business Technology',
         src: '/src/images/images (21) 1.png',
         category: 'business'  
      },
      {
        id: 16,
        text: 'Consulting Proposal',
        src: '/src/images/images (22) 1.png',
        category: 'business'  
      },
      {
        id: 17,
        text: 'Inventory Management Process Plan',
        src: '/src/images/images (17) 1.png',
        category: 'business'  
        
      },
      {
        id: 18,
        text: 'Company profile',
        src: '/src/images/images (23) 1.png',
        category: 'business'  
      },
    ]

     
  return (
    <div className='max-w-1240px'>
     <div className='grid grid-cols-3'>
      <h1 className='text-7xl'>Talo mola</h1>
     {slides.map((slide, index) => (
        <Link>
         <section key={index} className=''>
                <img src={slide.src} alt={slide.title} className='w-[302px] h-[195px] rounded-2xl'/>
                 <p className='max-w-[310px]'>{slide.text}</p>
                 <p className='text-[15px] text-gray-500 font-primaryThin pt-[8px]'>{slide.view}</p>
                </section>
        </Link>
    ))}

     </div>
    </div>
  )
}
