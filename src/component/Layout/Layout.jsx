import React from 'react'
import Routers from '../../router/Routers'
import Projects from '../../pages/Projects'
import Home from '../../pages/Home'
import Skills from '../../pages/Skills'
import Contact from '../../pages/Contact'
import Footer from '../../pages/Footer'

function Layout() {
  return (
    <>
    
        <Home/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Layout