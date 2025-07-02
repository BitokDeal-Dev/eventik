import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
    userFullName: Yup.string()
    .required('Введіть прізвище та ім\'я')
    .matches(
        /^[А-ЯІЇЄҐA-Z][а-яіїєґa-z']+\s[А-ЯІЇЄҐA-Z][а-яіїєґa-z']+$/,
        "Введіть коректні прізвище та ім'я (наприклад: Іваненко Іван)"
    ),
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

export type TypeRegisterSchema = Yup.InferType<typeof RegisterSchema>;