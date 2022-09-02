import React from 'react';

const BoiledVerdict = ({temperature}) => {
    if (temperature>=100)return <p>Water will be Boiled</p>;
    else return <p>Water will not Boil</p>
};

export default BoiledVerdict;