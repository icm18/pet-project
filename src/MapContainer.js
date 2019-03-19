import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
const mapStyles = {
  width: '50%',
  height: '50%',
  positon: 'bottom right'
  

};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  

render() {
  let petsFilled = false;
  if(this.props.pets.length>0){
  	 petsFilled = true;
  }
  if (!petsFilled) {
  	return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 34, lng: -118}}
      >
         </Map>
    )
  } else {
  return (<Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 34, lng: -118}}
      >
      {console.log(this.props.pets)}
       {this.props.pets.map(pet => 
              
        <Marker
          onClick={this.onMarkerClick}
          name={pet.description}
          petColor={pet.color}
          petType={pet.type}
          position={{lat:pet.lat, lng:pet.lng}}
        />
       )}
        { <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.petColor}</h4>
            <h4>{this.state.selectedPlace.petType}</h4>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
          
       } 
   </Map>
)
  }
}
  
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyANcs_TGFKAujvJ-RLhS88gUzKCN2-lHps'
})(MapContainer);

