import React from 'react'
import Fashion from '../templatess/Fashion'
// import Work from './Work'

export default function All() {
    const templates = [
        {
            id: 1,
            text: 'Artificial Intelligence in finance project proposal just testing',
            src: '/src/images/Copy of Biomedicine Laboratory Company Profile by Slidesgo.png',  
          },
          {
            id: 2,
            text: 'Artificial Intelligence in finance project proposal just testing',
            src: '/src/images/Copy of Cost Reduction in Manufacturing Industry Pitch Deck by Slidesgo (3).png',  
          },
          {
            id: 3,
            text: 'Artificial Intelligence in finance project proposal just testing',
            src: '/src/images/marketing-annual-report1698386650___media_library_original_548_308.png',  
          },
          {
            id: 4,
            text: 'Artificial Intelligence in finance project proposal just testing',
            src: '/src/images/Copy of Artificial Intelligence in Finance Project Proposal by Slidesgo.png',  
          },
          {
            id: 5,
            text: 'Artificial Intelligence in finance project proposal just testing',
            src: '/src/images/Copy of Investment Business Plan XL by Slidesgo.png',  
          },
          {
            id: 6,
            text: 'Artificial Intelligence in finance project proposal just testing',
             src: '/src/images/aqua-marketing-plan1706014956___media_library_original_548_308.png',  
          },
          {
            id: 7,
            text: 'Artificial Intelligence in finance project proposal just testing',
            src: '/src/images/marketing-annual-report1698386650___media_library_original_548_308.png',  
          },
          {
            id: 8,
            text: 'Artificial Intelligence in finance project proposal just testing',
            src: '/src/images/Copy of Biomedicine Laboratory Company Profile by Slidesgo.png',  
            
          },
          {
            id: 9,
            text: 'Artificial Intelligence in finance project proposal just testing',
            src: '/src/images/Copy of Cost Reduction in Manufacturing Industry Pitch Deck by Slidesgo (3).png',  
          },
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


          {
            id: 19,
            text: 'Company profile',
            src: '/src/images/ecommerce/0-e-commerce-business-plan-thumb 2.png',
            category: 'ecommerce'  
          },
          {
            id: 20,
            text: 'Company profile',
            src: '/src/images/ecommerce/building_e_commerce_website_powerpoint_ppt_template_bundles_slide01 1.png',
            category: 'ecommerce'  
          },
          {
            id: 21,
            text: 'Company profile',
            src: '/src/images/ecommerce/e_commerce_application_development_powerpoint_presentation_slides_slide01 1.png',
            category: 'ecommerce'  
          },
          {
            id: 22,
            text: 'Company profile',
            src: '/src/images/ecommerce/E-commerce-Free-Presentation-Template 1.png',
            category: 'ecommerce'  
          },
          {
            id: 23,
            text: 'Company profile',
            src: '/src/images/ecommerce/ecommerce_marketing_ideas_to_grow_online_sales_complete_deck_slide01 1.png',
            category: 'ecommerce'  
          },
          {
            id: 24,
            text: 'Company profile',
            src: '/src/images/ecommerce/images (7) 1.png',
            category: 'ecommerce'  
          },
          {
            id: 25,
            text: 'Company profile',
            src: '/src/images/ecommerce/images (8) 1.png',
            category: 'ecommerce'  
          },
          {
            id: 26,
            text: 'Company profile',
            src: '/src/images/ecommerce/images (9) 1.png',
            category: 'ecommerce'  
          },
          {
            id: 27,
            text: 'Company profile',
            src: '/src/images/ecommerce/sustainable-ecommerce-slide1 1.png',
            category: 'ecommerce'  
          },


           {
            id: 28,
            text: 'Company profile',
            src: '/src/images/fashion/images (2) 1.png',
            category: 'fashion'  
          },
           {
            id: 29,
            text: 'Company profile',
            src: '/src/images/fashion/images (25) 1.png',
            category: 'fashion'  
          },
           {
            id: 30,
            text: 'Company profile',
            src: '/src/images/fashion/images (27) 1.png',
            category: 'fashion'  
          },
           {
            id: 31,
            text: 'Company profile',
            src: '/src/images/fashion/images (28) 1.png',
            category: 'fashion'  
          },
           {
            id: 32,
            text: 'Company profile',
            src: '/src/images/fashion/images (29) 1.png',
            category: 'fashion'  
          },
           {
            id: 33,
            text: 'Company profile',
            src: '/src/images/fashion/images (31) 1.png',
            category: 'fashion'  
          },
           {
            id: 34,
            text: 'Company profile',
            src: '/src/images/fashion/images (32) 1.png',
            category: 'fashion'  
          },
           {
            id: 35,
            text: 'Company profile',
            src: '/src/images/fashion/images (34) 1.png',
            category: 'fashion'  
          },
           {
            id: 36,
            text: 'Company profile',
            src: '/src/images/fashion/images (35) 1.png',
            category: 'fashion'  
          },
    ]


  return (
    <div className='max-w-[1240px]'>
        <div className='grid grid-cols-3 gap-16 pl-[20px] pt-[18px]'>
            {templates.map((template,index) => (
                <section key={index} className=''>
                <img src={template.src} alt={template.title} className='w-[302px] h-[195px] rounded-2xl'/>
                 <p className='max-w-[310px]'>{template.text}</p>
                 <p className='text-[15px] text-gray-500 font-primaryThin pt-[8px]'>{template.view}</p>
                </section>
            ))}
        </div>


       {/* <Work /> */}
       <Fashion />
    </div>
  )
}
