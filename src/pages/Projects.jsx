import React from 'react'
import "./projects.css"
import tourimg from '../assets/tour_img.png'
import teaching from '../assets/teaching.png';
import Projectcards from './Projectcards'

function Projects() {
  return (
    <section className="projects" id="projects">
        <h1 className='sectionTitle'>Projects</h1>
        <div className='projectsContainer'>
            <Projectcards src={tourimg} link="https://github.com/siddharth6164/tour_management" name="Tour" desc="Traveling App"/>
            <Projectcards src={teaching} link="https://github.com/siddharth6164/Basic_Topic_React" name="Reach" desc="Reactook  "/>
        </div>
    </section>
  )
}

export default Projects