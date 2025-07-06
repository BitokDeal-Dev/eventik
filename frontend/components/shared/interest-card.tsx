'use client'

import React from 'react';
import {IInterest} from "@/data/interests";
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared/title";
import {Check} from "lucide-react";
import {useInterestStore} from "@/modules/interests/store/interests.store";

interface Props extends IInterest {
    className?: string;
    isSelected?: boolean;
}

export const InterestCard = ({
                                 className,
                                 name,
                                 id,
                                 icon,
                                 isSelected
                             }: Props) => {
    const {toggleInterest} = useInterestStore()
    const handlePress = () => {
        toggleInterest(id)
    }
    return (
        <article
            onClick={handlePress}
            className={cn(`relative flex flex-col items-center justify-center rounded-lg border-2 border-foreground w-72 h-52 cursor-pointer gap-3 ${isSelected ? 'border-3 border-primary' : ''}`, className)}>
            <img className='w-16' src={icon} alt={name}/>
            <Title className='text-3xl'>{name}</Title>
            {isSelected &&
							<div
								className='absolute -top-2 -right-2 bg-primary rounded-full p-1 flex justify-center items-center'>
								<Check size={20} color={'#fff'}/>
							</div>
            }
        </article>
    );
};