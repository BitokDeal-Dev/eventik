import {useMutation} from "@tanstack/react-query";
import {TypeLoginSchema} from "@/modules/auth/signin/schemes";
import {signinService} from "@/modules/auth/services/signin.service";

export const useSigninMutation = () => {
    const {mutate:signin, isPending: isLoadingLogin, isError, isSuccess} = useMutation({
        mutationKey: ['signin'],
        mutationFn: ({values, recaptcha}: {
            values: TypeLoginSchema,
            recaptcha?: string
        }) => signinService.signin(values, recaptcha)
    })

    return {signin, isLoadingLogin, isError, isSuccess}
};
