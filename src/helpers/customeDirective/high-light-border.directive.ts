import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[HighLightBorder]'
})
export class HighLightBorderDirective {

   // highLightColor:string="black";
   constructor(private elemRef:ElementRef) {
    elemRef.nativeElement.style.border=`0px solid ${this.highLightColor}`;
   }
   @Input('HighLightBorder')  highLightColor:string='green';

   @HostListener('mouseover') mouseOver(){
    this.elemRef.nativeElement.style.border=`1px solid ${this.highLightColor}`;
    this.elemRef.nativeElement.style.opacity=.7;
    this.elemRef.nativeElement.style.borderRadius='15px';
   
  }
   @HostListener('mouseout') mouseOut(){
    this.elemRef.nativeElement.style.border=`0px solid ${this.highLightColor}`;
    this.elemRef.nativeElement.style.opacity=1;
    this.elemRef.nativeElement.style.borderRadius='15px';
   }
   ngOnChanges(): void {
    this.elemRef.nativeElement.style.border=`0px solid ${this.highLightColor}`;
   }


}
