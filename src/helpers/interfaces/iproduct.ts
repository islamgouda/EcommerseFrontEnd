export interface IProduct {
    id?:number;
    name:string;
    Name_Ar:string;
    Description :string;
    Description_Ar:string;
    Price :number|null;
    IsAvailable:boolean;
    Quantity?:number|null;
    discountID?:number;
    partnerID?:number;
    CategoryID :number;
    subcategoryID :number;
    images?:string[];
}
export interface IProductResponse{
    succcess: boolean;
    message:string;
    data?:any;
}