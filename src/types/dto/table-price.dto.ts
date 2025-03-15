export interface ICreatePriceTableDto {
    id?: number;
    name: string;
    vehicle: number;
    period?: string;
    price: number;
    currency: string;
    group: string;
    validFrom: Date;
    validTo: Date;
    isActive: boolean;
}