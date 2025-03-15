export interface ICreateInsurance {
    id?: number
    companyName: string
    insuranceCompany: string;
    policyNumber: string
    startDate: string
    endDate: string
    situation: string
    awardType: string
    policytype: string
    supplier: string
    supplierName: string
    policyValueLiquid: number
    iofValue: number
    awardTotalPolicy: number
    vehicle: number
    inputFile?: File
}