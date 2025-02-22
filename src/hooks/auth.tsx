import {useContext} from "react";
import {AuthContext} from "../context/context.tsx";

export const useAuth = () => {
    return useContext(AuthContext);
};