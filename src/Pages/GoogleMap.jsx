/* eslint-disable react/prop-types */
 
 
import GoogleMapReact from 'google-map-react';
import { googleApiKey } from '../utility/googleApikey';
import { Helmet } from 'react-helmet-async';
//different-component
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div>
      <Helmet><title>Google Map</title></Helmet>
      <h3>GOOGLE MAP</h3>
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:googleApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </div>
  );
};

export default GoogleMap;