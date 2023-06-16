import React from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/Fox-Tech-Logo.png';

export const Navbar = () => {
  return (
    <div className='page__navbar'>
      <div className='page__navbar-links'>
          <div className='page__navbar-links_logo'>
            <img src={logo}/>
          </div>
          <div className='page__navbar-links_container'>
            <p><a href='#DatosEmpresa'>Home</a></p> 
            <p><a href='#testimonios'>Testimonies</a></p>  
            <p><a href='#beneficios'>Benefits</a></p>  
            <p><a href='#tecnologias'>Technologies</a></p>  
            <p><a href='#contacto'>Contact Us</a></p>   
          </div>

      </div>
       
    </div>
  )
}
export default Navbar;