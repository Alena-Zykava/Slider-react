import React from 'react';
import { number, func } from 'prop-types';

import {dataSlides} from '../../constants';
import Slide from '../slide/slide';
import './slides.scss';

const Slides = ({left, onMouseDown, onMouseUp, onTouchEnd, onTouchStart}) => {
    
  const slidesItems = dataSlides.map((el) => {
      return <Slide
        key={el.title}
        title={el.title}
        image={el.image}
    />;
  });
        
  return (
      <div className='slides'
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchEnd={onTouchEnd}
          onTouchStart={onTouchStart}
        >
          <div className='wrapperSlides' style={{left: left}}>
             {slidesItems} 
          </div>      
    </div>
  );
};

Slides.propTypes = {
    left: number,
    onMouseDown: func,
    onMouseUp: func,
    onTouchEnd: func,
    onTouchStart: func
};

export default Slides;
