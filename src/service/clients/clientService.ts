import apiClient from "../../lib/interceptor.ts";
import {isAxiosError} from "axios";
import {GeneralResponse} from "@/types/generalType.ts";

export const findaAllClients = async (): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get('/clients', {
            headers: {
                 'x-tenant-id': 1
            }
        });
        return response.data;
    } catch (error) {
        if(isAxiosError(error)) {
            return error.response?.data
        }
    }
};