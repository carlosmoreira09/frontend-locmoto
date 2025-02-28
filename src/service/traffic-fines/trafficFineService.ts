import apiClient from "../../lib/interceptor.ts";
import {isAxiosError} from "axios";
import {GeneralResponse} from "@/types/generalType.ts";

export const findaAllTrafficFines = async (): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get('/traffic-fines', {
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

export const findOneTrafficFine = async (id_fine: number | undefined): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get(`/traffic-fines/${id_fine}`, {
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