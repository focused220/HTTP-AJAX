import React, { Component } from 'react';
import axios from 'axios';
import './DisplayFriends.css'
import AddFriend from './AddFriend'

export default class DisplayFriends extends Component {
    constructor(){
        super();
        this.state = {
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
    render() { 
        return (
            <div>
            <AddFriend />
            <div className='all-friends'>
                {this.state.friends.map(
                friend => (
                    <div className="friend" key={friend.id}>
                        <h2>{friend.name}</h2>
                        <p>{friend.age}</p>
                        <address>{friend.email}</address>
                    </div>
                )
            )}
            </div>
            </div>
            
          );
    }
}
 
