import { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import restaurants from '../../Data/data';

const MapContainer = (props) => {
  const [selectedCenter, setSelectedCenter] = useState(null);

  /* Whenever the marker is clicked, it will update the state with the 
  position of the clicked marker and we shall show info of the restaurant
  located in that area */
  {
    selectedCenter && (
      <InfoWindow
        onCloseClick={() => {
          setSelectedCenter(null);
        }}
        position={{
          lat: selectedCenter.lat,
          lng: selectedCenter.lng,
        }}>
        <h2>This is the place</h2>
      </InfoWindow>
    );
  }

  /* Each restaurant object has a location and this will be used to 
  dynamically update the map with markers after iterating throught the 
  restaurants*/

  const DisplayMarkers = () => {
    return restaurants.map((restaurant, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: restaurant.location.latitude,
            lng: restaurant.location.longitude,
          }}
          onClick={(e) => {
            console.log(e);
            setSelectedCenter(e.mapCenter);
          }}
        />
      );
    });
  };

  /* Our map will be exactly the size of its container and so its size and positioning 
   will be customised on its parent element
  */
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: 25.2048, lng: 55.2708 }}>
      {DisplayMarkers()}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDHjI6jDmz8d9p_DDA1Biu3Y01iOvdRHdc',
})(MapContainer);

//The API Key here is not working due to the fact that
//the billing account isnt activated
