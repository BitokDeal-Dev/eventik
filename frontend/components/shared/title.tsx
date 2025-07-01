import React from 'react';
import {cn} from "@/lib/utils";

export const Title = ({children, className}: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <h2 className={cn("mt-2 max-w-lg text-2xl font-bold text-center lg:text-left", className)}>
            {children}
        </h2>
    );
};
