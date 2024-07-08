import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-after-view-child',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="hero">
  `,
  styles: ``
})
export class AfterViewChildComponent {
    hero = 'Magneta';
}
