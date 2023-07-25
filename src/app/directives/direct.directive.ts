import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirect]'
})
export class DirectDirective {

  constructor(public myRef:ElementRef) {
    // console.log(myRef.nativeElement);
  }

  @HostListener('click') click(){
    this.myRef.nativeElement.style.backgroundColor = this.styleObj.bgColor;
    this.myRef.nativeElement.style.color = this.styleObj.fColor;
    this.myRef.nativeElement.style.boxShadow = this.styleObj.shadow;
  }

  @Input("appDirect") styleObj:any;


}
