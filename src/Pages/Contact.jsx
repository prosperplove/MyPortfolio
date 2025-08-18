import React from "react";
import '../Css/style.css'
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import { FaWhatsapp, FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
const Contact = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
 const contactMe = async (formData) => {
   
formData.append("access_key", "03a60f55-23e2-413f-8672-4ae8b7849463");

    const contact = Object.fromEntries(formData);
  
   console.log(contact)
    const json = JSON.stringify(contact);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    Swal.fire({
  title: "success!",
  text: "message sent successful!",
  icon: "success"
});
    }
    if (res.error){
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
         
    }
}
  return (
   <div>
   
    <div className="contact col-12" id="contactMe">
     
        <h1>Say Hello</h1>
        <p>
          Fill out the form below to get in touch with me. I'm always excited to <br />
          hear about new opportunities and i'll do my best to respond to your <br />
          inquiry right on time!!.
        </p>
      </div>
      <div className="contact2">
        <div className="row">
          <div className="col-4 col-md-4 col-lg-4">
   <a href="https://maps.app.goo.gl/ByBcRcBAzKQ9wwzq5"><FaLocationArrow/> Lagos,Nigeria</a>
    </div>
    <div className="col-4 col-md-4 col-lg-4">
          
           <a href='https://wa.me/2348144590363'><FaWhatsapp/>whatsapp</a>
        </div>
        <div className="col-4 col-md-4 col-lg-4">
          
           <a href="tel:+234-813-3467-8092"><FaPhone/>+234-813-3467-8092</a>
        </div>
    </div>
         </div>
    <section className="form"> 
    <form action={contactMe} >
   
      <h2>Contact me</h2>
       <div className="input-box">
            <label >Full name:</label>
            <input type="text" name="name" id="name" className="field" required />
            </div>
     <div className="input-box">
          <label>Email Address:</label>
          <input type="email" name="email" id="email" placeholder="input your email address" className="field" required/>
  </div>

 <div className="input-box">
   <label for="message" >Your message</label>
   <textarea  id="message"  name="message" className="form-control" required style={{ height:"150px" }}></textarea>
   </div>
   <button className="btn bg-primary">Send me message
     <FaEnvelope color="black"/>
   </button>
</form>
</section>
     

    </div>
   
  );
};

export default Contact;
