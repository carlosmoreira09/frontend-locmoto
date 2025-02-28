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
    fineNumber: string
    vehicle: ICreateVehicle
    fineDate: string
    autoNumber: string
    origin: string
    severity: string
    violationObs: string
    isIntern: boolean
    isNotification: boolean
    isRepeatOffender: boolean
    violationAddress: string
    city: string
    uf: string
}