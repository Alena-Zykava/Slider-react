import React from 'react';
import { number } from 'prop-types';

import {dataSlides} from '../../constants';
import Slide from '../slide/slide';
import './slides.scss';

const Slides = ({left}) => {
    
  const slidesItems = dataSlides.map((el) => {
      return <Slide
        key={el.title}
        title={el.title}
        image={el.image}
    />;
  });
        
  return (
      <div className='slides'>
          <div className='wrapperSlides' style={{left: left}}>
             {slidesItems} 
          </div>      
    </div>
  );
};

Slides.propTypes = {
    left: number
};

export default Slides;
