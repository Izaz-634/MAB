import React from 'react';
import withCounter from './withCounter';

const HoverCounter = (props) => {
    const {count,handleChange} = props;
    return (
        <div>
            <h1 onMouseOver={handleChange}>Hovered {count} times</h1>
        </div>
    );
};

export default withCounter(HoverCounter);