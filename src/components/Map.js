import React from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api'


const MapContainer = () => {

    const mapStyles = {
        width: '22%',
        height: '28%',
        position: 'absolute'
    };

    const defaultCenter = {
        lat: 16.25049000723698, lng: 77.36485465756208
    }

    const locations = [
        {
            name: "Gov",
            location: {
            lat: 16.25049000723698,
            lng: 77.36485465756208
            },
        },
    ];

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyDSsAVdRoCh4OFPROmCU7MQ8frJBPP6h8k'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={defaultCenter}
            >
            {
                locations.map(item => {
                    return (
                        <Marker key={item.name} position={item.location} onClick={() => window.open("https://www.google.com/maps/place/Government+Engineering+College+Raichur/@16.250181,77.3614858,16z/data=!4m9!1m2!2m1!1sGovernment+Engineering+College+Raichur,+camp,+Yermarus,+Karnataka+584135!3m5!1s0x3bc9d1428458ff9b:0xbed489e863c13fc2!8m2!3d16.2501192!4d77.3648332!15sCkhHb3Zlcm5tZW50IEVuZ2luZWVyaW5nIENvbGxlZ2UgUmFpY2h1ciwgY2FtcCwgWWVybWFydXMsIEthcm5hdGFrYSA1ODQxMzWSARJnb3Zlcm5tZW50X2NvbGxlZ2U", '_blank')}/>
                    )
                })
            }  

            </GoogleMap>
            
        </LoadScript>
    )
};

export default MapContainer;

