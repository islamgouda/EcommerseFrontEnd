export interface IUserAddress {
    addressLine1:string;
    addressLine2: string;
    city: string;
    postalCode: string;
    country: string;
    telephone: string;
    mobile: string;
}
export interface IUserAddressResponse{
    Data:string|IUserAddress|IUserAddress[];
    success:boolean;
    Message:string;
}
