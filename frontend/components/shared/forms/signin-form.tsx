'use client'

import React, {useState} from 'react';
import {ErrorMessage, Title} from "@/components/shared";
import OutlineInput from "@/components/ui/outline-input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {LoginSchema, TypeLoginSchema} from "@/modules/auth/signin/schemes";
import {yupResolver} from "@hookform/resolvers/yup";
import {useTheme} from "next-themes";
import ReCAPTCHA from "react-google-recaptcha";

export const SigninForm = () => {
    const [inputsData, setInputsData] = useState({
        email: '',
        password: '',
    })
    const form = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>('')
    const {resolvedTheme} = useTheme()
    const {handleSubmit, formState: {errors}} = form;

    const onSubmit = (values: TypeLoginSchema) => {
        console.log(values)
    }
    const isDisabledButton =
        Object.keys(errors).length > 0 ||
        !inputsData.email.trim() ||
        !inputsData.password.trim() || !recaptchaValue

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className='flex justify-center flex-col'>
            <a href='/' className="flex justify-center">
                <img src="/logo.svg" alt="eventik-logo"/>
            </a>

            <Title className='font-black'>Вхід в акаунту</Title>
            <p className='text-left text-muted my-5 text-base'>
                Введіть свою електронну пошту та пароль для входу. Якщо ви ще не
                зареєстровані, ви можете створити акаунт.
            </p>

            <OutlineInput
                placeholder='Введіть ваш Email адрес'
                type='email'
                {...form.register("email", {
                    onChange: (e) => {
                        setInputsData((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }));
                    },
                })}
            />
            {errors.email && (
                <ErrorMessage
                    className='mt-1'>{errors.email.message}</ErrorMessage>
            )}
            <OutlineInput
                className='mt-5'
                placeholder='Введіть пароль'
                type='password'
                {...form.register("password", {
                    onChange: (e) => {
                        setInputsData((prev) => ({
                            ...prev,
                            password: e.target.value,
                        }));
                    },
                })}
            />
            {errors.password && (
                <ErrorMessage
                    className='mt-1'>{errors.password.message}</ErrorMessage>
            )}
            <div className='flex justify-center my-5'>
                <ReCAPTCHA
                    sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
                    theme={resolvedTheme as 'dark' | 'light'}
                    onChange={setRecaptchaValue}
                />
            </div>
            <Button disabled={isDisabledButton} type='submit'
                    className='text-xl font-bold mt-5'>Увійти</Button>
            <label htmlFor='agree'
                   className='text-sm text-muted leading-snug justify-center flex gap-1 mt-5'>
                Я не маю акаунта{' '}

                <a href='/signup'
                   className='text-primary underline font-medium'>
                    Створити акаунт
                </a>
            </label>
        </form>
    );
};
