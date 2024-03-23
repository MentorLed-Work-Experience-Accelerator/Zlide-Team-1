import React from 'react'
import AccordionItems from './AccordionItems'
import Navbar from '../../components/Navbar'
import FaqHeader from './FaqHeader'
import Find from './Find'
import WorkedWith from '../../components/WorkedWith'
import Footer from '../../components/Footer'

export default function answer() {
  return (
    <div className=''>
      <Navbar />
      <FaqHeader />

      <div className='pt-[27em]'>
      <AccordionItems />
      </div>

     <div className='pt-[7em]'>
     <Find />
     </div>

     <div className='pt-[3em] pb-[7em]'>
      <WorkedWith />
     </div>

     <Footer />
    </div>
  )
}
