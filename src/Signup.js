// This component will contain the sign up form for our user to sign up for our site
import React, {Component} from 'react';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    }
  }

  // Record whatever the user is typing in to those input fields down below and save it in our state
  recordChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log('Did I successfully record whatever the user is typing in to the form input? ', this.state[event.target.name]);
  } 

  // Once the user presses the signup button, we are going to run this function which will take that information that the user signed up with and communicate with our server
  // to store that information in our database
  signupUser = () => {
    // Grab the user's information from our state
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;

    // Create a user object to send to our server to store
    const user = {
      name: name,
      email: email,
      password: email
    }

    // Communicate with the server so that the server can store this information in our database. 
    fetch('/signup', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  }

  render() {
    return (
      <form>
        <input type="email" name="email" placeholder="Type your email..." onChange={this.recordChange} />
        <input type="text" name="name" placeholder="Full name" onChange={this.recordChange}/>
        <input type="password" name="password" placeholder="Password..." onChange={this.recordChange}/> 
        <button type="submit"> Signup </button>  
      </form>

    )
  }

}

export default Signup;