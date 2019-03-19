import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  exportAs:'appColors',
  selector: 'appColors , [appColors]'
})
export class ColorsDirective {

  constructor(private el:ElementRef) { }

  @Input("appColors") nuevoColor:string;

  @HostListener('mouseenter') entro(){
    this.el.nativeElement.style.backgroundColor = "cyan";
  }

  @HostListener('mouseleave') salio(){
    this.el.nativeElement.style.backgroundColor = this.nuevoColor;
  }
}
