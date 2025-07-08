'use client'

import React from 'react';
import {InterestsList, UserOnboardingStep} from "@/components/shared/";
import {useInterestStore} from "@/modules/interests/store/interests.store";

export const UserInterestsPicker = () => {
    const {selectedInterestsIds} = useInterestStore()

    return (
        <UserOnboardingStep
            title="Що вам цікаво?"
            description="Оберіть категорії, які вас цікавлять, щоб ми могли підібрати для вас найактуальніші події. Ви завжди зможете змінити свій вибір пізніше."
            saveDisabled={selectedInterestsIds.length === 0}
            onClick={() => {
                // handle save
            }}
            className='flex-col md:flex-row!'
        >
            <InterestsList />
        </UserOnboardingStep>
    );
};
