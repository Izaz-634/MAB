import React from 'react';

const Features = (props) => {
    console.log(props.features);
    return (
        <div>
            <ul>
                {props.features.map(ft => {
                    return(
                        <div>
                            <li>{ft.description}: {ft.value}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
};

export default Features;