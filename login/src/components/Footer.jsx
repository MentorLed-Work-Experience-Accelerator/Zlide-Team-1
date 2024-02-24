import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div>
        <div className='bg-white'>
            <div className='max-w-[1040px] h-full m-auto md:pl-2 p-4 pt-24'>
                <section className='pb-11 border-b-2 border-black max-h-[700px] h-full'>
                <div className='flex md:flex-row flex-col md:space-x-10 space-x-0 md:space-y-0 space-y-10 m-auto'>

<div className='max-w-[700px] w-full text-black'>
<h2 className='font-primaryMedium text-[15px] tracking-widest '>Contact</h2>
 <ul className='max-w-[700px] w-full font-primaryRegular text-[14px] pt-5 space-y-2 tracking-wider'>
   <li>42 Montgomery Road, Yaba</li>
   <li>Lagos, Nigeria</li>
   <li>info@zlide.com</li>
   <li>(+234) 703 6188 527</li>
   <li>Send a message</li>
 </ul>
</div>

<div className='max-w-[700px] w-full text-black '>
 <h2 className='font-primaryMedium text-[15px] tracking-widest'>Company</h2>
 <ul className='font-primaryRegular text-[14px] pt-5 space-y-2 tracking-wider'>
   <li><a href="">About Us</a></li>
   <li><a href="">Services</a></li>
   <li><a href="">Contact Us</a></li>
   <li><a href="">FAQ</a></li>
   <li><a href=''>Blog</a></li>
 </ul>
</div>

<div className='max-w-[200px] w-full text-black'>
 <h2 className='font-primaryMedium text-[15px] tracking-widest'>Legal</h2>
 <ul className='font-primaryRegular text-[14px] pt-5 space-y-2 tracking-wider'>
   <li><a href="">Privacy Policy</a></li>
   <li><a href="">Terms of Service</a></li>
   <li><a href="">Legal</a></li>
 </ul>
</div>

<div className='max-w-[700px] w-full text-black'>
 <h2 className='font-primaryMedium text-[15px] tracking-widest'>Suscribe</h2>
 <p className='font-primaryRegular text-[16px] pt-5'>Stay up to date with our newsletter</p>

  <div className='flex flex-row md:space-x-2 space-x-3 pt-7 items-center'>
   <input type="email" name="mail" id="mail" placeholder='Email Address' className='w-[225px] h-[64px] rounded-lg py-[16px] px-[24px] border-gray border-2' />
   <button className='w-[102px] h-[64px] rounded-lg py-[16px] px-[16px] text-black font-primaryRegular text-[20px] text-center bg-[#fd4]'>Submit</button>
  </div>
  <p className='text-[13px] pt-3 font-primaryThin'>By subscribing, you agree to our Privacy Policy and consent to receive updates from us</p>
</div>
</div>  
                </section>

                <div className='w-full flex justify-between'>
                        <div className='flex space-x-2 font-primaryThin text-black text-[15px] tracking-wider py-3 '>
                  <span>&copy;</span>
                  <p>2024 Zlide.All Rights Reserved </p>
                 </div>

                        <div className='flex text-black space-x-2 tracking-wider py-4'>
                          <FaLinkedin  size={18}/>
                          <FaFacebook  size={18}/>
                          <FaXTwitter  size={18}/>
                          <FaInstagram  size={18}/>
                          <FaYoutube  size={18}/>
                        </div>
                        </div>
            </div>
                     
        </div>
    </div>
  )
}
