import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title:'JavaScript',
            textarea:'Type Here',
            library:'Vue Js',
            isAwesome: false,
        }
    }

    handleChange=(e)=>{
        if(e.target.type === "text"){
            this.setState({title:e.target.value})
        }
        else if(e.target.type === 'textarea'){
            this.setState({textarea:e.target.value})
        }
        else if(e.target.type === 'select-one'){
            this.setState({library:e.target.value})
        }
        else if(e.target.type === 'checkbox'){
            if(this.state.isAwesome ===true){
                this.setState({isAwesome:false})
            }else{
                this.setState({isAwesome:true})
            }
            
        }
        
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        const {title,textarea,isAwesome,library} = this.state;
        console.log(title,textarea,isAwesome,library);
    }
    render(){
        const {title,textarea,library,isAwesome} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={title} onChange={this.handleChange}/>
                <br />
                <br />
                <textarea value={textarea} onChange={this.handleChange}></textarea>
                <br /><br />
                <select value={library} onChange={this.handleChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue Js">Vue Js</option>
                </select>
                <br /><br />
                <input type="checkbox" checked={isAwesome} onChange={this.handleChange}/>
                <br /><br />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}


export default Form;