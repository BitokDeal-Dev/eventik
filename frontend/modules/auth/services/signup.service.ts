import {TypeRegisterSchema} from "@/modules/auth/signup/schemes";
import api from "@/lib/axios";

export class signupService {
    static async signup(body: TypeRegisterSchema, recaptcha?: string) {
        const headers = recaptcha ? {recaptcha} : undefined;

        return api.post('auth/register', body, {
            headers
        })
    }
}