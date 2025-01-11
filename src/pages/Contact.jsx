// https://dashboard.emailjs.com/admin
import React, {useRef}from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
function Contact() {
  const form = useRef();
  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs
      .sendForm('service_qvdjv05', 'template_eycadti', form.current, {publicKey:'4jevzycJvbb3R2BLF'})
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <section className="contact">
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="from_name" hidden>Name</label>
          <input type="text" name="from_name" id="from_name" placeholder="Name" required/>
        </div>
        <div>
          <label htmlFor="from_email" hidden>Email</label>
          <input type="text" name="from_email" id="from_email" placeholder="Email" required/>
        </div>
        <div>
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required
          />
        </div>
        <input type="submit" value="Submit" className="submitbtn" />
      </form>
    </section>
  );
}

export default Contact;
