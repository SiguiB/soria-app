import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '700px'
};

const center = {
    lat:23.284858034673874, 
    lng: -106.4437302736705
};


export default class Gmap extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyC10e3mUOBSChV0IiAb6DLJfGXX3GMT0Ws"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          markers={ {lat:23.284858034673874, lng: -106.4437302736705}}
        >
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}