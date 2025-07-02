import * as Yup from 'yup';

export const LoginSchema = Yup.object({
    email: Yup.string()
        .required("Введіть email")
        .email("Некоректна email адреса"),
    password: Yup.string()
        .required("Введіть пароль")
        .min(8, "Пароль має містити щонайменше 8 символів")
        .matches(/[a-z]/, "Пароль має містити хоча б одну малу літеру")
        .matches(/[A-Z]/, "Пароль має містити хоча б одну велику літеру")
        .matches(/\d/, "Пароль має містити хоча б одну цифру")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Пароль має містити хоча б один спеціальний символ"),
})

export type TypeLoginSchema = Yup.InferType<typeof LoginSchema>;