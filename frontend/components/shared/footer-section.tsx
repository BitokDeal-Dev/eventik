import React from 'react';
import {cn} from "@/lib/utils";

export const FooterSection = ({items, className}: { items: { name: string }[], className?:string }) => {
    return (
        <article className={cn('flex flex-col gap-5', className)}>
            {items.map((item) => (
                <p key={item.name} className='font-bold text-muted cursor-pointer'>{item.name}</p>
            ))}
        </article>
    );
};
