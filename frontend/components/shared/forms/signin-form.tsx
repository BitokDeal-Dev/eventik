'use client'

import React from 'react';
import {EmailConfirm, Title} from "@/components/shared";
import OutlineInput from "@/components/ui/outline-input";
import {Button} from "@/components/ui/button";

export const SigninForm = () => {
    if(true)
        return <EmailConfirm />

    return (
        <form className='flex justify-center flex-col'>
            <a href='/' className="flex justify-center">
                <img src="/logo.svg" alt="eventik-logo"/>
            </a>

            <Title className='font-black'>Вхід в акаунту</Title>
            <p className='text-left text-muted my-5 text-base'>
                Введіть свою електронну пошту та пароль для входу. Якщо ви ще не
                зареєстровані, ви можете створити акаунт.
            </p>

            <OutlineInput placeholder='Введіть ваш Email адрес' type='email'/>
            <OutlineInput className='my-5' placeholder='Введіть пароль'
                          type='password'/>


            <Button className='text-xl font-bold'>Увійти</Button>

            <label htmlFor='agree' className='text-sm text-muted leading-snug justify-center flex gap-1 mt-5'>
                Я не маю акаунта{' '}

                <a href='/signup' className='text-primary underline font-medium'>
                   Створити акаунт
                </a>
            </label>
        </form>
    );
};
