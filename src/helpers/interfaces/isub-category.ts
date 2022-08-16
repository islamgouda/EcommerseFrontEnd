
export interface ISubCategory {
    id?:number;
    name:string;
    arabicName:string;
    description:string;
    arabicDescription:string;
    categoryId:any;
    categoryName?:string;
    image?:any;
}
export interface ISubCategoryResponse{
    success: boolean;
    message: string;
    data?:any;
}
