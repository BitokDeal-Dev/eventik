'use client'

import React from 'react';
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface Props {
    title: string;
    description: string;
    onClick?: () => void;
    saveDisabled?: boolean;
    children: React.ReactNode;
    other?: React.ReactNode;
    className?: string;
}

export const UserOnboardingStep = ({
                                       title,
                                       description,
                                       onClick,
                                       saveDisabled = false,
                                       children,
                                       className,
                                       other
                                   }: Props) => {
    return (
        <section
            className={cn('flex justify-center w-full items-center mt-10 ', className)}>
            <div
                className="text-center items-center justify-center flex flex-col gap-3">
                <Title
                    className="text-4xl font-black text-center w-full lg:text-center">{title}</Title>
                <p className="text-center max-w-[450px] text-muted">{description}</p>
                <Button
                    className="w-full text-2xl font-bold"
                    disabled={saveDisabled}
                    onClick={onClick}
                >
                    Зберегти
                </Button>
                {other}
            </div>
            {children}
        </section>
    );
};