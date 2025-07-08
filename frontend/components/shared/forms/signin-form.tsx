'use client'

import React from 'react';
import {ErrorMessage, FormInput, Spinner, Title} from "@/components/shared";
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import ReCAPTCHA from "react-google-recaptcha";
import {useSigninForm} from "@/modules/auth/signin/hooks";
import Link from 'next/link';

export const SigninForm = () => {
    const {
        onSubmit,
        isError,
        isDisabledButton,
        isLoadingLogin,
        form,
        setRecaptchaValue,
        setInputsData
    } = useSigninForm()
    const {resolvedTheme} = useTheme()

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}
              className='flex justify-center flex-col'>
            <Link href='/' className="flex justify-center">
                <img src="/logo.svg" alt="eventik-logo"/>
            </Link>

            <Title className='font-black'>Вхід в акаунту</Title>
            <p className='text-left text-muted my-5 text-base'>
                Введіть свою електронну пошту та пароль для входу. Якщо ви ще не
                зареєстровані, ви можете створити акаунт.
            </p>

            <FormInput
                name="email"
                placeholder="Введіть ваш Email адрес"
                type="email"
                disabled={isLoadingLogin}
                register={form.register}
                error={form.formState.errors.email}
                className="mt-5"
                onChange={(e) => setInputsData(prev => ({
                    ...prev,
                    email: e.target.value
                }))}
            />

            <FormInput
                name="password"
                placeholder="Введіть пароль"
                type="password"
                disabled={isLoadingLogin}
                register={form.register}
                error={form.formState.errors.password}
                className="mt-5"
                onChange={(e) => setInputsData(prev => ({
                    ...prev,
                    password: e.target.value
                }))}
            />

            <div className='flex justify-center my-5'>
                <ReCAPTCHA
                    sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
                    theme={resolvedTheme as 'dark' | 'light'}
                    onChange={setRecaptchaValue}
                />
            </div>
            <Button disabled={isDisabledButton} type='submit'
                    className='text-xl font-bold mt-5'>{isLoadingLogin ? (
                <div className='flex items-center'>
                    <Spinner/>
                    <p>Шукаємо акаунт...</p>
                </div>
            ) : 'Створити акаунт'}</Button>
            {isError && (
                <ErrorMessage className='mt-1 flex justify-center w-full'>
                    Сталась помилка під-час входу в акаунт
                </ErrorMessage>
            )}
            <label htmlFor='agree'
                   className='text-sm text-muted leading-snug justify-center flex gap-1 mt-5'>
                Я не маю акаунта{' '}

                <Link href='/signup'
                   className='text-primary underline font-medium'>
                    Створити акаунт
                </Link>
            </label>
        </form>
    );
};
