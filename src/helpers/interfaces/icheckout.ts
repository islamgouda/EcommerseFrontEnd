export interface ICheckout {
    id?:Number;
    name:string;
    arabicName:any;
    officePhone:string;
    identityId:any;
    deletedAt:any;
    shippingDetails:any;
    identity:any;
}
export interface ICheckoutResponse {
    success:boolean;
    message:string
    data:ICheckout[]
}
