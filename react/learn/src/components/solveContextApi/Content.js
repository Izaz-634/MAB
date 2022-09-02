import React from 'react';
import ThemeContext from './contexts/ThemeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
const Content = () => {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {
                    (count,countIncrement)=>(
                        <ThemeContext.Consumer>
                            {
                                ({theme})=><HoverCounter count={count} countIncrement={countIncrement} theme={theme}></HoverCounter>
                            }
                        </ThemeContext.Consumer>
                    )
                }
            </Counter>
        </div>
    );
};

export default Content;

