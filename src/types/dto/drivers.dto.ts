export interface ICreateDriver {
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
}
export interface ICreateTrafficFine {
    fineNumber: string
    vehicle: number
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