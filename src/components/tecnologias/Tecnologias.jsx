import React from 'react';
import './tecnologias.css';
import neonController from '../../assets/neon-controller-removebg-preview.png'


export const Tecnologias = () => {
  return (
    <div className='tecnologias__section' id='tecnologias'>
        <div className='tecnologias__image'>
          <img src={neonController}/>
        </div>
        <div className='tecnologias__content'>
          <h1 className='gradient__text'>The best technologies in the market available to you!</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
        </div>
        
    </div>
  )
}
export default Tecnologias;