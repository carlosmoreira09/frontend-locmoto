export interface ICreatePriceTableDto {
    id?: number;
    period?: string;
    price: number;
    group: string;
    store: string;
    isActive: boolean;
}