export interface IDisplayProducts {
    id?:number;
    name:string;
    nameAr:string;
    description:string;
    descriptionAr:string;
    price:number|string;
    isAvailable:boolean;
    quantity?:number|string;
    haveDiscount?:boolean;
    discountValue:any;
    partner:string;
    category:string;
    subCategory:string;
    images:any;
}
