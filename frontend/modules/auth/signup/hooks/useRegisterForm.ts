import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignupMutation } from "@/modules/auth/hooks";
import { RegisterSchema, TypeRegisterSchema } from "@/modules/auth/signup/schemes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useRegisterForm = () => {
    const router = useRouter();
    const form = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues: { userFullName: "", email: "", password: "" },
    });
    const { signup, isError, isLoadingRegister, isSuccess } = useSignupMutation();
    const [inputsData, setInputsData] = useState({ userFullName: "", email: "", password: "" });
    const [agree, setAgree] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>("");

    useEffect(() => {
        if (isSuccess) {
            form.reset();
            setInputsData({ userFullName: "", email: "", password: "" });
            setRecaptchaValue("");
            setAgree(false);
            setSubscribe(false);
            router.push("/signin");
        }
    }, [isSuccess]);

    const onSubmit = (values: TypeRegisterSchema) => {
        signup({ values, recaptcha: recaptchaValue! });
    };

    const isDisabledButton =
        !agree ||
        Object.keys(form.formState.errors).length > 0 ||
        !inputsData.userFullName.trim() ||
        !inputsData.email.trim() ||
        !inputsData.password.trim() ||
        !recaptchaValue ||
        isLoadingRegister;

    return {
        form,
        inputsData,
        setInputsData,
        isDisabledButton,
        isLoadingRegister,
        isError,
        onSubmit,
        agree,
        setAgree,
        subscribe,
        setSubscribe,
        recaptchaValue,
        setRecaptchaValue,
    };
};
