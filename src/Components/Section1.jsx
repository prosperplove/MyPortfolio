import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Css/style.css'
import prosper from '../Image/Prosper.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import { Element } from 'react-scroll'
import { FaWhatsapp, FaLinkedin, FaTwitter, FaEnvelope, FaGithub, FaCertificate,} from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript,SiReact, SiBootstrap } from 'react-icons/si'
import { RiFileGifFill } from 'react-icons/ri'
import Animation from "../Pages/Animation"
import Projects from '../Pages/Projects'
const Section1 = () => {
  useEffect(()=>{

  AOS.init({duration:"3000"});

  },[])

   const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div>
   
        <div className="container-fluid" id='body'>
                <div className='row'>
                  <div className='col-12 col-md-6 col-lg-6'>
            <img src={prosper} alt="" />
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
            <div className='profile' style={{ margin:"65px" }}>
            <h1 >Hi i'm <span style={{ color:"aqua" }}>Chukwujekwu Prosper</span></h1>
            <p style={{  color: "#cacad6" }}> A Certified  <span className='title'>Front<span>end</span> Web<span>Developer</span> </span>,<br />
            Passionate about building visually stunning, user-friendly digital experience
             with a knack for turning ideas into responsive, performant websites.
              with expertise in <ol>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>JAVASCRIPT</span></li>
                <li><span>REACT.JS</span></li>
                <li><span>BOOTSTRAP</span></li>
              </ol>
            I thrives at the intersection of design and functionality-ensuring every pixel serves a purpose.</p>
            </div>
             <div className='button'>
               <Link to="/Projects" href="#"><button type="button" class="btn btn-light mx-5">View My Work</button></Link>
                <Link to="/Contact" href="#"><button type="button" class="btn btn-outline-light">Get in touch</button></Link>
             </div>
              <div className='social-media' style={{ padding:"5vh" }}>
          <a href="mailto:prosperplove@gmail.com" style={{ padding:"10px"}}><FaEnvelope size={30}/></a>
           <a href="https://ng.linkedin.com/in/chukwujekwu-prosper-nzoputa-378196267" style={{ padding:"10px"}}> <FaLinkedin size={30}/></a>
            <a href="https://x.com/properpLove" style={{ padding:"10px"}}><FaTwitter size={30}/></a>
             <a href="https://github.com/prosperplove" style={{ padding:"10px"}}><FaGithub size={30}/></a>
              <a href="https://wa.me/08144590363" style={{ padding:"10px"}}><FaWhatsapp size={30}/></a>
           </div>
              </div>
              
              </div>
            </div>

      <section className='section-2' id='skills'>
        <h1>My Tech <span>Stack</span></h1>
         <div className="container" data-aos="fade-up-right">
          <div className='row'>
           <div class="col-6 col-md-4 col-lg-4">
          <div class="cards">
              <SiHtml5 size={100} color='#E34F26'/>
       <h5>HTML</h5>
       <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{ width:"95%" }}>95%</div>
</div>
</div>
</div>
  <div class="col-6 col-md-4 col-lg-4">
     <div class="cards">
       <SiCss3 size={100} color='#1572B6'/>
       <h5>CSS</h5>
       <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{ width:"75%" }}>75%</div>
</div>

</div>
</div>
  <div class="col-6 col-md-4 col-lg-4">
   <div class="cards">
       <SiJavascript size={100} color='#F7DF1E'/>
   <h5>JAVASCRIPT</h5>
   <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{ width:"70%" }}>70%</div>
</div>

</div>
</div>
   <div class="col-6 col-md-4 col-lg-4">
     <div class="cards">
      <SiBootstrap size={100} color='#7952B8'/>
      <h5>BOOTSTRAP</h5>
      <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{ width:"85%" }}>85%</div>
</div>
 </div>
    </div>
     <div class="col-6 col-md-4 col-lg-4">
     <div class="cards">
       <RiFileGifFill size={100} color='#61DAFB'/>
      <h5>GIT</h5>
      <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{ width:"85%" }}>85%</div>
</div>
 </div>
    </div>
    
      <div class="col-6 col-md-4 col-lg-4 ">
 <div class="cards">
       <SiReact size={100} color='#61DAFB'/>
      <h5>REACT.JS</h5>
     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style={{ width:"75%" }}>75%</div>
</div>
</div>
</div>
</div>
   </div>
   </section>
     
   <div id='about' style={{ color:"white", textAlign:"center" }}>
            <h1 style={{ color:"aqua", fontSize:"2rem", fontFamily:"cursive" }} >About Me</h1>
           <p className='container'  style={{ fontSize:"1.2rem",  color: "#cacad6" }}>i'm a frontend developer with a passion for crafting clean, responsive, and accessible web interfaces. i specialize in building seamless user experiences using modern tools like React, Bootstrap and Javascript 
         With a strong eye for design and details, i bridge the gap between design and code, turning concepts into real,functional products. i enjoy learning new technologies, solving UI challenges, and contributing to projects that make the web better. When i'm not coding, i'm probably exploring design trends, tweaking side projects, or helping others level up in tech.</p>
         
   </div>
          <Projects/>
   <div id="container" style={{ textAlign:'center',color:"white" }} className='my-process' >
 <h1 style={{ color:"aqua" }}>My Development Process</h1>
   <p style={{ color: "#cacad6" }}>A streamlined approach to deliver high-quality results on time and within budgets</p>
       <div className="row">
          <div className="col-12 col-md-6 col-lg-6" id='process'>
            <div  id='circle'>
            1
            </div>
            <h1>Discovery & planning</h1>
            <p>We discuss your requirements, goals, and create a detailed project plan.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-6" id='process'>
           <div  id='circle'>
            2
            </div>
            <h1>Design & development</h1>
            <p>I create mockups and develop your projects using modern technologies.</p>
          </div>
            <div className="col-12 col-md-6 col-lg-6" id='process'>
            <div  id='circle'>
            3
            </div>
            <h1>Testing & Refinement</h1>
            <p>Through testing across devices and browsers with refinements based on feedbacks</p>
          </div>
           <div className="col-12 col-md-6 col-lg-6" id='process'>
           <div  id='circle'>
            4
            </div>
            <h1>Launch & Support</h1>
            <p>Projects development and ongoing supports ensure everything runs smoothly.</p>
          </div>
         </div>
   </div>
   <div id="container" style={{ textAlign:"center"}} className='certificate'>
       <h1 style={{ color:"aqua" }}> Certification</h1>
        <h1 style={{ color:" #cacad6", fontSize:"1.5rem"}}>Web Development Certification</h1>
      <p style={{ color:" #cacad6" }}><FaCertificate/> New Horizon Computer Center, Ikeja lagos state, Nigeria.</p>
    </div>
<Animation/>
    </div>
  )
}

export default Section1