export interface ICreatePriceTableDto {
    id?: number;
    name: string;
    period?: string;
    price: number;
    currency: string;
    validFrom: Date;
    validTo: Date;
    isActive: boolean;
}