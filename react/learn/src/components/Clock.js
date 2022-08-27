import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), local: 'en-US' };
    }

    tick() {
        this.setState({ date: new Date() })
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    handleClick = (local) => {
        this.setState({ local: local })
    }

    render() {
        // console.log("Clock rendered");
        const { date, local } = this.state;
        return (
            <div>
                <h1>Time: {date.toLocaleTimeString(local)}</h1>
                {local === 'bn-BD' ? (
                    <Button change={this.handleClick} local="en-US" show={false} btn></Button>
                    ) : (
                    <Button change={this.handleClick} local="bn-BD" show btn={false}></Button>
                )}
            </div>
        );
    }
}

export default Clock;