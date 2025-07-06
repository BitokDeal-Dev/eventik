'use client'

import React from 'react';
import {AutoComplete, Map, UserOnboardingStep} from "@/components/shared";
import {useJsApiLoader} from "@react-google-maps/api";

export const UserLocationPicker = () => {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY!

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_API_KEY,
        libraries: ['places']
    })

    return (
        <UserOnboardingStep
            title="Оберіть ваше місцезнаходження"
            description="Вкажіть, де ви знаходитесь або де хочете шукати події. Натисніть на карту, щоб обрати точку. Це допоможе показувати івенти, які відбуваються поруч."
            className='justify-center md:justify-between items-center mt-0'
            onClick={() => {
                // handle save
            }}
            other={<AutoComplete isLoaded={isLoaded}/>}
        >
            <Map isLoaded={isLoaded} />
        </UserOnboardingStep>

    );
};

