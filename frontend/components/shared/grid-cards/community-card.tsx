import React from 'react';
import {Button} from "@/components/ui/button";


export const CommunityCard = ({title, buttonText, description}: {
    title: string,
    buttonText: string,
    description: string
}) => (
    <article role="group" aria-label="Join community"
             className="relative lg:col-start-2 lg:row-start-1">
        <div
            className="absolute inset-px rounded-lg bg-section max-lg:rounded-t-4xl"/>
        <div
            className="relative flex h-full flex-col justify-center items-center overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <header className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h3 className="text-4xl font-bold text-primary text-center lg:text-left">
                    {title}
                </h3>
            </header>
            <Button className="my-5 mx-6 text-3xl font-bold w-full">
                <a href='/signup'>
                    {buttonText}
                </a>
            </Button>
            <p className="max-w-lg text-2xl font-bold text-center">
                {description}
            </p>
        </div>
        <div
            className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl"/>
    </article>
);

