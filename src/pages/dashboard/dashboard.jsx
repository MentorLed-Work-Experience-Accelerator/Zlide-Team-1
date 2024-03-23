import React, { useState } from 'react'
import { HiClock } from "react-icons/hi2"
import { HiPencil} from "react-icons/hi"
import { HiRectangleGroup } from "react-icons/hi2"
import { IoMdSettings } from "react-icons/io"
import { ImBin } from "react-icons/im"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-router-dom'
import Television from './board/Television'
// import Board from './board/board'


export default function dashboard() {
    const menus = [
        {name: "Dashboard", link: "/board", icon: <HiClock /> },
        {name: "Drafts", link: "/", icon: <HiPencil /> },
        {name: "Templates", link: "/template", icon: <HiRectangleGroup /> },
        {name: "Archived", link: "/", icon: <ImBin />},
        {name: "Settings", link: "/settings", icon: <IoMdSettings /> },
    ]


  const [open, setOpen] = useState(true)


  function toggleNav(){
    setOpen(!open)
  }

  return (
    <div>
      
      <section className='flex gap-6'>

            <div className={`md:bg-gradient-to-br md:from-[#115] md:from-78.95% md:via-[#017] md:via-% md:to-violet-800 md:to-%  fixed cursor-pointer ${open ? "w-[232px]" : "w-[80px]"} duration-500 p-7 shadow-2xl h-[100vh]`}>
              <section style={{backgroundImage: 'url(/images/footer.png)', backgroundRepeat: 'repeat', backgroundSize: 'cover', backgroundPosition: 'left',}}>
               <div className='py-6 flex gap-2'>
                <span><img src="" alt="img" className='rounded-full' /></span>
                <span><h3  style={{ transitionDelay: '300ms'}} className={`text-white font-primaryRegular tracking-wide text-center duration-500 whitespace-pre ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Abdullahi Mansur</h3>
                <span><h3  style={{ transitionDelay: '300ms'}} className={`text-white font-primaryThin text-[13px] text-center duration-500 whitespace-pre ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Mansur.work@gmail.com</h3></span>
                </span>
                
               </div>

              


               <span className='items-center absolute top-[40%] right-9'>
                    <MdKeyboardArrowLeft size={28} className={`absolute top-[16px] text-white ${open ? '' : 'hidden'}`} onClick={toggleNav}/>
                    <MdKeyboardArrowRight size={28} onClick={toggleNav} className={`absolute top-[16px] left-10 text-[#114] ${open ? 'hidden' : ''}`}/>
                 </span>
               <div className='py-4'>
                <div className='hover:text-[#fd4]'>
                    {menus.map((menu, i) => ( 
                          <Link to={menu.link}>
                        <div className={`flex items-center gap-3 font-primaryRegular py-4 text-white group`}>
                          <p className={`text-[26px] whitespace-pre`}>{menu.icon}</p>
                            <p style={{ transitionDelay: `${i + 3}00ms`}}
                            className={`text-[14px] tracking-wider group whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}</p>
                           
                             {/* <p className={`${open ? '' : 'hidden'}absolute left-48 bg-white  whitespace-pre rounded-lg px-2 py-1 text-[#115] shadow-xl`}>
                            {menu.name}
                        </p> */}
                        </div>
                        </Link>
                    ))}
               

               </div>
               </div>

               <div 
               className={`py-8 ${!open ? 'hidden' : '' }`}>
                <p 
                style={{ transitionDelay: '300ms'}}
                className='max-w-[140px] border-b-2 p-2 text-white font-primaryRegular'>2 free Zlides left</p>

                <button 
                style={{ transitionDelay: '300ms'}}
                className='bg-[#fd4] text-[14px] p-4 font-primaryRegular rounded-lg mt-[13px]'>Get Unlimited Zlides</button>
               </div>
            </section>
            </div>

        <div className='absolute left-[280px] flex flex-row'>
           <Television />
            
            </div>
      </section>
    </div>
  )
}
