import React from 'react';
import './datosEmpresa.css';
import AIGames from '../../assets/datosEmpresa-bg-removebg-preview.png';



export const DatosEmpresa = () => {
  return (
    <div className='datos-empresa_section' id='DatosEmpresa'>
        <div className='datos-empresa_content'>
            <h1 className='gradient__text'>Welcome to our website, the best place in the world for gaming</h1>
            <p>Fox-Tech Unlimited is a leading gaming company dedicated to delivering exhilarating video games that redefine virtual athleticism. With a laser focus on precision, realism, and immersive gameplay, we excel at creating immersive experiences that bring the excitement of the sporting world to life.</p>
        </div>
        <div className='datos-empresa-image'>
            <img src={AIGames}/>
        </div>    
    </div>
  )
}
export default DatosEmpresa;