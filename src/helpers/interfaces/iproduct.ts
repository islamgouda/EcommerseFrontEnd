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
export interface IProductt {
    id?:number;
    name:string;
    name_Ar:string;
    description :string;
    description_Ar:string;
    price :number|null;
    isAvailable:boolean;
    quantity?:number|null;
    discountID?:number;
    partnerID?:number;
    categoryID :number;
    subcategoryID :number;
    images?:string[];
}
export interface IProductResponse{
    success: boolean;
    message:string;
    data?:any;
}
export interface IShowProduct {
    id:number;
    name:string;
    name_Ar:string;
    description:string;
    description_Ar:string;
    quantity:number;
    price:number;
    discount:number;
    isAvailable:boolean;
    images:string[];
    partenerName:string;
    categoryName:string;
    subcategoryName:string;
    categoryID?: number;
    subcategoryID?: number;
}

export interface IShowCartItemProduct {
    productId:number;
    name:string;
    discription:string;
    arabicName:string;
    arabicDiscription:string;
    image:string;
    price:number;
    descount_Persent:number;
    quantityOrdered:number;
    quantityAvailable:number;
    categoryName:string;
    subCategoryName:string;
}


export interface IAddToCart{
    productId: number,
    quantity: number
}
export interface IAddToCartResponse{
        success: boolean;
        message:  any;
 }
 export interface ISignAsApprovedResponse
 {
    success: boolean
    message: string;
  }




  export interface INewCategoryWithSubCategoryResponse{
    success: boolean;
    message: string;
    data: INewCategoryResponse[];
  }
  export interface INewCategoryResponse
 {
      id:number
      name:string;
      name_Ar:string
      description:string
      description_Ar:string
      subCategories:INewSubCategoryResponse[];
 }
 export interface INewSubCategoryResponse
 {
     id:number;
     name:string;
     description :string;
     arabicName:string;
     arabicDescription:string;
     image:string;
     categoryName:string;
     categoryId:number;
 }