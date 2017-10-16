import { MiDirectiveDirective } from './mi-directive.directive';
import { Component, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(MiDirectiveDirective) boxes: QueryList<MiDirectiveDirective>;

  constructor() {}

  ngAfterViewInit(): void {
    this.boxes.map(b => {
      parseInt(b.id, 10) % 2 === 0 ? b.cambiarColor('red') : b.cambiarColor('green');
      if (parseInt(b.id, 10) === 8) {
        b.cambiarColor('black');
      }
    });
  }
}
