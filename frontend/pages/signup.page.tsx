import React from 'react';
import {SignupForm} from "@/components/shared";

const SignupPage = () => {
    return (
        <article className='flex justify-center items-center py-6 md:py-12'>
            <div className='w-96 bg-section rounded-lg p-5'>
                <SignupForm />
            </div>
        </article>
    );
};

export default SignupPage;