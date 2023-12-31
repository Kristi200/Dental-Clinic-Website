import React from 'react'
import { useMemo } from 'react'
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api'

const Maps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    });
    if(!isLoaded) return <div>Loading...</div>
    

    return (
        <GoogleMap zoom={13} center={{lat: 40.9420,lng: 19.6996}} mapContainerClassName='map-container'>
            <Marker position={{lat: 40.9420,lng:19.6996}}/>
        </GoogleMap>
    )
}

export default Maps
