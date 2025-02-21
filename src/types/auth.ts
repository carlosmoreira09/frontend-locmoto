import {ProfileRole} from "./ProfileRole.ts";

export interface ITokenPayload {
    userId: number;
    tenantId?: number;
    role: ProfileRole;
    exp: number;
    iat: number;
    tenantName?: string;
}

export interface LoginDTO {
    username: string;
    password: string
}