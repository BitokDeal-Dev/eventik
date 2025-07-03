import {useMutation} from "@tanstack/react-query";
import {signupService} from "@/modules/auth/api/signup.service";
import {TypeRegisterSchema} from "@/modules/auth/signup/schemes";

export const useSignupMutation = () => {
    const {mutate:signup, isPending: isLoadingRegister, isError, isSuccess} = useMutation({
        mutationKey: ['signup'],
        mutationFn: ({values, recaptcha}: {
            values: TypeRegisterSchema,
            recaptcha?: string
        }) => signupService.signup(values, recaptcha)
    })

    return {signup, isLoadingRegister, isError, isSuccess}
};
