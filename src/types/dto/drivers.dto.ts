import {ICreateClient} from "@/types/dto/clients.dto.ts";
import {ICreateVehicle} from "@/types/dto/vehicles.dto.ts";

export interface ICreateDriver {
    id?: number;
    driverName: string;
    motherName: string;
    fatherName: string;
    city: string;
    cnhNumber: string;
    cnhRegister: string;
    cnhSafeNumber: string;
    cnhEmitBy: string;
    cnhCategory: string;
    cnhEmitFirst: string;
    cngExpired: string;
    isActive: boolean;
    driverObs?: string;
    client: ICreateClient;
}
export interface ICreateTrafficFine {
    id?: number;
    vehicle: ICreateVehicle
    client?: number
    driver?: number
    fineDate: Date;
    autoNumber: string;
    paymentMethod: string;
    contractNumber: number;
    violationObs: string;
    violationAddress: string;
    validity: Date;
    price: number;
    clientId: number;
}