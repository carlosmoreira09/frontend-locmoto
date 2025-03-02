export interface ICreatePriceTableDto {
    id?: number;
    name: string;
    description?: string;
    price: number;
    currency: string;
    validFrom: Date;
    validTo: Date;
    isActive: boolean;
}