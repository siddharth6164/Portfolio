import React from 'react'
import{Route,Routes,Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Contact from '../pages/Contact'
import About from '../pages/About'
function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<Home />}/>
        {/* <Route path="/projects" element={<Projects />}/>   */}
        {/* <Route path="/skills" element={<Skills />}/>         */}
        {/* <Route path="/contact" element={<Contact />}/>         */}
        <Route path="/about" element={<About/> }/>        
    </Routes>
)
}

export default Routers