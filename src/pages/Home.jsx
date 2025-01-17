import React from 'react'
import Skills from './Skills.jsx'
import Projects from './Projects'
import Contect from './Contect'
import "./home.css"
import image from '../assets/img1.png'
import reactIcon from '../assets/react.png'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
import jsIcon from '../assets/js.png'
import WorkExperience from './WorkExperience.jsx'

function Home() {
  return (
    <>
    <div className='container'>
    <section id='home' className='home-container'>
      <div className='home-content'>
        <h2>Building Digital Experienves That Inspire</h2>
        <p>
          Passionater Frontend Developer | Transforming Ideas into Seamless and Seamless
          Visually Stunning Web Solutions
        </p>
      </div>
      <div className='home-img'>
        <div>
          <div className="tech-icon">
            <img src={reactIcon} alt=""/>
          </div>
          <img src={image} alt="" className='image'/>
        </div>
        <div>
          <div className='tech-icon'>
            <img src={htmlIcon} alt=""/>
          </div>
          <div className='tech-icon'>
            <img src={cssIcon} alt=""/>
          </div>
          <div className='tech-icon'>
            <img src={jsIcon} alt=""/>
          </div>
        </div>
      </div>
    </section>
    <Skills/>
    <WorkExperience/>
    <Projects/>
    <Contect/>
    </div>
    </>
  )
}

export default Home