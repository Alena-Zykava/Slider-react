import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

import Slides from './components/slides/slides';
import Button from './components/button/button';
import {WIDTH_SLIDER, MAX_SHIFT_SLIDE} from './constants';

const App = () => {
    const [left, getLeft] = useState(0);

    useEffect(() => {
        
    })

    const handleClick = (way) => {
        if (way === 'left') {
            if ((left < 0)) {
              getLeft((num) => num + WIDTH_SLIDER)  
            }            
        } else {
            if (left > MAX_SHIFT_SLIDE) {
              getLeft((num) => num - WIDTH_SLIDER)   
            }                       
        }
    }
    let startPoint = 0;
    let finishPoint = 0;

    const handleMouseDown = (e) => {
        startPoint = e.pageX;
        e.preventDefault();
    }

    const handleMouseUp = (e) => {
        finishPoint = e.pageX;
        const difference = startPoint - finishPoint;
        if (difference > 0) {
            handleClick('right');
        } else if (difference < 0) {
            handleClick('left');            
        }
        e.preventDefault();
    }

    const handleTouchStart = (e) => {
        startPoint = e.changedTouches[0].pageX;
    }

    const handleTouchEnd = (e) => {
        finishPoint = e.changedTouches[0].pageX;
        const difference = startPoint - finishPoint;
        if (difference > 0) {
            handleClick('right');
        } else if (difference < 0) {
            handleClick('left');            
        }
    }


    return (
        <div className='wrapperSlider'>
            <Button arrow={'<'}
                onClick={() => handleClick('left')}/>
            <Slides left={left}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart }
                onTouchEnd={ handleTouchEnd}/>
            <Button arrow={'>'}
                onClick={() => handleClick('right')}/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
