import {React, useEffect} from 'react'
import site1 from "../Image/site1.png"
import site2 from "../Image/site2.png"
import site3 from "../Image/site3.png"
import site4 from "../Image/devcode.png"
const Projects = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  return (
    <div>
      <div id="projects" style={{ textAlign: 'center', color: "white",paddingTop:"10vh" }}>
  <h2 style={{ color: "aqua" }}>My Projects</h2>
  <p style={{ color: "#cacad6" }}>Here are a few of my recent projects:</p>

  <div className="container">
    <div className="row g-4">
      
      {/* Project 1 */}
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card bg-dark text-light  shadow-lg border-0" data-aos="fade-up-left">
          <img src={site3} className="card-img-top" alt="Weather App" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "aqua" }}>Crypto Testnet Promo Website </h5>
            <p className="card-text" style={{ color: "#cacad6" }}>
             A Simple Crypto Testnet Promo Website,used REST API from CoinGecko to fetch live crypto market information. <br />
             A whitelist form to submit your wallet and email
            </p>
            <p style={{ fontSize: "0.9rem", color: "#8fd6ff" }}>
              <strong>Languages Used:</strong> JavaScript, React, Bootstrap
            </p>
            <a href="https://matrixcoin.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
              View Project
            </a>
            <a href="https://github.com/prosperplove/DASTELLA" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" >
              Source Code 
            </a>
          </div>
        </div>
      </div>

      
      {/* Project 2 */}
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card bg-dark text-light  shadow-lg border-0" data-aos="fade-up-left">
          <img src={site4} className="card-img-top" alt="Todo App" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "aqua" }}>Business portfolio website</h5>
            <p className="card-text" style={{ color: "#cacad6" }}>
             Business portfolio website for a tech startup,<br />Showcasing services renders by the company, their previous jobs. testimonies from clients and a contact page
            </p>
            <p style={{ fontSize: "0.9rem", color: "#8fd6ff" }}>
              <strong>Languages Used:</strong> Javascript, React, Tailwind
            </p>
            <a href="https://devcode-hub.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
              View Project
            </a>
            <a href="https://github.com/prosperplove" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Source Code
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="col-12 col-md-6 col-lg-6" data-aos="fade-up-left">
        <div className="card bg-dark text-light  shadow-lg border-0">
          <img src={site1} className="card-img-top" alt="Todo App" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "aqua" }}>Marketing E-commerce Website</h5>
            <p className="card-text" style={{ color: "#cacad6" }}>
             Clothes & Sneakers E-commerce Website, responsive to all screen sizes, Option to add to cart and a sellout payment page for total items bought.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#8fd6ff" }}>
              <strong>Languages Used:</strong>JavaScript, React, Bootstrap
            </p>
            <a href="https://dastellas.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
              View Project
            </a>
            <a href="https://github.com/prosperplove/Shopping-store" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Source Code
            </a>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card bg-dark text-light  shadow-lg border-0" data-aos="fade-up-left">
          <img src={site2} className="card-img-top" alt="Portfolio Website" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "aqua" }}>Filmmax</h5>
            <p className="card-text" style={{ color: "#cacad6" }}>
            A little Movie community, where talents connects together, An interactive event registration form, where you receive an instant email regarding your registration.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#8fd6ff" }}>
              <strong>Languages Used:</strong>JavaScript, React, Bootstrap
            </p>
            <a href="https://filmmaax.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
              View Project
            </a>
            <a href="https://github.com/prosperplove/Filmmax" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Source Code
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

    </div>
  )
}

export default Projects
