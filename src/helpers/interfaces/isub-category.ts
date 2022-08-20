
export interface ISubCategory {
    id?:number;
    name:string;
    arabicName:string;
    description:string;
    arabicDescription:string;
    categoryId:any;
    categoryName?:string;
    image:string;
}
export interface ISubCategoryResponse{
    success: boolean;
    message: string;
    data?:any;
}
