import React, { Component } from 'react';

class LoopPage extends Component
{
    constructor(props){
        super(props);
        this.state = {
            hobbies:['Football','Cycling','Singing','Dancing'],
            name:"",
            email:"",
            users:[
                {
                    id:1,
                    name:"Ram",
                    email:"ram@gmail.com"
                },
                {
                    id:2,
                    name:"hari",
                    email:"hari@gmail.com"
                },
                {
                    id:3,
                    name:"shyam",
                    email:"shyam@gmail.com"
                },
                {
                    id:4,
                    name:"sita",
                    email:"sita@gmail.com"
                },
            ]
        }
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const usersLength = this.state.users.length;
        console.log(usersLength);
        this.setState(state=>({
            users:[...state.users, {id:usersLength+1, name:this.state.name, email:this.state.email}]
        }))
    }
    render(){
        const {hobbies, users}  = this.state;
        return(
            <div>
                <h1>List:hobbies</h1>
                {
                    hobbies.map((hobby, i)=>{
                        return hobby;
                    })
                }

                <h2>List:users</h2>
                {
                    users.map((user, i)=>{
                        return (
                        <li key = {i}>{i}, {user.id}, {user.name}, {user.email}</li>
                        )
                    })
                }

                <h2>Table:users</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type='text' name='name' onChange={this.handleInput}></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type='text' name='email' onChange={this.handleInput}></input>
                    </div>
                    <div className="form-group">
                        <button type="submit">Add User</button>
                    </div>
                </form>
                <table border="1">
                    <tbody>
                    {
                        users.map((user, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LoopPage;