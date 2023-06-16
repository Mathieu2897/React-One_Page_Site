import React from 'react';
import './testimonios.css';
import testimony_1 from '../../assets/testimony-2.jpg'
import testimony_2 from '../../assets/testimony-3.jpg'
import testimony_3 from '../../assets/testimony-4.jpg'

export const Testimonios = () => {
  return (
    <div className='testimonios__section' id='testimonios'>
      <div className='testimonios__div'/>
      <div className='testimonios__info'>
        <h2>What is Fox-Tech Unlimited?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.</p>
      </div>
      <div className='testimonios__heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
      </div>
      <div className='testimonios__container'>
            <div className='testimonio__1'>
              <img src={testimony_1} className='image__1'></img>
              <div className='testimonios-img__div'/>
              <h3>Elena Nito</h3>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
            </div>
            <div className='testimonio__2'>
              <img src={testimony_2} className='image__2'></img>
              <div className='testimonios-img__div'/>
              <h3>Marta Caña</h3>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
            </div>
            <div className='testimonio__3'>
              <img src={testimony_3} className='image__3'></img>
              <div className='testimonios-img__div'/>
              <h3>Lola Mento</h3>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
            </div>
      </div>
    </div>
  )
}
export default Testimonios;