'use client'

import React from 'react';
import {Title, InterestsList} from "@/components/shared/";
import {Button} from "@/components/ui/button";
import {useInterestStore} from "@/modules/interests/store/interests.store";

export const UserInterestsPicker = () => {
    const {selectedInterestsIds} = useInterestStore()

    return (
        <section className='flex  justify-center w-full items-center mt-10'>
            <div className='text-center items-center justify-center flex flex-col gap-3'>
                <Title className='text-4xl font-black'>Що вам цікаво?</Title>
                <p className='text-center max-w-[450px] text-muted'>Оберіть категорії, які вас цікавлять, щоб ми могли підібрати для вас найактуальніші події. Ви завжди зможете змінити свій вибір пізніше.</p>
                <Button disabled={selectedInterestsIds.length === 0} className='w-full text-2xl font-bold'>Зберегти</Button>
            </div>
            <InterestsList />
        </section>
    );
};
