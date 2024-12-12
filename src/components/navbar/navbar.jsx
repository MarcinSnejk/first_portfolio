import React from 'react'
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {

  return (
    
    <div className='main'>
      <div className='cointaner'>
        <ul>
         
         <li> <Link to="home" smooth={true} duration={10}>Home</Link> </li>
          
          <li> <Link to="about" smooth={true} duration={10}>About</Link> </li>
          
          <li> <Link to="projects" smooth={true} duration={10}>Projects</Link> </li>
          
        </ul>
      </div>
    </div>

  )
}

export default Navbar
