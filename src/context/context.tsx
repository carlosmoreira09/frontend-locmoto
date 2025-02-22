import {createContext} from "react";
import {IAuthContext} from "../types/context.ts";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
