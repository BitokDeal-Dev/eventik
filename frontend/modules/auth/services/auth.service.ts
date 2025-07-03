import api from '@/lib/axios';

export class AuthService {
    public async logout() {
        return api.post('/auth/logout');
    }
}
