import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/style.css'
const NavBar = () => {
  return (
    <div style={{ paddingTop:'60px' }}>
      <nav className="navbar">
    <div className="logo" style={{ color:"white", fontWeight:"bold",fontSize:"2rem" }}> 
       <Link to="/?section=body" class="navbar-brand">PORTFOLIO</Link></div>
       
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <ul className="nav-links">
     <li class="nav-item">
          <Link to="/?section=skills" class="nav-link active">Skills</Link>
        </li>
       <li class="nav-item">
         <Link to="/?section=about" class="nav-link active">About</Link>
       </li>
        <li class="nav-item">
          <Link to="/Projects" class="nav-link" href="#">Projects</Link>
       </li>
         <li class="nav-item">
          <Link to="/Contact" class="nav-link" href="#">Contact</Link>
        </li>
    </ul>
  </nav>
    </div>
  )
}

export default NavBar
