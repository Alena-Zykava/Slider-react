import React from 'react';
import { string, bool } from 'prop-types';
import './slide.scss';

const Slide = ({ title, image }) => {

    return (
        <div>
            <h2>{title}</h2>
            <div className='wrapperImage'>
                <img src={image} alt="Nature" />                
            </div>
        </div>
    )
};

Slide.propTypes = {
    title: string,
    image: string,
    isVisibly: bool
}
export default Slide;