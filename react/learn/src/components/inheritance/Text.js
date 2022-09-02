import Emoji from '../inheritance/Emoji'


class Text extends Emoji{

    render(){
        const decoratedText = this.addEmoji('I love you','@@');
        
        return super.render(decoratedText);
    }

}

export default Text;