import React from 'react';
import { Beneficios,Contacto,DatosEmpresa,Navbar,Tecnologias,Testimonios,Brand,TechCarousel} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'> 
          <div className='gradient__bg'>
            <Navbar/>
            <DatosEmpresa/>
            </div>
        <Brand/>
        <Testimonios/>
        <Beneficios/>
        <Tecnologias/>
        <TechCarousel/>
        <Contacto/>  
    </div>
  )
}

export default App;
