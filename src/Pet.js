// This component will contain the sign up form for our user to sign up for our site
import React, {Component} from 'react';

class Pet extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: '',
      type: '',
      description: '',
      lat:'',
      lng:''

    }
    this.fieldChange = this.fieldChange.bind(this);
  }

  // field whatever the user is typing in to those input fields down below and save it in our state
  fieldChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log('Did I successfully field whatever the user is typing in to the form input? ', this.state[event.target.name]);
  } 

  // Once the user presses the Pet button, we are going to run this function which will take that information that the user signed up with and communicate with our server
  // to store that information in our database
  savePet = () => {
    // Grab the user's information from our state
    const type = this.state.type;
    const color = this.state.color;
    const description = this.state.description;
    const lat = this.state.lat;
    const lng = this.state.lng;


    // Create a user object to send to our server to store
    const pet = {
      type: type,
      color: color,
      description: description,
      lat: lat,
      lng: lng
    }
    //  console.log(user)
    // Communicate with the server so that the server can store this information in our database. 
    fetch('/pet', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pet)
    })

  }

  render() {
    return (
        
      <form id="petform">
        <input type="text"  value={this.state.color} name="color" placeholder="color of the animal..." onChange={this.fieldChange} />
        <input type="text" value={this.state.type} name="type" placeholder="type of the animal" onChange={this.fieldChange}/>
        <input type="text"  value={this.state.description} name="description" placeholder="description of what you saw" onChange={this.fieldChange}/> 
        <input type="text"  value={this.state.lat} name="lat" placeholder="latitude location" onChange={this.fieldChange}/>
        <input type="text" value={this.state.lng} name="lng" placeholder="longitude location" onChange={this.fieldChange}/>
        <button class="btn btn-primary" onClick={this.savePet}> Pet </button>  
      </form>

        

    )
  }

}

export default Pet;