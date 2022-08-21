import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserAddress, IUserAddressResponse } from 'src/helpers/interfaces/iuser-address';
import { UserAddressService } from 'src/helpers/services/user-address.service';
import { SharedService } from 'src/helpers/services/shared.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user-address',
  templateUrl: './add-user-address.component.html',
  styleUrls: ['./add-user-address.component.scss']
})
export class AddUserAddressComponent implements OnInit {
  language:string;
  constructor(private fb:FormBuilder,private UserAddressService:UserAddressService,private location:Location,
    private activatedRoute:ActivatedRoute,private sharedService:SharedService, private router:Router)
     {
      this.language = localStorage.getItem("lang")||"en"

      }
  AdduserAddress=this.fb.group({
    addressLine1:["",[Validators.required,Validators.maxLength(15),Validators.minLength(3)]],
    addressLine2:["",[Validators.required,Validators.maxLength(15),Validators.minLength(3)]],
    city:["",[Validators.required,Validators.maxLength(15),Validators.minLength(2)]],
    postalCode:["",[Validators.required,Validators.maxLength(15),Validators.minLength(2)]],
    country:["",[Validators.required,Validators.maxLength(15),Validators.minLength(2)]],
    telephone:["",[Validators.required,Validators.maxLength(11),Validators.minLength(5)]],
    mobile:["",[Validators.required,Validators.maxLength(11),Validators.minLength(11)]]
  });
  
  
  
  AddNewUserAddress()
  {
    this.UserAddressService.AddUserAddress(this.AdduserAddress.value as IUserAddress).subscribe(Data=>{
      let language=localStorage.getItem("lang");
        let successMessage ='';
        successMessage = language=="en"?`UserAddress Added Successfully!`:
        `تم إضافة عنوان المستخدم بنجاح !`;
        this.sharedService.showSnackBar(successMessage,3000,'successSnackBar');
        // window.location.reload();
        //this.router.navigate(["/partner/partnerLayout/showAllDiscounts"]);
    },(error)=>{
      this.sharedService.showSnackBar(error,3000,'dangerSnackBar');
    });
    this.back();
  }

  ngOnInit(): void {
    
  }
  back(){
    this.location.back();
  }

}
