import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMiDirective]'
})
export class MiDirectiveDirective {

  @Input() id: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  cambiarColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
