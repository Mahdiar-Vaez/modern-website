import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Header from './Components/Container/header/Header'
import WhatGpt3 from './Components/Container/whatGPT3/WhatGpt3'
import Features from './Components/Container/features/Features'
import Posibility from './Components/Container/posibility/Posibility'
import Blog from './Components/Container/blog/Blog'
import Footer from './Components/Container/footer/Footer'
import Brand from './Components/brand/BrandComponent'

export default function App() {
  return (
    <div className='app'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGpt3/>
        <Features/>
        <Posibility/>
        <Blog/>
        <Footer/>
    </div>
  )
}
