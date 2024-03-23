import React from 'react'
import { PiHeadsetFill } from "react-icons/pi"
import { ImExit } from "react-icons/im"
import { IoReceipt } from "react-icons/io5"
import { Link } from 'react-router-dom'

const Support = () => {



    const boxs = [
        {
        icon: <PiHeadsetFill />,    
        head: 'Contact Support',
        note: 'Reach out to us through direct phone calls.',
        link: '/contact',
        },
        {
        icon: <ImExit />,    
        head: 'Login Issues',
        note: 'Trouble logging in? Let us help you regain access to your account.',
        link: '/issue',
        },
        {
        icon: <IoReceipt />,    
        head: 'Billing Issues',
        note: 'Lets assist in resolving your billing issues',
        link: '/billing'
        },
    ]
  return (
    <div className='max-w-[1024px] mx-auto'>
      <div className='flex md:gap-10 gap-2 justify-center cursor-pointer'>
        {boxs.map((box, item) =>(
          <Link to={box.link}>
              <section key={item}>
               <div className='w-[299px] h-[200px] bg-white rounded-lg shadow-2xl gap-3 py-9 px-5'>
                    <h2 className='text-[48px] text-[#fd3] pl-[99px] -mr-[250px]'>{box.icon}</h2>
                    <p className='pt-[15px] font-primaryMedium text-[18px] tracking-wider text-center'>{box.head}</p>
                    <p className='pt-[12px] font-primaryRegular text-[15px] w-[250px] text-gray-600 text-center'>{box.note}</p>
                </div>
                </section>
          </Link>
        ))}
      </div>

        <div>

        </div>

    </div>
  )
}

export default Support;