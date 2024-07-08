import { Component, ViewChild } from '@angular/core';
import { Hero, OnChangesComponent } from '../on-changes/on-changes.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-on-changes-parent',
  standalone: true,
  imports: [OnChangesComponent, FormsModule],
  templateUrl: './on-changes-parent.component.html',
  styleUrl: './on-changes-parent.component.scss'
})
export class OnChangesParentComponent {
  hero!: Hero;
  power!: string;
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView!: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}
