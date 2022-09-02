import React from 'react';

const HoverCounter = (props) => {
    const {count,countIncrement} = props;
    return (
        <div>
            <h1 onMouseOver={countIncrement}>Hovered {count} Times</h1>
        </div>
    );
};

export default HoverCounter;