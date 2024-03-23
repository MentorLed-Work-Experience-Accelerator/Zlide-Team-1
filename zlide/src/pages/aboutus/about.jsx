import React from 'react'
import Navbar from '../../components/Navbar'
import AboutHeader from '../aboutus/AboutHeader'
import Projector from './Projector'
import WorkedWith from '../../components/WorkedWith'
import Mission from './Mission'
import Users from './Users'
import Course from './Course'
import Community from './Community'
import Footer from '../../components/Footer'

export default function about() {
  return (
    <div>
    <Navbar />
    <AboutHeader />
    <Projector />
  <div className='pt-[17em]'>
  <WorkedWith />
  </div>
  <Mission />
    <Users />
    <Course />
     <Community />
     <div className='mt-[6em]'>
      <Footer />
     </div>
    </div>
  )
}
