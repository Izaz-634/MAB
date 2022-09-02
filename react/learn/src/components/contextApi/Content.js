import React from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
const Content = (props) => {
    const {theme} = props;
    return (
        <div>
            <h1>This is a content</h1>
            <Counter render={(count, countIncrement) => <HoverCounter count={count} countIncrement={countIncrement} theme={theme}></HoverCounter>}>
            </Counter>
        </div>
    );
};

export default Content;

