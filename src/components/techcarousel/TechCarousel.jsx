import React from 'react';
import './tech-carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const TechCarousel = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1500, min: 1000 },
      items: 3.5
    },
    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        <div className='card-carousel'>
          <img className='product--image' src={require('../../assets/python-logo-removebg-preview.png')} alt="product image" />
          <h2>Python</h2>
          <p>A good starting point for new game developers</p>
        </div>
        <div className='card-carousel'>
          <img className='product--image' src={require('../../assets/java-logo-removebg.png')} alt="product image" />
          <h2>Java</h2>
          <p>A good starting point for new game developers</p>
        </div>
        <div className='card-carousel'>
          <img className='product--image' src={require('../../assets/C++_logo-removebg.png')} alt="product image" />
          <h2>C++</h2>
          <p>A good starting point for new game developers</p>
        </div>
        <div className='card-carousel'>
          <img className='product--image' src={require('../../assets/c-sharp-removebg-preview .png')} alt="product image" />
          <h2>C#</h2>
          <p>A good starting point for new game developers</p>
        </div>
        <div className='card-carousel'>
          <img className='product--image' src={require('../../assets/javascript-logo.png')} alt="product image" />
          <h2>Javascript</h2>
          <p>A good starting point for new game developers</p>
        </div>
        <div className='card-carousel'>
          <img className='product--image' src={require('../../assets/unity-logo.png')} alt="product image" />
          <h2>Unity</h2>
          <p>A good starting point for new game developers</p>
        </div>
        <div className='card-carousel'>
          <img className='product--image' src={require('../../assets/gamemaker.png')} alt="product image" />
          <h2>GameMaker</h2>
          <p>A good starting point for new game developers</p>
        </div>
        <div className='card-carousel'>
          <img className='product--image' src={require('../../assets/tnt.png')} alt="product image" />
          <h2>TNT GS</h2>
          <p>A good starting point for new game developers</p>
        </div>
        <div className='card-carousel'>
          <img className='product--image' src={require('../../assets/panda3d.png')} alt="product image" />
          <h2>Panda 3D</h2>
          <p>A good starting point for new game developers</p>
        </div>
        <div className='card-carousel'>
          <img className='product--image' src={require('../../assets/rockstar.png')} alt="product image" />
          <h2>Rockstar</h2>
          <p>A good starting point for new game developers</p>
        </div>
      </Carousel>
    </div>
  )
}

export default TechCarousel;

