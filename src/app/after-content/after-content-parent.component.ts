import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AfterContentComponent } from "./after-content.component";
import { AfterContentChildComponent } from "./after-content-child.component";
import { LoggerService } from "../logger.service";


@Component({
    selector: 'after-content-parent',
    standalone: true,
    imports: [CommonModule, AfterContentComponent, AfterContentChildComponent],
    template: `
     <div class="parent">
    <h2>AfterContent</h2>

    <div *ngIf="show">
     <app-after-content>
        <app-after-content-child></app-after-content-child>
      </app-after-content>
    </div>

    <h4>-- AfterContent Logs --</h4>
    <p><button (click)="reset()">Reset</button></p>
    <div *ngFor="let msg of logger.logs">{{msg}}</div>
  </div>
    `,
    styles: ['.parent {background: burlywood}'],
    providers: [LoggerService]
})

export class AfterContentParentComponent {
    show = true;

    constructor(public logger: LoggerService) {
    }

    reset() {
        this.logger.clear();
        // quickly remove and reload AfterContentComponent which recreates it
        this.show = false;
        this.logger.tick_then(() => this.show = true);
    }
}