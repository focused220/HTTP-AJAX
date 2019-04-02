import React, { Component } from 'react';
import axios from 'axios';
import DisplayFriends from './DisplayFriends';

class AddFriend extends Component {
    constructor(){
        super();
        this.state ={
            name: '',
            age: '',
            email: '',
        }
    }

    addFriend = (e) => {
        e.preventDefault();
        this.setState({
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        });
        axios.post('http://localhost:5000/friends',{
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }).then((res)=> (console.log(res), this.setState({
            name:'',
            age:'',
            email:''
        }))
            )
        console.log(this.state.name, this.state.age, this.state.email)
    }
    
    onChangeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
        
}

    render() { 
        return (
            <div className='new-friend'>
                <form onSubmit={this.addFriend}>
                    <input type='text' name='name' placeholder='FirstName LastName' value={this.state.name} onChange={this.onChangeHandler}></input>
                    <input type='text' name='age' placeholder='Age' value={this.state.age} onChange={this.onChangeHandler}></input>
                    <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.onChangeHandler}></input>
                    <button type='submit' name='submit-button'>Add Friend</button>
                </form>
            </div>
          );
    }
}
 
export default AddFriend;