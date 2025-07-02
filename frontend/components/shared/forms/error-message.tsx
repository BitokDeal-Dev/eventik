import React from 'react';
import {cn} from "@/lib/utils";

export const ErrorMessage = ({children, className}:{children?:React.ReactNode, className?:string}) => {
    return (
        <p className={cn('text-red-500 font-bold text-sm', className)}>
            {children && children}
        </p>
    );
};
