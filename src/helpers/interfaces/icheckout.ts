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
