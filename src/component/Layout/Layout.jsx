import React from 'react'
import Routers from '../../router/Routers'
import Projects from '../../pages/Projects'
import Home from '../../pages/Home'
import Skills from '../../pages/Skills'
import Contact from '../../pages/Contact'

function Layout() {
  return (
    <>
    
        <Home/>
        <Projects/>
        <Skills/>
        <Contact/>
    </>
  )
}

export default Layout