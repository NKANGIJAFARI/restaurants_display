import Map, { GoogleApiWrapper } from './Map';
import React from 'react';
import { MapContainer } from './Map';

const MapScreen = () => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search in restaurants'
        // onChange={searchProducts}
      />
      <Map />
    </div>
  );
};

export default MapScreen;
