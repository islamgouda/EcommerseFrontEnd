import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  get textDirection(){
   let textDir=localStorage.getItem('lang')=="ar"?"rtl":"ltr";
   return textDir;
  }
  constructor(private activatedRoute:ActivatedRoute,private snackBar:MatSnackBar,public dialog: MatDialog ) { }
  showSnackBar(msg:string,durationInMS:number,className:string){
    this.snackBar.open(msg, 'Ok', {
      duration: durationInMS,
      panelClass: [className]
    });
  }
  modifyImageName(imageName:string):string{
    let name =imageName;
    let namearr= name.split(".");
    name = namearr[namearr.length-1]
    name = `subCatImage${new Date().getTime()}.${name}`;
    return name;
  }
  getUrlParameter(paramName:string):number{
    let parameter = -1;
    console.log(`########### 1 - ${parameter}`);
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        parameter = Number(params.get(paramName));
        console.log(`########### 2 - ${parameter}`);
      }
    )
    return parameter;
  }

}
