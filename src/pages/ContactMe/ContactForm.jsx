import React, { useRef, useState } from "react";
import "./contactform.css";
import emailjs from "@emailjs/browser";
function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_first: "",
    from_last: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e)=>{
    const{name, value} = e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name] : value,
    }))
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_qvdjv05", "template_eycadti", form.current, {
        publicKey: "4jevzycJvbb3R2BLF",
      })
      .then(
        () => {
          alert("Meassage sned successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setFormData({
      from_first: "",
      from_last: "",
      from_email: "",
      message: "",
    });
  };
  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input
            type="text"
            name="from_first"
            placeholder="First Name"
            value={formData.from_first}
            onChange={handleChange}
          />
          <input
            type="text"
            name="from_last"
            placeholder="Last Name"
            value={formData.from_last}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="from_email"
          placeholder="Email"
          value={formData.from_email}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
