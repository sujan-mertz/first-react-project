import React, { Component } from 'react';
import ContactForm from './form';
import Address from './info';

class ContactPage extends Component{
    render(){
        return(
            <div align="center">
                <hr></hr>
                <ContactForm/>
                <Address address="Ratopul" phone="9841552112" email="abc@gmail.com"/>
                <Address address="Setopul" phone="4586565" email="xyz@gmail.com"/>
            </div>
        );
    }
}

export default ContactPage;