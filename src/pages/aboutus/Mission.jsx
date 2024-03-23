import React from 'react'

export default function Mission() {
  return (
    <div className='max-w-[1240px] mx-auto mt-[7em]'>
       <div className='md:space-y-24 space-y-0'>
       <div className='flex md:flex-row flex-col md:space-y-5 space-y-0 md:space-x-0 space-x-5 items-center justify-center  max-h-[396px] h-full'>
            <div>
              <img src="/images/undraw_stand_out_-1-oag 1.png" alt="standout" className='w-[503px] h-[356px]' />
            </div>

            <div className='max-h-[396px] h-full'>
            <h2 className='font-primaryMedium text-left md:text-3xl text-xl bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-20% via-[#017] via-60% to-violet-800 to-99% '>Our Mission</h2>
            <p className='font-primaryRegular max-w-[493px] max-h-[216px] w-full text-[17px] leading-9 text-justify'>At Zlide, our mission is to simplify the process of creating presentations and make it accessible to everyone. We believe that everyone has a story to tell, and we're here to provide the tools and resources to bring those stories to life.</p>
            
            <button className='bg-[#fd4] w-[120px] h-[50px] rounded-lg mt-[20px] font-primaryRegular text-[15px] text-[#102]'>Try for free</button>

            </div>

        </div>



        <div className='flex md:flex-row flex-col md:space-x-8 space-x-5 items-center justify-center max-h-[396px] h-full'>
            <div className=''>
            <h2 className='font-primaryMedium text-right md:text-3xl text-xl bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-80% via-[#017] via-60% to-violet-800 to-99% '>Who We Are</h2>
            <p className='font-primaryRegular max-w-[456px] max-h-[236px] w-full text-[17px] leading-[36px] text-justify'>We are a team of creative minds, technologists, and design enthusiasts dedicated to revolutionising the way presentations are created. With a diverse range of expertise in AI, design, and software development, we're committed to delivering innovative solutions that empower our users to unleash their creativity.
</p>

            <button className='bg-[#fd4] w-[120px] h-[50px] rounded-lg mt-[27px] font-primaryRegular text-[15px] text-[#102] float-right hover:text-white'>Try for free</button>

            </div>

            <div>
              <img src="/images/undraw_team_collaboration_re_ow29 1.png" alt="standout" className='w-[503px] h-[310px]' />
            </div>

        </div>



        <div className='flex md:flex-row flex-col md:space-y-5 space-y-0 md:space-x-8 space-x-5 items-center justify-center'>
            <div>
              <img src="/images/undraw_presentation_re_sxof 1.png" alt="standout" className='w-[503px] h-[386px]' />
            </div>

            <div>
            <h2 className='font-primaryMedium text-left md:text-3xl text-xl bg-clip-text text-transparent
      bg-gradient-to-r from-[#115] from-80% via-[#017] via-60% to-violet-800 to-59% '>What We Offer</h2>
            <p className='font-primaryRegular text-justify max-w-[493px] max-h-[256px] w-full text-[17px] leading-9'>With Zlide, you can transform text prompts into polished presentations in minutes. Our AI-powered platform analyzes your text prompts and generates beautifully designed slides that capture the essence of your message. Whether you're a marketer, educator, entrepreneur, or student, our platform provides the tools you need to create presentations that impress and inspire.</p>

            <button className='bg-[#fd4] w-[120px] h-[50px] rounded-lg mt-[20px] font-primaryRegular text-[15px] text-[#102]'>Try for free</button>

            </div>

        </div>
       </div>

    </div>
  )
}
