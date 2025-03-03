import {GeneralResponse} from "@/types/generalType.ts";
import apiClient from "@/lib/interceptor.ts";
import {isAxiosError} from "axios";

export const findaAllReceipts = async (): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get('/receipts', {
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
export const findOneReceipt = async (id_price: number | undefined): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get(`/price-table/${id_price}`, {
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