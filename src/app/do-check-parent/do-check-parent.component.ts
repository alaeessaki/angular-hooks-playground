import { Component, ViewChild } from '@angular/core';
import { DoCheckComponent } from '../do-check/do-check.component';
import { Hero } from '../on-changes/on-changes.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-do-check-parent',
  standalone: true,
  imports: [DoCheckComponent, FormsModule],
  templateUrl: './do-check-parent.component.html',
  styleUrl: './do-check-parent.component.scss'
})
export class DoCheckParentComponent {
  hero!: Hero;
  power!: string;
  title = 'DoCheck';
  @ViewChild(DoCheckComponent) childView!: DoCheckComponent;

  constructor() { this.reset(); }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}
