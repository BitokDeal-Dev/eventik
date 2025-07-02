'use client'

import React, {useState} from 'react';
import {Title} from "@/components/shared";
import OutlineInput from "@/components/ui/outline-input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";

export const SignupForm = () => {
    const [agree, setAgree] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    return (
        <form className='flex justify-center flex-col'>
            <a href='/' className="flex justify-center">
                <img src="/logo.svg" alt="eventik-logo"/>
            </a>

            <Title className='font-black'>Реєстрація акаунта</Title>
            <p className='text-left text-muted my-5 text-base'>
                Введіть свою електронну пошту та пароль, щоб створити акаунт. Якщо у вас вже є акаунт — ви можете увійти.
            </p>
            <OutlineInput
                className='mb-5'
                placeholder="Введіть ваше прізвище та ім'я"
                type='text'
            />

            <OutlineInput placeholder='Введіть ваш Email адрес' type='email'/>
            <OutlineInput className='my-5' placeholder='Введіть пароль'
                          type='password'/>
            <div className='flex gap-2'>
                <Checkbox  checked={agree}
                           onCheckedChange={(checked) => setAgree(!!checked)}
                           id='agree' className=' mt-1 bg-muted'/>
                <label htmlFor='agree' className='text-sm text-muted leading-snug'>
                    Я погоджуюсь з{' '}
                    <a href='/some-p' className='text-primary underline font-medium'>
                        Умовами використання
                    </a>{' '}
                    та{' '}
                    <a href='/some-p' className='text-primary underline font-medium'>
                        Політикою конфіденційності
                    </a>.
                </label>
            </div>
            <div className='flex gap-2'>
                <Checkbox checked={subscribe}
                          onCheckedChange={(checked) => setSubscribe(!!checked)}
                          id='subscribe' className='bg-muted'/>
                <p className='text-sm text-muted mb-5'>Отримати розсилку на пошту</p>
            </div>
            <Button disabled={!agree} className='text-xl font-bold'>Увійти</Button>

            <label htmlFor='agree' className='text-sm text-muted leading-snug justify-center flex gap-1 mt-5'>
                Вже маю акаунт{' '}

                <a href='/signin' className='text-primary underline font-medium'>
                    Увійти в акаунт
                </a>
            </label>
        </form>
    );
};
