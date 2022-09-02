import React from 'react';
import { convert, toCelsius, toFarenhiet } from '../lib/Convert';
import BoiledVerdict from './BoiledVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component{

    state = {
        temperature:'',
        scale:'c',
    }
    handleChange = (e,scale)=>{
        // console.log(scale);
        this.setState({
            temperature:e.target.value,
            scale
        })
    }
    render(){
        const {temperature,scale} = this.state;
        
        const celsius =scale==='f'?convert(temperature,toCelsius):temperature;
        const farenhiet = scale==='c'?convert(temperature,toFarenhiet):temperature;
        return(
            <div>
                <TemperatureInput scale="c" temperature={celsius} handleChange={this.handleChange}></TemperatureInput>
                <TemperatureInput scale="f" temperature={farenhiet} handleChange={this.handleChange}></TemperatureInput>
                <BoiledVerdict temperature={parseFloat(temperature)}></BoiledVerdict>
            </div>
        )
    }
}