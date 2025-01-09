import React from 'react'
import tourimg from '../assets/tour_img.png'

function Projects() {
  return (
    <section className="projects">
        <h1 className='sectionTitle'>Projects</h1>
        <div className='projectsContainer'>
            <a href="https://github.com/siddharth6164/tour_management">
                <img src={tourimg} alt="" srcset="" />
            </a>
        </div>
    </section>
  )
}

export default Projects