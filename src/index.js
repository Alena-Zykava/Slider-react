import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

import Slides from './components/slides/slides';
import Button from './components/button/button';
//import { dataSlides } from './constants';

const App = () => {
    const [left, getLeft] = useState(0);

    const handleClick = (way) => {
        console.log(way);
        if (way === 'left') {
            if ((left < 0)) {
              getLeft((num) => num + 200)  
            }            
        } else {
            if (left > -400) {
              getLeft((num) => num - 200)   
            }                       
        }
    }

    return (
        <div className='wrapperSlider'>
            <Button arrow={'<'}
                onClick={() => handleClick('left')}/>
            <Slides left={left}/>
            <Button arrow={'>'}
                onClick={() => handleClick('right')}/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
