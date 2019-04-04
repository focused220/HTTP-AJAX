import React, { Component } from 'react';
import axios from 'axios';
import './DisplayFriends.css'


export default class DisplayFriends extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            age:'',
            email:'',
            friends: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/friends')
        .then(res => {
            console.log(res.data)
            this.setState(
                {friends: res.data}
            )
            })
    }

    onChangeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})        
}
    makeFriend = (e) =>{
        e.preventDefault();
        let friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        };
        axios.post('http://localhost:5000/friends',friend)
        .then((res)=> (console.log(res)), this.setState(prevState => {
            return({
                name:'',
                age:'',
                email:'',
                friends: [...prevState.friends,friend],
        })}))
           
    }

    updateFriend = (name, age, email, id) => {  
        console.log('update friend ' + id);
        const form = document.querySelector('.manage-friends');
        let friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        };        
        form.name.value = name;
        form.age.value = age;
        form.email.value = email;

        form.setAttribute('onChange', `${null}`);

        axios.put(`http://localhost:5000/friends/${id}`, friend).then((res) => console.log(res));
        
    }

    deleteFriend = (id) => { 
        axios.delete(`http://localhost:5000/friends/:id=${id}`).then(res=> console.log(res))
    }

    render() { 
        return (
            <div>
                <div className='new-friend'>
                    <form className='manage-friends' onSubmit={this.makeFriend}>
                        <input type='text' name='name' placeholder='FirstName LastName' value={this.state.name} onChange={this.onChangeHandler}></input>
                        <input type='text' name='age' placeholder='Age' value={this.state.age} onChange={this.onChangeHandler}></input>
                        <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.onChangeHandler}></input>
                        <button type='submit' name='submit-button'>Add Friend</button>
                    </form>
                </div>
            <div className='all-friends'>
                {this.state.friends.map(
                friend => (
                    <div className="friend" key={friend.id}>
                        <h2>{friend.name}</h2>
                        <p>{friend.age}</p>
                        <address>{friend.email}</address>
                        <form>
                            <button type='buttton' id={`U-${friend.id}`} name='update' onClick={(e)=> (e.preventDefault(),this.updateFriend(friend.name, friend.age, friend.email,friend.id))}>Update</button>
                            <button type='button' id={`D-${friend.id}`}name='delete' onClick={(e) => (e.preventDefault(),this.deleteFriend(friend.id))}>Delete</button>
                        </form>
                    </div>
                )
            )}
            </div>
            </div>
            
          );
    }
}
 
