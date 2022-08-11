import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPartner } from 'src/helpers/interfaces/ipartner';
import { PartnerService } from 'src/helpers/services/partner.service';
import { SharedService } from 'src/helpers/services/shared.service';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.scss']
})
export class AddPartnerComponent implements OnInit {

  textDirection:string;
  language:string;
  updatePartnerWithId:number;
  partnerModel:IPartner={name:"",type:"",userId:-1,numberOfBranches:0};
  allPartners:IPartner[]=[];
  partnerID:number=-1;
  errorMessage:string="";
  goToAddCategoriesFirst:string=""
  constructor(private location:Location,private activatedRoute:ActivatedRoute,private sharedService:SharedService, private router:Router,private partnerService:PartnerService) { 
    this.textDirection = this.sharedService.textDirection;
    this.language = localStorage.getItem("lang")||"en";
    this.updatePartnerWithId = -1; 
    this.goToAddCategoriesFirst = this.textDirection=="ltr"?"No Categories Exists ,Go To add At Least one":
    "لا يوجد اصناف اذهب لاضافة صنف واحد على الاقل";
  }

  ngOnInit(): void {
    this.getAllPartners();
    this.partnerID  = this.getUrlParameter("id");
    this.getSelectedPartner();
  }
  getAllPartners(){
    this.partnerService.getAllPartners().subscribe(
      data=>this.allPartners = data,
    );
  }

  addNewPartner(){
    this.partnerService.addNewPartner(this.partnerModel).subscribe(
      (data)=>{
        let language=localStorage.getItem("lang");
        let successMessage ='';
        successMessage = language=="en"?`Partner Added Successfully`:
        `تم إضــافة البائع بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
        this.router.navigate(["/admin/adminLayout/showAllPartners"]);
      },
      (error)=>{
        this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
      }
    );
  }
  updatePartner(){
    let updatedSuccessfully = this.textDirection=='rtl'?"تم تعديل البائع بنجاح":"Partner Updated Suuccessfully !";
    let updatedFailure = this.textDirection=='rtl'?"! لم يتم تعديل البائع ":"parner does not Updated  !";
    this.partnerService.updatePartner(this.partnerID,this.partnerModel).subscribe(
      (res)=>{
        if(res){
          this.sharedService.showSnackBar(updatedSuccessfully,4000,'successSnackBar');
        }else{
          this.sharedService.showSnackBar(updatedFailure,4000,'warningSnackBar');
        }
      },
      (error)=>this.sharedService.showSnackBar(error,4000,'dangerSnackBar')
    );
  }
  savePartner(){
    if(this.partnerID<=0){
        this.addNewPartner();
    }else{
        this.updatePartner();
    }
    this.back();
  }

  back(){
    this.location.back();
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
   getSelectedPartner(){
    this.partnerService.getPartnerById(this.partnerID).subscribe(
      (data)=>{
        this.partnerModel = data;
        //this.subCategoryName = this.textDirection=='rtl'?data.nameAr:data.name;
      },
      (error)=>this.errorMessage = error
    )
   }


}
