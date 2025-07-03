import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginSchema, TypeLoginSchema} from "@/modules/auth/signin/schemes";
import {useSigninMutation} from "@/modules/auth/signin/hooks/";

export const useSigninForm = () => {
    const router = useRouter();
    const form = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const [inputsData, setInputsData] = useState({
        email: '',
        password: '',
    })
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>("");
    const {signin, isError, isSuccess, isLoadingLogin} = useSigninMutation()


    useEffect(() => {
        if (isSuccess) {
            form.reset();
            setInputsData({email: "", password: ""});
            setRecaptchaValue("");
            router.push("/verification");
        }
    }, [isSuccess]);

    const onSubmit = (values: TypeLoginSchema) => {
        signin({values, recaptcha: recaptchaValue!});
    };

    const isDisabledButton =
        Object.keys(form.formState.errors).length > 0 ||
        !inputsData.email.trim() ||
        !inputsData.password.trim() ||
        !recaptchaValue

    return {
        isError,
        isLoadingLogin,
        onSubmit,
        isDisabledButton,
        form,
        setRecaptchaValue,
        setInputsData
    }

}