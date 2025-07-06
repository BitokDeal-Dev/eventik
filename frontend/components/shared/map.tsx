'use client'

import React from 'react';
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api'
import {googleMapStyles} from "@/lib/mapStyles";
import {AutoComplete} from "@/components/shared/auto-complete";
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

export const Map = ({isLoaded}:{isLoaded:boolean}) => {
    const {location: center} = useLocationStore()
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        // const bounds = new window.google.maps.LatLngBounds(center)
        // map.fitBounds(bounds)
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
        >
            <Marker  position={center}/>
        </GoogleMap>
    ) : (
        <></>
    )
};

