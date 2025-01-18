import React from 'react'
import './contect.css'
import ContactInfoCard from './ContactMe/ContactInfoCard'
import github from '../assets/github.svg'
import email from '../assets/email.svg'
import linkedin from '../assets/linkedin.svg'
import ContactForm from './ContactMe/ContactForm'


function Contact() {
  return (
    <section className='contect-container' id="contact">
      <h5>Contact Me</h5>
      <div className='contact-content'>
        <div style={{flex:1}}>
          <ContactInfoCard iconUrl={email} text="siddhu33singh@gmail.com"/>
          <ContactInfoCard iconUrl={github} text="https://github.com/siddharth6164"/>
          <ContactInfoCard iconUrl={linkedin} text="https://www.linkedin.com/in/siddharth6164/"/>
        </div>
        <div style={{flex:1}}>
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default Contact