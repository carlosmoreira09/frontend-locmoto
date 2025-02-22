import apiClient from "../../lib/interceptor.ts";
import {isAxiosError} from "axios";
import {GeneralResponse} from "../../types/generalType.ts";

export const loginService = async (user: string, password: string): Promise<GeneralResponse | undefined> => {
    try {
        const data = {
            user: user.toLowerCase(),
            password: password
        }

        const response = await apiClient.post('/auth/login', data);
        return response.data;
    } catch (error) {
        if(isAxiosError(error)) {
            return error.response?.data
        }
    }
};