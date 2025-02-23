
export interface CreateReceiptDto {
    status: string;
    companyName: string;
    nfseNumber: string;
    nfseDate: Date;
    expiredDate: Date;
    monthReference: Date;
    contractNumber: number;
    client: number;
    price: number;
}