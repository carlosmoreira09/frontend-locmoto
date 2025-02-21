import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import {useStore} from "../../hooks/store.tsx";
import {ITokenPayload} from "../../types/types.ts";
import {hasAccess} from "../../lib/controlAccessLevel.ts";
import {ProfileRole} from "../../types/ProfileRole.ts";


interface ProtectedRouteProps {
    children: React.ReactNode;
    role: ProfileRole;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {

    const store = useStore();
    const location = useLocation();
    const tokenFromStorage = Cookies.get('token');
    const user = Cookies.get('user');
    if (tokenFromStorage && user) {
        const decoded: ITokenPayload =  jwtDecode(tokenFromStorage);
        if(hasAccess(decoded.role, role)) {
            return <>{children}</>;
        } else {
            return <Navigate to="/error-401" state={{ from: location }} replace />;
        }
    }
    if(store?.token) {
        const decoded: ITokenPayload =  jwtDecode(store.token);
        if(hasAccess(decoded.role, role)) {
            return <>{children}</>;
        } else {
            return <Navigate to="/error-401" state={{ from: location }} replace />;
        }
    }
    if (!store.isAuthenticated) {
        return <Navigate to="/login" />;
    }

};
