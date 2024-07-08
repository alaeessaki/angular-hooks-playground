import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooParentComponent } from './foo-parent/foo-parent.component';
import { SpyComponent } from './spy/spy.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { AfterViewParentComponent } from './after-view/after-view-parent.component';
import { AfterContentParentComponent } from './after-content/after-content-parent.component';
import { CounterParentComponent } from './counter/counter-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FooParentComponent, 
    SpyComponent, 
    OnChangesParentComponent,
    DoCheckParentComponent,
    AfterViewParentComponent,
    AfterContentParentComponent,
    CounterParentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recap_test';
}
