import React from 'react';

const HoverCounter = (props) => {
    const {count,countIncrement,theme} = props;
    const style =theme?{backgroundColor:'green'}:null;
    return (
        <h1 style={style} onMouseOver={countIncrement}>Hovered {count} Times</h1>
    );
};

export default HoverCounter;