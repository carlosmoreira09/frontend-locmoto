import {ProfileRole} from "./ProfileRole.ts";
import {GeneralResponse} from "./generalType.ts";

export interface IAuthContext {
    tenant: number | undefined;
    setTenant: (store: number) => void;
    login: (username: string, password: string, store: number) => Promise<GeneralResponse>
    logOut: () => void;
    isAuthenticated: boolean;
    userId?: number;
    role: ProfileRole | undefined;
    token: string;
    tenantName?: string
}