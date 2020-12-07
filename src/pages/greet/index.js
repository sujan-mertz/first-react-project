import React, {Component} from 'react';

class GreetPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        // const address1 = this.props.address1;
        // const address2 = this.props.address2; //or
        const {address1,address2} = this.props;
        return(           
            <div align="center">
                <h2>This is Greeting from {address1}, {address2}.</h2>
                <h3>{`This is Greeting from ${address1}, ${address2}.`}</h3>
            </div>
        )
    }
}

export default GreetPage;