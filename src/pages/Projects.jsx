import React from 'react'
import "./projects.css"
import tourimg from '../assets/tour_img.png'

function Projects() {
  return (
    <section className="projects">
        <h1 className='sectionTitle'>Projects</h1>
        <div className='projectsContainer'>
            <a href="https://github.com/siddharth6164/tour_management" target='_blank'>
                <img src={tourimg} alt="" srcset="" />
                <h3>Tour</h3>
                <p>Traveling App</p>
            </a>
        </div>
    </section>
  )
}

export default Projects