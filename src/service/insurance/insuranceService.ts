import {GeneralResponse} from "@/types/generalType.ts";
import apiClient from "@/lib/interceptor.ts";
import {isAxiosError} from "axios";

export const findaAllInsurances = async (): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get('/insurance', {
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