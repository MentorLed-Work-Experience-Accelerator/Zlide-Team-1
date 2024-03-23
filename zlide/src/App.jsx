import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import GetStarted from './components/GetStarted'
import Instructions from './components/Instructions'
import Comment from './components/Comment'
import Pricing from './components/Pricing'
import WorkedWith from './components/WorkedWith'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='text-2xl'>
    <Navbar />
    <Header />
    <div className='md:mt-[3em] mt-0'>
    <GetStarted />
    </div>
    <Instructions />
    <Comment />
    <div className='mt-[7em]'>
    <Pricing />
    </div>
    <WorkedWith />
     <div className='mt-[6em]'>
     <Footer />
     </div>
    </div>
  )
}
