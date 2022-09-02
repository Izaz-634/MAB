import React from 'react';

const ClickedCounter = (props) => {
    const {count,countIncrement} = props;
    return (
        <div>
            <button onClick={countIncrement}>Clicked {count} times</button>
        </div>
    );
};

export default ClickedCounter;