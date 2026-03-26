import React from 'react'
import site from "../Image/site.png"
import site2 from "../Image/site2.png"
import site3 from "../Image/site3.png"
import site4 from "../Image/site4.png"
import devcode from "../Image/devcode.png"
import sg from "../Image/sg.png"

const Projects = () => {
  return (
    <div>
      <div id="projects" style={{ textAlign: 'center', color: "white",paddingTop:"10vh" }}>
  <h2 style={{ color: "aqua" }}>My Projects</h2>
  <p style={{ color: "#cacad6" }}>Here are a few of my recent projects:</p>

  <div className="container">
    <div className="row g-4">
      
        {/* Project 2 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card bg-dark text-light  shadow-lg border-0">
          <img src={site4} className="card-img-top" alt="Todo App" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "aqua" }}>Web3 Application</h5>
            <p className="card-text" style={{ color: "#cacad6" }}>
            Web3/Crypto trading web application (flick UI)
            </p>
            <p style={{ fontSize: "0.9rem", color: "#8fd6ff" }}>
              <strong>Languages Used:</strong>React, Tailwind, JavaScript,Motion
            </p>
            <a href="https://cryptonaviapp.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
              View Project
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Source Code
            </a>
          </div>
        </div>
      </div>

       {/* Project 3 */}
          <div className="col-12 col-md-6 col-lg-4">
        <div className="card bg-dark text-light  shadow-lg border-0">
          <img src={devcode} className="card-img-top" alt="Todo App" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "aqua" }}>Buisness Websiness</h5>
            <p className="card-text" style={{ color: "#cacad6" }}>
           A tech startup Porfolio website for Devcode Hub
            </p>
            <p style={{ fontSize: "0.9rem", color: "#8fd6ff" }}>
              <strong>Languages Used:</strong> React,Tailwindcss, Javascript
            </p>
            <a href="https://devcode-hub.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
              View Project
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Source Code
            </a>
          </div>
        </div>
      </div>
         
      {/* Project 1 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card bg-dark text-light  shadow-lg border-0">
          <img src={site3} className="card-img-top" alt="Weather App" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "aqua" }}>Crypto Testnet Promo Website </h5>
            <p className="card-text" style={{ color: "#cacad6" }}>
             A Simple Crypto Testnet Promo Website,used CoinGecko Api to fetch live crypto market information. 
            </p>
            <p style={{ fontSize: "0.9rem", color: "#8fd6ff" }}>
              <strong>Languages Used:</strong> JavaScript, React
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
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card bg-dark text-light  shadow-lg border-0">
          <img src={site} className="card-img-top" alt="Todo App" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "aqua" }}>E-commerce Website</h5>
            <p className="card-text" style={{ color: "#cacad6" }}>
             Clothes & Sneakers E-commerce Website
            </p>
            <p style={{ fontSize: "0.9rem", color: "#8fd6ff" }}>
              <strong>Languages Used:</strong> HTML, CSS, JavaScript, React
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
       <div className="col-12 col-md-6 col-lg-4">
        <div className="card bg-dark text-light  shadow-lg border-0">
          <img src={sg} className="card-img-top" alt="Todo App" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "aqua" }}>Company Website</h5>
            <p className="card-text" style={{ color: "#cacad6" }}>
            Company website for Salkeluz Group Of Companies, Shows the company portforlio and contact information
            </p>
            <p style={{ fontSize: "0.9rem", color: "#8fd6ff" }}>
              <strong>Languages Used:</strong> Wordpress
            </p>
            <a href="http://salkeluzgroup.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
              View Project
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Source Code
            </a>
          </div>
        </div>
      </div>
  
      {/* Project 5 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card bg-dark text-light  shadow-lg border-0">
          <img src={site2} className="card-img-top" alt="Portfolio Website" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "aqua" }}>Filmmax</h5>
            <p className="card-text" style={{ color: "#cacad6" }}>
            A Movie community, where talents connects together
            </p>
            <p style={{ fontSize: "0.9rem", color: "#8fd6ff" }}>
              <strong>Languages Used:</strong> HTML, CSS, JavaScript, React, Bootstrap
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
