'use client'

import React from 'react';
import {interest} from "@/data/interests";
import {InterestCard} from "@/components/shared";
import {ParallaxScroll} from "@/components/ui/parallax-scroll";
import {useInterestStore} from "@/modules/interests/store/interests.store";

export const InterestsList = () => {
    const {isSelected} = useInterestStore()
    return (
        <section className='relative w-full'>
            <ParallaxScroll
                items={interest}
                renderItem={(item) => (
                    <InterestCard isSelected={isSelected(item.id)} {...item} />
                )}
            />
            <div
                className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10"/>
        </section>
    );
};
