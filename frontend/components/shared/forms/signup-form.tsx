'use client'

import React, {useState} from 'react';
import {ErrorMessage, Title} from "@/components/shared";
import OutlineInput from "@/components/ui/outline-input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {
    RegisterSchema,
    TypeRegisterSchema
} from "@/modules/auth/signup/schemes";

export const SignupForm = () => {
    const [agree, setAgree] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const [inputsData, setInputsData] = useState({
        email: '',
        password: '',
        userFullName: ''
    })
    const form = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues: {
            userFullName: '',
            email: '',
            password: ''
        }
    })

    const {handleSubmit, formState: {errors}} = form;

    const onSubmit = (values: TypeRegisterSchema) => {
        console.log(values)
    }

    const isDisabledButton =
        !agree ||
        Object.keys(errors).length > 0 ||
        !inputsData.userFullName.trim() ||
        !inputsData.email.trim() ||
        !inputsData.password.trim();

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className='flex justify-center flex-col'>
            <a href='/' className="flex justify-center">
                <img src="/logo.svg" alt="eventik-logo"/>
            </a>

            <Title className='font-black'>Реєстрація акаунта</Title>
            <p className='text-left text-muted my-5 text-base'>
                Введіть свою електронну пошту та пароль, щоб створити акаунт.
                Якщо у вас вже є акаунт — ви можете увійти.
            </p>
            <OutlineInput
                {...form.register("userFullName", {
                    onChange: (e) => {
                        setInputsData((prev) => ({
                            ...prev,
                            userFullName: e.target.value,
                        }));
                    },
                })}
                placeholder="Введіть ваше прізвище та ім'я"
                type='text'
                name='userFullName'
            />
            {errors.userFullName && (
                <ErrorMessage
                    className='mt-1'>{errors.userFullName.message}</ErrorMessage>
            )}

            <OutlineInput  {...form.register("email")}
                           className='mt-5'
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

            <OutlineInput  {...form.register("password")}
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
            <div className='flex gap-2 mt-5'>
                <Checkbox checked={agree}
                          onCheckedChange={(checked) => setAgree(!!checked)}
                          id='agree' className=' mt-1 bg-muted'/>
                <label htmlFor='agree'
                       className='text-sm text-muted leading-snug'>
                    Я погоджуюсь з{' '}
                    <a href='/some-p'
                       className='text-primary underline font-medium'>
                        Умовами використання
                    </a>{' '}
                    та{' '}
                    <a href='/some-p'
                       className='text-primary underline font-medium'>
                        Політикою конфіденційності
                    </a>.
                </label>
            </div>
            <div className='flex gap-2'>
                <Checkbox checked={subscribe}
                          onCheckedChange={(checked) => setSubscribe(!!checked)}
                          id='subscribe' className='bg-muted'/>
                <p className='text-sm text-muted mb-5'>Отримати розсилку на
                    пошту</p>
            </div>
            <Button type='submit' disabled={isDisabledButton}
                    className='text-xl font-bold'>Створити акаунт</Button>

            <label htmlFor='agree'
                   className='text-sm text-muted leading-snug justify-center flex gap-1 mt-5'>
                Вже маю акаунт{' '}

                <a href='/signin'
                   className='text-primary underline font-medium'>
                    Увійти в акаунт
                </a>
            </label>
        </form>
    );
};
