import React from 'react';
// import ImageSlider from '../Components/ImageSlider';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <div className='main-container'>
      <div style={{ width: '50%' }}>
        <div className='smallText'>Luxus und Leidenschaft Pur</div>
        <div className='largeText'>
          Exklusive <br /> Sportwagen &<br /> Luxusfahrzeuge
        </div>
        <div className='smallText'>
          <p>Finden Sie bei uns ihr Traumauto der Extraklasse.</p>
          <p>Erleben Sie das Beste im Luxus segment mit hervorragendem Service.</p>
        </div>
      </div>
      <div style={{ width: '50%' }}>
        {/* <ImageSlider /> */}
      </div>
    </div>
  );
};
