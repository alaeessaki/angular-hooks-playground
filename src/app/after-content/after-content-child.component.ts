import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-after-content-child',
    standalone: true,
    imports: [FormsModule],
    template: '<input [(ngModel)]="hero">'
})
export class AfterContentChildComponent {
    hero = 'Magneta';
}