const Text = ({addEmoji,addBracket}) => {
    let text ='I love you my future';
    if(addEmoji) text=addEmoji(text,'❤️');
    if(addBracket) text = addBracket(text);

    return text;
};

export default Text;