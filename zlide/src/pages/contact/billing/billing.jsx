import React from 'react'
import Navbar from '../../../components/Navbar'
import BillingHeader from './BillingHeader'
import Support from '../Supportt'
import Bill from './Bill'
import WorkedWith from '../../../components/WorkedWith'
import Footer from '../../../components/Footer'

export default function billing() {
  return (
    <div>
    <Navbar />
    <BillingHeader />

     <div className='md:mt-[15em] mt-[5em]'>
       <Support /> 
     </div>

     <div className='md:mt-[7em]'>
        <Bill />
       </div>

       <div className='mt-[5em]'>
        <WorkedWith />
       </div>

       <div className='mt-[8em]'>
        <Footer />
       </div>


    </div>
  )
}
