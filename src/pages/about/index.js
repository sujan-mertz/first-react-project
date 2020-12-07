import React, {Component} from 'react';
import GreetPage from '../greet';

class AboutPage extends Component{
    render(){
        return(
            <div align="center">
                <hr></hr>
                <h1>This is About Page.</h1>
                <p>This is a description.</p>

                <GreetPage address1="Newroad" address2="Kathmandu"/>
                <GreetPage address1="Sanepa" address2="Lalitpur"/>
                <GreetPage address1="Kalimati"/>
            </div>
        )
    }
}

export default AboutPage;