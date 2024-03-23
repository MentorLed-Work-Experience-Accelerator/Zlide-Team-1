import React from 'react'

export default function Find() {
  return (
    <div className='max-w-[1240px] mx-auto'>
        <div>
            <h2 className='font-primaryMedium text-center md:text-[36px] text-xl bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-40% via-[#017] via-20% to-violet-800 to-99% mt-4'>Can't find what you are looking for?</h2>

            <p className='font-primaryRegular text-center max-w-[900px] mx-auto pt-[1em] text-[20px]'>If your question isn't answered above or in the rules then you can contact us using the form below. We will reply to all queries as soon as we can.</p>
        </div>

        <div className='max-w-[875px] m-auto pt-[4em] space-y-7'>
            <div>
                <h2 className='text-[18px] font-primaryRegular'>Name</h2>
                <input type="text" name="name" id="name" className='w-full h-[64px] bg-gray-200 rounded-lg'/>
            </div>
            <div>
                <h2 className='text-[18px] font-primaryRegular'>Email Address</h2>
                <input type="email" name="mail" id="mail" className='w-full h-[64px] bg-gray-200 rounded-lg'/>
            </div>
            <div>
                <h2 className='text-[18px] font-primaryRegular'>Your Message</h2>
                <textarea name="message" id="mesage" cols="114" rows="12" className='bg-gray-200 rounded-lg'></textarea>
            </div>

            <button className="btn w-full text-black rounded-lg py-4 font-primaryRegular">Send message</button>
        </div>
    </div>
  )
}
