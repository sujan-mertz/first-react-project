import React, { Component } from 'react';
import './home.css';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            number:2,
            fullname:"",
            email:"",
            errors:{},
     
        }
        
    }
    // incrementNumber = () => {
    //     let num = this.state.number;
          
    //     this.setState({
    //     number:num++
    //     });
    // }
    incrementNumber=()=> {
       
        this.setState(state=>({
            number: ++state.number
        }));
    }
    decrementNumber=()=> {
        this.setState(state=>({
            number: --state.number
        }));
    }
    handleInputChange=(e)=>{
        this.setState({
            number: e.target.value
        })
    }

    handleFormInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleFormValidation=()=>{
        let formError = {};
        const emailRegex = /^[A-Za-z0-9\.\-\_]+[\@]{1}[A-Za-z]+[\.]{1}[a-z]{2,}$/;
        if(this.state.fullname === "") formError.fullname="Enter Fullname";
        if(!this.state.email) formError.email="Enter email";
        if(!emailRegex.test(this.state.email)) formError.email="Invalid Email Address";
        return formError;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.handleFormValidation();
        this.setState({
            //errors:errors
            errors
        })
        console.log(errors);
        console.log(Object.keys(errors));
        console.log(Object.values(errors));
        if(Object.keys(errors).length){
            alert("there's an error")
        }else{
            alert("You are good to go")
        }

        // Object.keys(errors).length?"there's an error":alert("You are good to go")
     
    }
    render(){
        const {errors} = this.state;
        const emailError = `forminput ${errors && errors.email?'error':''}`  ;
       return (
            <div> 
                <h1>This is Home page.</h1>
                <h1>Increment/Decrement Value</h1>
                <div>
                    <button onClick={this.decrementNumber}>-</button>
                    <input type="text" value={this.state.number} onChange={this.handleInputChange}/>
                    <button onClick={this.incrementNumber}>+</button>
                </div>
                <h5>{this.state.number}</h5>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Full Name</label>

                        {/* <input type="text" name="fullname" onChange={this.handleFormInputChange}/> */}
                        <input type="text" name="fullname" onChange={this.handleFormInputChange} className={`forminput ${errors && errors.fullname?'error':''}`}/>
                        {errors?.fullname && <p>{errors.fullname}</p>}
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input type="text" name="email" onChange={this.handleFormInputChange} className={emailError}/>
                        {errors?.email && <p>{errors.email}</p>}
                    </div>
                  
                    <button type="submit">Submit</button>
                </form>
            </div>
       );
    }
}
export default HomePage;