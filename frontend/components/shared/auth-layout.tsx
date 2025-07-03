import React from 'react';

export const AuthLayout = ({
                               children,
                           }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <article className='flex justify-center items-center py-6 md:py-12'>
            <div className='w-96 bg-section rounded-lg p-5'>
                {children}
            </div>
        </article>
    );
};

