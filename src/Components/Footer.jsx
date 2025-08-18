import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
       <footer> 
        <div className='footer'>
        <h1>Let<span style={{ color:"red" }}>'</span>s work togeth<span style={{ color:"red" }}>er</span></h1>
        <p>Open for <span style={{ fontWeight:"bold" }}>freelance projects, internships</span> & <span style={{ fontWeight:"bold" }}>long term jobs</span></p>
            <div className='fot'>
        <Link to="/Contact" href="#"><button type="button" class="btn btn-outline-dark">Contact Me</button></Link>
            </div>
                </div>
        </footer>
    </div>
  )
}

export default Footer