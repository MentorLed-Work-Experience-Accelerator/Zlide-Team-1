import React from 'react'
import { IoMdEyeOff } from 'react-icons/io'
import ResetFooter from './ResetFooter'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'



export default function Reset() {
  return (
    <div className="items-center justify-center">
    <div className="p-24">
      <div className="px-6 py-8 m-auto max-w-[700px] w-full border bg-gray-200 rounded-lg shadow-2xl">
    <h2 className='font-primaryMedium text-[25px] bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-10% via-[#017] via-20% to-violet-800 to-70% ml-6'>Reset Password</h2>
      <div className="p-6 gap-4">
        <form className="flex flex-col gap-4">
    
          <label className="text-[15px] tracking-wider px-2 font-primaryRegular">New Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-300 text-base"
          //  value={password} onChange={(e) => setPassword(e.target.value)} 
          />
                    <p className="text-[#FF7D7D] text-sm">Password must contain uppercase letters special character and number</p>
          </div>

          <label className="text-[15px] tracking-wider px-2 font-primaryRegular">Confirm Password</label>
          <div className="relative">
            <IoMdEyeOff  className='absolute top-[30%] left-[94%] items-center' size={18}/>
          <input type="password" placeholder="**********" className="w-full rounded-lg py-4 px-6 bg-gray-300 text-base"
          //  value={password} onChange={(e) => setPassword(e.target.value)} 
          />
          </div>
          
          <button className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Reset Password</button>

          <div className="text-sm text-center font-primaryRegular tracking-widest">Don't Have An Account?<Link to="/signup" className='font-primaryMedium text-[15px] bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-10% via-[#017] via-20% to-violet-800 to-70%'> Create Account</Link></div>
        </form>
      <div className="grid gap-2 mt-4 place-content-center">
      <div className="grid grid-flow-col items-center">
        <hr className="border-gray-400"/>
        <p class="text-center text-sm">OR</p>
        <hr className="border-gray-400"/>
      </div>
      <div className=" flex gap-2 items-center font-primaryRegular text-[14px]">Login with <a href="#"><img src="/src/images/logos_google.png" alt="google" width={70} height={70} className='items-center' /></a></div>
      </div>
      </div>
      </div>
    </div>
    
    <div>
      <Footer />
    </div>
    </div>
  )
}































