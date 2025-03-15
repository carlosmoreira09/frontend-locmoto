import React, {useEffect, useState} from "react";
import {ITokenPayload} from "../types/auth.ts";
import {ProfileRole} from "../types/ProfileRole.ts";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import {AuthContext} from "./context.tsx";
import {loginService} from "../service/auth/loginService.ts";

export type Props = {
    children?: React.ReactNode;
};

const saveStorage = (user: ITokenPayload, token: string) => {
    Cookies.set('token', token);
    Cookies.set('user', JSON.stringify(user));
};

const AuthProvider = ({ children }: Props ) => {
    useEffect(() => {
        const checkToken = async () => {
            try {
                const tokenFromStorage = Cookies.get('token');
                const user = Cookies.get('user');

                if (tokenFromStorage && user) {
                    const decoded: ITokenPayload = jwtDecode(tokenFromStorage);
                    if (decoded.exp * 1000 < Date.now()) {
                        logOut();
                    } else {
                        setTenant(decoded.tenantId)
                        setRole(decoded.role)
                        setIsAuthenticated(true)
                    }
                }
            } catch (error) {
                console.error("Erro ao decodificar token:", error);
                logOut();
            }
        };

        checkToken().then();
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState<ProfileRole>();
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState<number>();
    const [tenantName, setTenantName] = useState<string>();
    const [tenant, setTenant] = useState<number | undefined>(undefined)

    const login = async (username: string, password: string, tenantId: number) => {
        const result = await loginService(username,password)

        if(result  && result?.token) {
            const decoded: ITokenPayload = jwtDecode(result.token)
            saveStorage(decoded,result.token)
            setTenant(tenantId)
            setRole(decoded.role)
            setIsAuthenticated(true)
            setUserId(decoded.userId)
            setToken(result.token)
            setTenantName(decoded.tenantName)
        } else {
            throw new Error('Erro ao realizar login')
        }
        return result
    }
    const logOut = () => {
        Cookies.remove("token");
        Cookies.remove("user");
        setTenant(undefined)
    };


    return (
        <AuthContext.Provider value={{
            tenant,
            setTenant,
            login,
            isAuthenticated,
            role,
            token,
            logOut,
            userId,
            tenantName}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;