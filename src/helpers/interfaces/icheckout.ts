export interface IShipper {
    id?:Number;
    name:string;
    arabicName:any;
    officePhone:string;
    identityId:any;
    deletedAt:any;
    shippingDetails:any;
    identity:any;
}
export interface IShipperResponse {
    success:boolean;
    message:string
    data:IShipper[]
}
export interface IAddress{
    id:number;
    addressLine1:string;
    addressLine2:string;
    city:string;
    postalCode:string;
    country:string;
    telephone:string;
    mobile:string;
    arabicAddressLine1:any;
    arabicAddressLine2:any;
    arabicCity:any;
    arabicCountry:any;
    userId:number;
    user:any;

}
export interface IAddressResponse{
    success: boolean
    message: string;
    data: IAddress[]
}

export interface IBuy{
        paymentID: number;
        shipperID: number;
        addressID: number;
}

export interface IBuyResponse{
    success: boolean;
    message: string;
    data:any;
  }
  export interface IPaymentMethodResponse{
    succcess: boolean;
    message: string;
    data?:any;
  }
