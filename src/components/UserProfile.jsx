import React, { Component } from 'react';

// rcc  <--- command (reactClassComponent)
// adding (export default)
export default class UserProfile extends Component {
    // Constructor component function 
    constructor(props) {
        super(props); // super() calls the class we inherit functionality from
        // component property that stores variables
        //this.state (this is the initial value for the property)
        this.state = { name: 'Alex' };

        // last step --> DON'T FORGET TO BIND
        this.changeName = this.changeName.bind(this)
    }

    // fixed function ✅
    changeName() {
        // this.setState is updating the previous value of state
        this.setState({name: "Charlie"});
    }

    // render component function
    render() {

        // Another way to access value from the sate (similar to event.target.elements.name)
        const name = this.state.name;


        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p> {/* Accessing state*/}
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}