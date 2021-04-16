import React from 'react';
import GoogleApiWrapper from './NewMap';
import restaurants from '../../Data/data';

const MapScreen = () => {
  return (
    <>
      <input type='text' placeholder='Search in restaurants' />
      <div
        style={{
          height: 'calc(100vh - 50px)',
          position: 'absolute',
          width: ' 100%',
          top: '50px',
        }}>
        <GoogleApiWrapper />
      </div>
    </>
  );
};

export default MapScreen;
