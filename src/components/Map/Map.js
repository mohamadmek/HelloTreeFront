import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 import React, {Component} from 'react';
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} style={{position: 'relative', height: '240px'}}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('')
})(MapContainer)