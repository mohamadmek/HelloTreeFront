import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 import React, {Component} from 'react';
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} style={{position: 'relative', height: '250px'}}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('')
})(MapContainer)