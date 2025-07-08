'use client'

import React, {useEffect, useState} from 'react';
import {AutoComplete, Map, UserOnboardingStep} from "@/components/shared";
import {useJsApiLoader} from "@react-google-maps/api";
import {getBrowserLocation} from "@/lib/getUserGeo";
import {
    ILocationType, useLocationStore,
} from "@/modules/location/store/location.store";

export const UserLocationPicker = () => {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY!
    const [userLocation, setUserLocation] = useState<ILocationType | null>()
    const {setLocation} = useLocationStore()
    const [isLoading, setIsLoading] = useState(true)
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_API_KEY,
        libraries: ['places']
    })

    useEffect(() => {
        const getUserLocation = async () => {
            try {
                const userLocation = await getBrowserLocation()
                setUserLocation(userLocation as ILocationType)
                setLocation(userLocation as ILocationType)
            } catch (e) {
                setUserLocation(e as ILocationType)
                setLocation(e as ILocationType)
            }
        }
        getUserLocation()
    }, [setLocation]);

    useEffect(() => {
        if (userLocation)
            setIsLoading(false)
    }, [userLocation]);

    return (
        <UserOnboardingStep
            title="Оберіть ваше місцезнаходження"
            description="Вкажіть, де ви знаходитесь або де хочете шукати події. Натисніть на карту, щоб обрати точку. Це допоможе показувати івенти, які відбуваються поруч."
            className='justify-center gap-10 xl:gap-0 xl:justify-between items-center mt-0 flex-wrap'
            onClick={() => {
                // handle save
            }}
            other={<AutoComplete isLoaded={isLoaded}/>}
        >
            {isLoading && !isLoaded ? <p>loading...</p> :
                <Map center={userLocation!}/>
            }
        </UserOnboardingStep>

    );
};

