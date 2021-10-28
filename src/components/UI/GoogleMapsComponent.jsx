import React, {useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const googleMapsApiKey="AIzaSyCksfw0oCEJMGLnrfNLFGebuTzNxipgIX0a"; // TODO

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 40.408457,
    lng: -3.709947
};

function MyComponent() {

    const [isOpen, setIsOpen] = useState(false);

    function clickInfoWindow(){
        setIsOpen(false);
        setIsOpen(true);        
    }

    return (
    <LoadScript
        googleMapsApiKey={googleMapsApiKey}
    >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            onLoad = { () => clickInfoWindow()}
        >
            <Marker
                key={1}
                position={{ lat: 40.408457, lng: -3.709947 }}
                label={"Nunca Nadie Nada No"}
                onClick={() => clickInfoWindow()}
            >
                {isOpen && (
                    <InfoWindow 
                        onCloseClick={() => setIsOpen(false)}
                    >
                        <div className="infoWindow">
                            <span className="infoWindow-title">Nunca Nadie Nada No</span>
                            <span>Calle Arganzuela Nº9</span>
                            <span>Local Derecho</span>
                            <span>28005, Madrid</span>
                            <a href="https://goo.gl/maps/hbXcyPPvaogfdhYk8">Ver en Google Maps</a>
                        </div>
                    </InfoWindow>
                )}
            </Marker>
        </GoogleMap>
    </LoadScript>
    )
}

export default MyComponent;