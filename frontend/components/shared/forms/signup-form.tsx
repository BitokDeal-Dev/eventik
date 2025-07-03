'use client'

import React from 'react';
import {
    ErrorMessage,
    Title,
    Spinner,
    FormInput,
    AgreementCheckboxes
} from "@/components/shared";
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import ReCAPTCHA from "react-google-recaptcha";
import {useRegisterForm} from "@/modules/auth/signup/hooks/";

export const SignupForm = () => {
    const {resolvedTheme} = useTheme()
    const {
        form,
        setInputsData,
        isDisabledButton,
        isLoadingRegister,
        isError,
        onSubmit,
        agree,
        setAgree,
        subscribe,
        setSubscribe,
        setRecaptchaValue,
    } = useRegisterForm();
    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex justify-center flex-col'>
            <a href='/' className="flex justify-center">
                <img src="/logo.svg" alt="eventik-logo"/>
            </a>

            <Title className='font-black'>Реєстрація акаунта</Title>
            <p className='text-left text-muted my-5 text-base'>
                Введіть свою електронну пошту та пароль, щоб створити акаунт.
                Якщо у вас вже є акаунт — ви можете увійти.
            </p>

            <FormInput
                name="userFullName"
                placeholder="Введіть ваше прізвище та ім'я"
                type="text"
                disabled={isLoadingRegister}
                register={form.register}
                error={form.formState.errors.userFullName}
                onChange={(e) => setInputsData(prev => ({...prev, userFullName: e.target.value}))}
            />

            <FormInput
                name="email"
                placeholder="Введіть ваш Email адрес"
                type="email"
                disabled={isLoadingRegister}
                register={form.register}
                error={form.formState.errors.email}
                className="mt-5"
                onChange={(e) => setInputsData(prev => ({...prev, email: e.target.value}))}
            />

            <FormInput
                name="password"
                placeholder="Введіть пароль"
                type="password"
                disabled={isLoadingRegister}
                register={form.register}
                error={form.formState.errors.password}
                className="mt-5"
                onChange={(e) => setInputsData(prev => ({...prev, password: e.target.value}))}
            />

            <AgreementCheckboxes
                agree={agree}
                setAgree={setAgree}
                subscribe={subscribe}
                setSubscribe={setSubscribe}
            />

            <div className='flex justify-center mb-5'>
                <ReCAPTCHA
                    sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
                    theme={resolvedTheme as "dark" | "light"}
                    onChange={setRecaptchaValue}
                />
            </div>

            <Button type='submit' disabled={isDisabledButton} className='text-xl font-bold'>
                {isLoadingRegister ? (
                    <div className='flex items-center'>
                        <Spinner/>
                        <p>Створюємо акаунт...</p>
                    </div>
                ) : 'Створити акаунт'}
            </Button>

            {isError && (
                <ErrorMessage className='mt-1 flex justify-center w-full'>
                    Сталась помилка під-час створення акаунта
                </ErrorMessage>
            )}

            <label className='text-sm text-muted leading-snug justify-center flex gap-1 mt-5'>
                Вже маю акаунт{' '}
                <a href='/signin' className='text-primary underline font-medium'>Увійти в акаунт</a>
            </label>
        </form>
    );
};
