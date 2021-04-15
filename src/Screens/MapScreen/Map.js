import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: '50px',
          width: '100%',
          height: 'calc(100% - 50px)',
        }}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233,
          }}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBP2U4W-gt6pOx1pZUa--W13RqU8ob_or8',
})(MapContainer);
