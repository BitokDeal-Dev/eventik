'use client'

import React from 'react';
import {Map, UserOnboardingStep} from "@/components/shared";

export const UserLocationPicker = () => {
    return (
        <UserOnboardingStep
            title="Оберіть ваше місцезнаходження"
            description="Вкажіть, де ви знаходитесь або де хочете шукати події. Натисніть на карту, щоб обрати точку. Це допоможе показувати івенти, які відбуваються поруч."
            onClick={() => {
                // handle save
            }}
        >
            <Map />
        </UserOnboardingStep>

    );
};

