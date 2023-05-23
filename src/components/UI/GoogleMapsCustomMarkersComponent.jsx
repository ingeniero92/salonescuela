import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMapsCustomMarkersComponent = () => {

    const defaultProps = {
        center: {
            lat: 40.3871201,
            lng: -3.7150471000000005
        },
        zoom: 12
    };

    return(
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCksfw0oCEJMGLnrfNLFGebuTzNxipgIX0" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={40.3871201}
                    lng={-3.7150471000000005}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
    
};

export default GoogleMapsCustomMarkersComponent;