import React from 'react';

class Button extends React.Component {

    shouldComponentUpdate(nextProps) {
        const { change, local } = this.props;
        const { change: nextChange, local: nextLocal } = nextProps;

        if (change === nextChange && local === nextLocal) {
            return false;
        }
        return true;
    }

    render() {
        // console.log("button redered");
        const { change, local, show ,btn} = this.props;
        // off rendering by return
        // if(btn)return null;
        const btnStyle = { padding: '15px', margin: '15px 30px' };
        return (
            <div>
                <button onClick={() => change(local)} style={btnStyle}>
                    {local !== 'bn-BD' ? 'Change to US' : 'Change to BD'}
                </button>
                {show && <h3>Conditional visible</h3>}
            </div>
        );
    }
}

export default Button;