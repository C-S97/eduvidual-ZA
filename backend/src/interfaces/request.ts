import { Request } from '@hapi/hapi';

export interface IRegisterRequest extends Request {
    payload: {
        username: string;
        firstname: string;
        lastname: string;
        email: string;
        password: string;
    }
}