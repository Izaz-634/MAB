import React from 'react';

class Emoji extends React.Component{
    addEmoji = (text,emoji)=> `${emoji} ${text} ${emoji}`;

    render(override){
        let text = 'I love you';
        if(override) text = override;

        return <div>{text}</div>;
    }

}

export default Emoji;