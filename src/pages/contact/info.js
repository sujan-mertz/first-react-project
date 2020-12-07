import React, { Component } from 'react';

class Address extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {address,phone,email} = this.props;
        return(
            <div align="center">
                <p>{`Address:${address} Phone:${phone} Email:${email}`}</p>
                {/* <p>ABC Company Pvt. Ltd.</p>
                <p>Kathmandu, Nepal</p>
                <p>9875656522</p> */}
            </div>
        )
    }
}

export default Address;