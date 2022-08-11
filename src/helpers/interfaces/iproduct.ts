export interface IProduct {
    id?:number;
    name:string;
    nameAr:string;
    description:string;
    descriptionAr:string;
    price:number|string;
    isAvailable:boolean;
    quantity?:number|string;
    discountID?:number|null;
    partnerID:number|null;
    CategoryID:number|null;
    subCategoryID:number;
    images:any;
}
