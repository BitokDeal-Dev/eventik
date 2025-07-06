import {TypeLoginSchema} from "@/modules/auth/signin/schemes";
import api from "@/lib/axios";

export class signinService {
    static async signin(body: TypeLoginSchema, recaptcha?: string) {
        const headers = recaptcha ? {recaptcha} : undefined;

        return api.post('auth/login', body, {
            headers
        })
    }
}