import React, { Component } from 'react';

class ToDoListPage extends Component
{
    constructor(props){
        super(props);
        this.state={
            name:"",
            list:[
                {
                    id:"",
                    name:"",
                    error:"",
                }
            ]

        }
    }
    handleInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleFormValidation=(e)=>{
        const error = {};
        if(this.state.name === "") error.name="Enter name";
        return error;
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const errors = this.handleFormValidation();
        // this.setState({
        //     //errors:errors
        //     errors
        // })
        this.setState(state=>({
            list:[...state.list, {name:this.state.name}],
            name:"",
            errors
            
        }))
        console.log(errors);
    }
    deleteItem=(e)=>{
        const list = [...this.state.list]; 
        // console.log(list);
        this.setState(state=>({
            list:[],
            
        }))
        // // Filter values and leave value which we need to delete 
        // const updateList = list.filter(item => item.id !== key); 
      
        // // Update list in state 
        // this.setState({ 
        //   list:updateList, 
        // }); 
    }
    // deleteItem(key){ 
    //     const list = [...this.state.list]; 
    //     console.log(key);
      
    //     //Filter values and leave value which we need to delete 
    //     const updateList = list.filter(list => list.id !== key); 
      
    //     // Update list in state 
    //     this.setState({ 
    //       list:updateList, 
    //     }); 
      
    //   } 
    render(){
        const {list, errors} = this.state;
        return(
            <div align="center">
                <h1>To Do List</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="name" onChange={this.handleInput}></input>
                        <input type="submit" value="Add"></input>
                        {errors?.name && <p>{errors.name}</p>}
                    </div>
                </form>

                {
                    list.map((list, i)=>{
                        return (
                            <span key={i} onClick={this.deleteItem}>{list.name}<br/></span>
                        )
                    })
                }
            </div>
        )
    }
}

export default ToDoListPage;