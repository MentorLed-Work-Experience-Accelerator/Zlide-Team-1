import React from 'react'
import Navbar from '../../../components/Navbar'
import IssueHeader from './IssueHeader'
import WorkedWith from '../../../components/WorkedWith'
import Footer from '../../../components/Footer'
import Limp from './Relieve'
import Support from '../Supportt'


export default function issue() {
  return (
    <div>
        <Navbar />
        <IssueHeader />

        <div className='md:mt-[15em] mt-[5em]'>
       <Support />
       </div>

       <div className='md:mt-[7em]'>
        <Limp />
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
