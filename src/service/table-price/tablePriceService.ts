import axios from "axios";
import {CreatePriceTableDto} from "@/types/dto/table-price.dto.ts";

export const createPriceVehicle  = async (data: CreatePriceTableDto) => {
    try {

        const response = await axios.post('your-api-url/price-table', data);

        if (response.status === 201) {
            return response.data
        }
    } catch (err) {
        console.log(err)
    }
}