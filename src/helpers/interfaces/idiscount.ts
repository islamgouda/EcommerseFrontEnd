export interface IDiscount {
    id?:number;
    name:string;
    name_Ar:string;
    description:string;
    description_Ar:string;
    descount_Persent:any;
    active:boolean;
    startTime:Date;
    endTime:Date;
}
export interface IDiscountResponse{
    succcess :boolean;
    data?:IDiscount|IDiscount[]|string;
    message:string;
}
