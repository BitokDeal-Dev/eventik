import React from 'react';

export const IconWithTitle = (
    {icon, title}:{icon:React.ReactNode, title?:string}
) => {
    return (
        <div className='group flex flex-col items-center justify-center gap-0 cursor-pointer  hover:text-primary transition-colors'>
            {icon}
            <p className='hidden md:block text-[13px] font-medium'>
                {title}
            </p>
        </div>
    );
};
