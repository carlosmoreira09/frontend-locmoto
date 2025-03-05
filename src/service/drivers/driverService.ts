import apiClient from "../../lib/interceptor.ts";
import {isAxiosError} from "axios";
import {GeneralResponse} from "@/types/generalType.ts";

export const findaAllDrivers = async (): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get('/drivers', {
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

export const findOneDriver = async (id_driver: number | undefined): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get(`/drivers/${id_driver}`, {
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
export const findAllDriversIDs = async (): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get(`/drivers/ids`, {
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