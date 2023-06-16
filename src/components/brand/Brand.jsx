import React from 'react'
import './brand.css'
import Activision from '../../assets/Activision_Logo-removebg-preview.png'
import PS4 from '../../assets/ps4-logo-removebg-preview.png'
import Electronic_Arts from '../../assets/ea-sport-logo-removebg-preview.png'
import Ubisoft from '../../assets/ubisoft-logo-removebg-preview (1).png'
import Nintendo from '../../assets/nintendo_logo-removebg-preview.png'


export const Brand = () => {
  return (
    <div className='datos-empresa_brand'>
        <div>
            <img src={Activision}/>
        </div>
        <div>
            <img src={Nintendo}/>
        </div>
        <div>
            <img src={PS4}/>
        </div>
        <div>
            <img src={Ubisoft}/>
        </div> 
        <div className='EA-logo'>
            <img src={Electronic_Arts}/>
        </div> 
    </div>
  )
}

export default Brand;
