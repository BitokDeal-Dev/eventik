import React from 'react';
import {cn} from "@/lib/utils";

export const IconWithTitle = (
    {icon, title, className, titleClassName}: {
        icon: React.ReactNode,
        title?: string,
        className?: string
        titleClassName?: string
    }
) => {
    return (
        <div
            className={cn('group flex flex-col items-center justify-center gap-0 cursor-pointer  hover:text-primary transition-colors', className)}>
            {icon}
            <p className={cn('hidden md:block text-[13px] font-medium',titleClassName)}>
                {title}
            </p>
        </div>
    );
};
