import {ICreateDriver, ICreateTrafficFine} from "@/types/dto/drivers.dto.ts";

export interface ICreateClient {
    id: string;
    personType: string;
    fullName: string;
    document: string;
    rg: string;
    rgEmitDate: Date;
    rgExpired: Date;
    rgEmitBy: string;
    phone: string;
    email: string;
    nacionality?: string;
    maritalStatus?: string;
    stateRegister?: string;
    dob: Date;
    gender?: string;
    isBlock: boolean;
    blockReason?: string;
    observations?: string;
    address: string;
    zip_code?: string;
    inputFile?: File;
    drivers?: ICreateDriver[]
    fines?: ICreateTrafficFine[]
}

export interface IAddressForm {
    name: string
    street: string
    city: string
    neighborhood: string
    state: string
    phone: string
}
