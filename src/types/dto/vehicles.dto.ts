import {ICreateTrafficFine} from "@/types/dto/drivers.dto.ts";

export interface ICreateVehicle {
    id?: number;
    plateNumber: string;
    color: string;
    renavam: string;
    chassi: string;
    yearModelBuild: string;
    fuelType: string;
    modelName: string;
    isActive: string;
    vehicleObs: string;
    company: string;
    odometer: string;
    location: string;
    tenant: number;
    fines?: ICreateTrafficFine[]
}