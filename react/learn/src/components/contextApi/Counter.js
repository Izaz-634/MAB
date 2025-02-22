import React from 'react';

export default class Counter extends React.Component{
    state ={ count:0, }

    countIncrement = ()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    }

    render(){
        const {render} = this.props;
        const {count} = this.state;
        return render(count,this.countIncrement);
    }
}