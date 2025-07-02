'use client'

import React, {useRef} from 'react';
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui/button";
import {EmailCodeInput} from "@/components/shared";
import {EmailCodeInputRef} from "@/components/shared/email-code-input";

export const EmailConfirm = () => {
    const codeRef = useRef<EmailCodeInputRef>(null);

    const handleSubmit = () => {
        const code = codeRef.current?.getCode();
        console.log("code:", code);
    };

    return (
        <article>
            <form className='flex justify-center flex-col'>
                <a href='/public' className="flex justify-center">
                    <img src="/logo.svg" alt="eventik-logo"/>
                </a>

                <Title className='font-black'>Підтвердження електронної
                    пошти</Title>
                <p className='text-left text-muted my-5 text-base'>
                    Введіть код, надісланий на вашу електронну пошту. Це
                    допоможе нам переконатися, що саме ви реєструєте акаунт.
                </p>
                <div className='px-5 mb-5'>
                    <EmailCodeInput ref={codeRef} />
                </div>

                <Button onClick={handleSubmit} className='text-xl font-bold'>Підтвердити</Button>

                <label htmlFor='agree'
                       className='text-sm text-muted leading-snug justify-center flex gap-1 mt-5'>
                    Не прийшов код?{' '}

                    <a href='/signup'
                       className='text-primary underline font-medium'>
                        Відправити новий
                    </a>
                </label>
            </form>
        </article>
    );
};

