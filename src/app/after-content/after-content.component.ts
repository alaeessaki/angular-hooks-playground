import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';
import { AfterContentChildComponent } from './after-content-child.component';
import { LoggerService } from '../logger.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-after-content',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div>-- projected content begins --</div>
      <ng-content></ng-content>
    <div>-- projected content ends --</div>
    <p *ngIf="comment" class="comment">
      {{comment}}
    </p>
  `,
  styles: ``
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
  private prevHero = '';
  comment = '';

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(AfterContentChildComponent) contentChild!: AfterContentChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    let child = this.contentChild;
    let message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }

}
