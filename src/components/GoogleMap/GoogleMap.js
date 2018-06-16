import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import Loader from '../Loader/Loader'

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{
            lat: 55.752341,
            lng: 37.426871
          }}
      >
        <Marker position={{
            lat: 55.752341,
            lng: 37.426871
          }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_MAPS),
  language: 'ru',
  loaderComponent: <Loader />
})(MapContainer)