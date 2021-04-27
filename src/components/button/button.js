import React from 'react';
import { string, func } from 'prop-types';

const Button = ({arrow, onClick}) => {
    return <button onClick={onClick}>{arrow}</button>
}

Button.propTypes = {
    arrow: string,
    onClick: func
}

export default Button;