import React from 'react';
import Clock from './Clock'
const ClockList = () => {
    const l1 =[1,2];
    return (
        <div>
            {
                l1.map(key=> <Clock key={key}></Clock>)
            }
        </div>
    );
};

export default ClockList;