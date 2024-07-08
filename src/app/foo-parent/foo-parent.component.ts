import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
import { FooComponent } from '../foo/foo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foo-parent',
  standalone: true,
  imports: [FooComponent, CommonModule],
  template: `
    <div class="parent">
    <h2>Peek-A-Boo</h2>

    <button (click)="toggleChild()">
      {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent
    </button>
    <button (click)="updateHero()" [hidden]="!hasChild">Update Hero</button>

    <app-foo *ngIf="hasChild" [name]="heroName">
    </app-foo>

    <h4>-- Lifecycle Hook Log --</h4>
    <div *ngFor="let msg of hookLog">{{msg}}</div>
  </div>
  `,
  styles: `.parent {background: moccasin}`,
  providers: [LoggerService]
})
export class FooParentComponent {

  hasChild = false;
  hookLog: string[];

  heroName = 'Windstorm';
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}
