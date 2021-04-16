import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDHjI6jDmz8d9p_DDA1Biu3Y01iOvdRHdc',
})(MapContainer);
