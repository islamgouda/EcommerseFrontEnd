import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INewCategoryResponse, IProduct, IProductResponse, IShowProduct } from 'src/helpers/interfaces/iproduct';
import { ISubCategory } from 'src/helpers/interfaces/isub-category';
import { CategoryService } from 'src/helpers/services/category.service';
import { SharedService } from 'src/helpers/services/shared.service';
import { SubCategoryService } from 'src/helpers/services/sub-category.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  ProductId:number=0;
  response:any;
  textDirection:string;
  allCategories:INewCategoryResponse[]=[];
  productModel:any;
  AllSubCat:any;
  relatedSubCategories:ISubCategory[]=[];
  noSubCatRelatedToThisCategory:string="";
  isSubCatSelectOptionHidden:boolean=true;
  errorMessage:string="";
  productID:any;
  SelectedCatId:number=5;
  SelectedSubCatId:number=5;
  file:[]=[];
  formData:FormData=new FormData();
  language:string;
  constructor(private location:Location, private subCategoryService:SubCategoryService,private http:HttpClient,private activatedRoute:ActivatedRoute,private categoryService:CategoryService,private sharedService:SharedService) {
    this.textDirection=this.sharedService.textDirection;
    this.language=localStorage.getItem("lang")||"en";
   }

  ngOnInit(): void {
    this.getAllCategories();
    this.ProductId=this.getUrlParameter("id");
    this.getProduct();
    
    this.onChangeCategory();
  }
  getUrlParameter(paramName:string):number{
    let parameter = -1;
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        parameter = Number(params.get(paramName));
        
      }
    )
    return parameter;
  }
  getProduct()
  {
    this.http.get<IProductResponse>('http://localhost:5092/api/Product/getmyproductbyID?productID='+this.ProductId).subscribe(
      data=>{
       this.response=data;
       this.productModel=this.response.data as IShowProduct[];
       console.log("Product Model : -------------"+this.productModel);
      }
    )
  }

  getAllCategories(){
    this.categoryService.getAllCategoriesWithSubCategories().subscribe(
      (data)=>{
        console.log(data.data);
        this.allCategories = data.data as INewCategoryResponse[];
      },
      (error)=>{
        this.sharedService.showSnackBar(error,4000,'dangerSnackBar');
      }
    )
  }
  onChangeCategory(){
    this.relatedSubCategories =[];
     this.subCategoryService.getByCategoryId(this.productModel.categoryID).subscribe(
      data=>{
        console.log(data);
        console.log(data);
        let allsubcats = data.data as ISubCategory[];
        this.relatedSubCategories = allsubcats;
        if(this.relatedSubCategories.length==0){
          this.noSubCatRelatedToThisCategory = "No Sub Categories Related To this Category !";
          this.sharedService.showSnackBar(this.noSubCatRelatedToThisCategory,4000,'warningSnackBar');
        }else{
          this.isSubCatSelectOptionHidden = false;
        }
      }
     );
  }

  
  update(){
    event?.preventDefault();
    this.formData.append("Name",this.productModel.name);
    this.formData.append("Name_Ar",this.productModel.name_Ar);
    this.formData.append("Description",this.productModel.description);
    this.formData.append("Description_Ar",this.productModel.description_Ar);
    this.formData.append("CategoryID",this.productModel.categoryID);
    this.formData.append("subcategoryID",this.productModel.subcategoryID);
    this.formData.append("Price",this.productModel.price!.toString());
    this.formData.append("Quantity",this.productModel.quantity!.toString());
    this.formData.append("IsAvailable","true");

    let headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'});
  let options = { headers: headers };

   console.log(this.formData.get("Name"));
    console.log(this.formData.get("CategoryID"));



    const request = new XMLHttpRequest();
     let tok = localStorage.getItem("token");
     let selfdata;
     request.onloadend= function(){
         console.log(this.responseText);
         selfdata = JSON.parse(this.responseText);
    };
      request.open("PUT", 'http://localhost:5092/api/Product/updateProduct/'+this.ProductId);
      request.setRequestHeader('Authorization', `Bearer ${tok}` );
      request.send(this.formData);
      let msg = this.language=="en"?"product added Successfully, it will Preview later and then approved if matched Policy !"
                                    :"تم اضافة المنتج بنجاح و سيتم الموافقه عليه بعد مراجعته";
      this.sharedService.showSnackBar(msg,5000,'successSnackBar')
      this.back();
      
    }
  onfileChange(event:any){
    this.file = event.target.files;
    for (let i = 0; i < this.file.length; i++) {
      this.formData.append("image"+i,this.file[i]);
    }
  }
  back(){
    this.location.back();
  }
}
