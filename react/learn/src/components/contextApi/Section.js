import React from 'react';
import Content from './Content';

const Section = (props) => {
    const {theme} = props;
    return (
        <div>
            <h1>This is a section</h1>
            <Content theme={theme}></Content>
        </div>
    );
};

export default Section;