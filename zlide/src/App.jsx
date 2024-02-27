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
    <div className='m-auto text-2xl'>
    <Navbar />
    <Header />
    <GetStarted />
    <Instructions />
    <Comment />
    <Pricing />
    <WorkedWith />
    <Footer />
    </div>
  )
}
