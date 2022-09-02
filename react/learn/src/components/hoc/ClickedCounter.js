import React from 'react';
import withCounter from './withCounter';

const ClickedCounter = (props) => {
    const {count,handleChange} =props;
    return (
        <div>
            <button onClick={handleChange}>Clicked {count} Times</button>
        </div>
    );
};

export default withCounter(ClickedCounter);