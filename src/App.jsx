import React from 'react'
import Section1 from './Components/Section1'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'

import Footer from './Components/Footer'
import Projects from './Pages/Projects'

const App = () => {
  return (
    <Router>
    <div>
      <NavBar/>
  
      <Routes>
      <Route path='/' element={ <Section1/>}></Route>
      <Route path='/home' element={ <Home/>}></Route>
      <Route path='/contact' element={ <Contact/>}></Route>
      <Route path='/Projects' element={ <Projects/>}></Route>
     </Routes>
    <Footer/> 
    </div>
   
    </Router>
    
  )
}

export default App