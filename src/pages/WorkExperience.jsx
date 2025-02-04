import React,{useRef} from 'react'
import './workexperience.css';
import {WORK_EXPERIENCE} from "../utils/data.js"
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';
function WorkExperience() {
    const sliderRef = useRef();
    const settings = {
        dosts:false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    };

    const sliderRight =()=>{
        sliderRef.current.slickNext();
    };
    const sliderLeft =()=>{
        sliderRef.current.slickPrev();
    };
  return (
    <section className='experience-container' id="workexp">
        <h5>Work Experience</h5>
        <div className='experience-content'>
            <div className='arrow-right' onClick={sliderRight}>
                <span class="material-symbols-outlined">chevron_right</span>
            </div>
            <div className='arrow-left' onClick={sliderLeft}>
                <span class="material-symbols-outlined">chevron_left</span>
            </div>
            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item)=>(
                <ExperienceCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default WorkExperience