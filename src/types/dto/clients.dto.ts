export interface ICreateClient {
    personType: string;
    fullName: string;
    document?: string;
    rg?: string | null;
    rgEmitDate?: Date;
    rgExpired?: Date;
    rgEmitBy?: string;
    phone: string;
    email: string;
    nacionality?: string;
    maritalStatus?: string;
    stateRegister?: string;
    dob?: Date;
    gender?: string;
    isBlock: boolean;
    blockReason?: string;
    observations?: string;
    address: string;
    zip_code?: string;
}