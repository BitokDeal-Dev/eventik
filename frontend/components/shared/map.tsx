'use client'

import React, {useState} from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api'
import {googleMapStyles} from "@/lib/mapStyles";
import {useLocationStore} from "@/modules/location/store/location.store";

const containerStyle = {
    width: '800px',
    height: '600px',
}

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    styles: googleMapStyles
}
const center = {
    lat: -3.745,
    lng: -38.523
}
export const Map = ({isLoaded}: { isLoaded: boolean }) => {
    const {setLocation} = useLocationStore()
    const [map, setMap] = useState(null)
    const [markerCenter, setMarkerCenter] = useState(center)
    const onLoad = React.useCallback(function callback(map: any) {
        // const bounds = new window.google.maps.LatLngBounds(center)
        // map.fitBounds(bounds)
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    const onMapCenterChange = () => {
        if (!map) return;

        const center = map.getCenter();
        if (center) {
            const lat = center.lat();
            const lng = center.lng();
            setMarkerCenter({lat, lng});
            setLocation({lat, lng});
        }
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
            onCenterChanged={onMapCenterChange}
        >
            <Marker position={markerCenter}/>
        </GoogleMap>
    ) : (
        <></>
    )
};

