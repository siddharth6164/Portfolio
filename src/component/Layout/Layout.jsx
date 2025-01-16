import React from 'react'
import Projects from '../../pages/Projects'
import Home from '../../pages/Home'
import Skills from '../../pages/Skills'
import Contact from '../../pages/Contact'
import Footer from '../../pages/Footer'
import Header from '../../pages/Header'
function Layout() {
  return (
    <>
    
        <Header/>
        <Home/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Layout