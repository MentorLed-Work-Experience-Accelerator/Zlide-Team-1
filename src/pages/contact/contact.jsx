import React from 'react'
import Navbar from '../../components/Navbar'
import ContactHeader from './ContactHeader'
import Support from './Supportt'
import Card from './Card'
import WorkedWith from '../../components/WorkedWith'
import Footer from '../../components/Footer'

export default function contact() {
  return (
    <div>
        <Navbar />
        <ContactHeader />

       <div className='md:mt-[15em] mt-[5em]'>
       <Support />
       </div>

       <div className='md:mt-[7em]'>
        <Card />
       </div>

       <div className='mt-[5em]'>
        <WorkedWith  />
       </div>

       <div className='mt-[8em]'>
        <Footer />
       </div>

    </div>
  )
}
