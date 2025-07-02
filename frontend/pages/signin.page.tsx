import React from 'react';
import {SigninForm} from "@/components/shared";

const SigninPage = () => {
    return (
        <article className='flex justify-center items-center py-6 md:py-12'>
            <div className='w-96 bg-section rounded-lg p-5'>
                <SigninForm />
            </div>
        </article>
    );
};

export default SigninPage;