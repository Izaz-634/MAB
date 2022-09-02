import React, { Component } from 'react';
import ThemeContext from './contexts/ThemeContext';
import Section from './Section';

class Main extends Component {
    state = {theme:false};

    render() {
        const {theme} = this.state;
        console.log({theme});
        return (
            <div>
                <ThemeContext.Provider value={{theme}}><Section></Section></ThemeContext.Provider>
            </div>
        );
    }
}

export default Main;