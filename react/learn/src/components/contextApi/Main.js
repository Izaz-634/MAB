import React, { Component } from 'react';
import Section from './Section';

class Main extends Component {
    state = {theme:true};

    render() {
        const {theme} = this.state;
        return (
            <div>
                <Section theme={theme}></Section>
            </div>
        );
    }
}

export default Main;