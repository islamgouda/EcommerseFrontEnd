export interface IShippingDetails {
    success: boolean;
    message: string;
    data: IShipping[];
}
export interface IShipping
{
    id:number
    shipName:string;
    shippingstate:string;
    arabicshippingstate:string;
    shipperName:string;
    shipperPhone:string;
    alLaddress:string;
    alLaddress_Ar:string;
}

export interface IShipperDetails {
    success: boolean;
    message: string;
    data: any;
}
export interface IShipper
{
    id?:number;
    shipName?:string;
    shippingstate?:string;
    arabicshippingstate?:string;
    customerPhone?:string;
    alLaddress?:string;
    alLaddress_Ar?:string;
}

