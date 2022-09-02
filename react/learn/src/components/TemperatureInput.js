import React from 'react';

const scaleName={
    c:'Celsius',
    f:'Farenhiet',
}
const TemperatureInput = (props) => {
    const {temperature,handleChange,scale} =props;
    // console.log(scale);
    return (
        <div>
            <fieldset>
                <legend>Enter Temperature in {scaleName[scale]}</legend>
                <input type="text" value={temperature} onChange={(e)=>handleChange(e,scale)}/>
            </fieldset>
        </div>
    );
};

export default TemperatureInput;