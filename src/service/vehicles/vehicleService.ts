import apiClient from "../../lib/interceptor.ts";
import {isAxiosError} from "axios";
import {GeneralResponse} from "@/types/generalType.ts";

export const findaAllVehicles = async (): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get('/vehicles', {
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

export const findOneVehicle = async (id_vehicle: number | undefined): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get(`/vehicles/${id_vehicle}`, {
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
export const findAllVehicleIDs = async (): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get(`/vehicles/ids`, {
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