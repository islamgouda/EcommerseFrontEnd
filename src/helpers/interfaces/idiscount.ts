export interface IDiscount {
    id?:number;
    name:string;
    nameAr:string;
    description:string;
    descriptionAr:string;
    discountPercent:any;
    isActive:boolean;
    startTime:Date;
    endTime:Date;
}
