import axios, {isAxiosError} from "axios";
import {ICreatePriceTableDto} from "@/types/dto/table-price.dto.ts";
import {GeneralResponse} from "@/types/generalType.ts";
import apiClient from "@/lib/interceptor.ts";

export const createPriceVehicle  = async (data: ICreatePriceTableDto) => {
    try {

        const response = await axios.post('your-api-url/price-table', data);

        if (response.status === 201) {
            return response.data
        }
    } catch (err) {
        console.log(err)
    }
}
export const findaAllPrices = async (): Promise<GeneralResponse | undefined> => {
    try {

        const response = await apiClient.get('/price-table', {
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
export const findOneVehiclePrice = async (id_price: number | undefined): Promise<GeneralResponse | undefined> => {
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