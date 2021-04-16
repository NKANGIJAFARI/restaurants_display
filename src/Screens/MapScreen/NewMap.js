import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import restaurants from '../../Data/data';

const MapContainer = (props) => {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

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
          onClick={() => console.log('You clicked me!')}
        />
      );
    });
  };

  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}>
      {DisplayMarkers()}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDHjI6jDmz8d9p_DDA1Biu3Y01iOvdRHdc',
})(MapContainer);

//The API Key here is not working due to the fact that
//the billing account isnt activated
