import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { HiOutlinePlus } from "react-icons/hi"
import { HiRectangleGroup } from "react-icons/hi2"


export default function Television() {
    const zlides = [
        {
          id: 1,
          text: 'Artificial Intelligence in finance project',
          src: '/src/images/Copy of Artificial Intelligence in Finance Project Proposal by Slidesgo.png',
          view: 'Viewed Mar 14, 2024',  
        },
        {
          id: 2,
          text: 'Investment Business Plan',
          src: '/src/images/Copy of Investment Business Plan XL by Slidesgo.png',
          view: 'Viewed Mar 14, 2024',  
        },
             
    ]

    const templates = [
        {
            id: 1,
            text: 'Artificial Intelligence in finance project proposal just testing',
            src: '/src/images/Copy of Biomedicine Laboratory Company Profile by Slidesgo.png',
            view: 'Viewed Mar 14, 2024',  
          },
         
          {
            id: 4,
            text: 'Artificial Intelligence in finance project proposal just testing',
            src: '/src/images/Copy of Artificial Intelligence in Finance Project Proposal by Slidesgo.png',
            view: 'Viewed Mar 14, 2024',  
          },
         
          {
            id: 6,
            text: 'Artificial Intelligence in finance project proposal just testing',
             src: '/src/images/aqua-marketing-plan1706014956___media_library_original_548_308.png',
            view: 'Viewed Mar 14, 2024',  
          },
    ]
  return (
    <div className='max-w-[1240px] mx-auto'>
      <h2 className='pt-[50px] pl-[20px] text-[16px] font-primaryMedium'><span className='font-primaryRegular'>Hey</span> Mansour👋</h2>


      <div>
      <h2 className='font-primaryMedium text-[25px] pl-[20px] mt-[0.5em]'>Welcome to Zlide Presentation Designer</h2>


       <section className='flex'>
       <div className='bg-white rounded-2xl shadow-2xl w-[130px] h-[140px] mt-[2.5em] ml-[2em] cursor-pointer'>
        <HiOutlinePlus size={48} className='m-auto h-full text-violet-800'/>
        <p>New Zlide</p>
        <p>Design from scratch</p>
        </div>
        <div className='bg-white rounded-2xl shadow-2xl w-[130px] h-[140px] mt-[2.5em] ml-[2em] cursor-pointer'>
         <HiRectangleGroup size={48} className='m-auto h-full text-violet-800'/>
        </div>
        <div className='bg-gradient-to-r from-[#115] from-70.5% via-[#017] via-60.7% to-violet-800 to-99.2%  rounded-2xl shadow-2xl w-[130px] h-[140px] mt-[2.5em] ml-[2em] cursor-pointer'>
          <img src="/src/images/Create with AI.png" alt="star" className='mx-auto  text-white mt-[2.9em] ' />
        {/* <HiOutlinePlus size={48} /> */}
        </div>
       </section>
      </div>

      <div>
        <h2 className='font-primaryMedium text-[21px] pl-[20px] pt-[2em]'>Recent Projects</h2>

        <div className='flex gap-16 pl-[20px] pt-[18px]'>
            {zlides.map((zlide,ind) => (
                <section key={ind} className=''>
                <img src={zlide.src} alt={zlide.title} className='w-[302px] h-[195px] rounded-2xl'/>
                 <p className='max-w-[310px]'>{zlide.text}</p>
                 <p className='text-[15px] text-gray-500 font-primaryThin pt-[8px]'>{zlide.view}</p>
                </section>
            ))}
        </div>
      </div>

      


      <div>
        <div className='flex justify-between items-center mt-[3em]'>
            <h2 className='font-primaryMedium text-[21px] pl-[20px] mt-[2em]'>Recently Viewed Templates</h2>
            <Link to="/template"> <button className='flex items-center bg-[#fd4] font-primaryRegular text-[18px] px-[8px] py-[6px] rounded-lg mt-[2em]'><p>See all</p>
            <p className='font-primaryThin'>
            <MdKeyboardArrowRight size={28}/>
            </p></button></Link>
        </div>

        <div className='grid grid-cols-3 gap-16 pl-[20px] pt-[18px]'>
            {templates.map((template,index) => (
                <section key={index} className=''>
                <img src={template.src} alt={template.title} className='w-[302px] h-[195px] rounded-2xl'/>
                 <p className='max-w-[310px]'>{template.text}</p>
                 <p className='text-[15px] text-gray-500 font-primaryThin pt-[8px]'>{template.view}</p>
                </section>
            ))}
        </div>

      </div>
    </div>
  )
}
