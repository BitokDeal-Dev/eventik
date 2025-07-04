'use client'

import React, {useEffect, useRef, useState} from 'react';
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import { EmailCodeInput } from "@/components/shared";
import { EmailCodeInputRef } from "@/components/shared/email-code-input";
import {formatTime} from "@/lib/formatTime";

export const EmailConfirm = () => {
    const codeRef = useRef<EmailCodeInputRef>(null);
    const [secondsLeft, setSecondsLeft] = useState(60);
    const [code, setCode] = useState('');

    useEffect(() => {
        if (secondsLeft === 0) return;

        const timer = setInterval(() => {
            setSecondsLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [secondsLeft]);

    const handleSubmit = () => {
        console.log("code:", code);
    };

    const resetCode = () => {
        setCode('');
        setSecondsLeft(60)
    }

    return (
        <article>
            <form className='flex justify-center flex-col'>
                <a href='/public' className="flex justify-center">
                    <img src="/logo.svg" alt="eventik-logo" />
                </a>

                <Title className='font-black'>Підтвердження електронної пошти</Title>
                <p className='text-left text-muted my-5 text-base'>
                    Введіть код, надісланий на вашу електронну пошту.
                </p>

                <div className='px-5 mb-5'>
                    <EmailCodeInput ref={codeRef} onChange={setCode} />
                </div>

                <Button disabled={+code < 1000} onClick={handleSubmit} className='text-xl font-bold'>Підтвердити</Button>

                <label htmlFor='agree' className='text-sm text-muted leading-snug justify-center flex gap-1 mt-5'>
                    Не прийшов код?{' '}
                    <p onClick={resetCode} className={secondsLeft === 0 ? 'text-primary underline font-medium cursor-pointer' : 'text-muted'}>
                        Відправити новий
                    </p>
                </label>
                <label htmlFor='agree' className='text-sm text-muted leading-snug justify-center flex gap-1 mt-3'>
                    Відправити новий код можна через{' '}
                    <p onClick={resetCode} className='text-primary underline font-medium'>
                        {formatTime(secondsLeft)}
                    </p>
                </label>
            </form>
        </article>
    );
};
