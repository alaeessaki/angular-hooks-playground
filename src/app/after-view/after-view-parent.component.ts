import { Component } from "@angular/core";
import { LoggerService } from "../logger.service";
import { AfterViewComponent } from "./after-view.component";
import { CommonModule } from "@angular/common";



@Component({
    selector: 'after-view-parent',
    standalone: true,
    imports: [AfterViewComponent, CommonModule],
    template: `
    <div class="parent">
    <h2>AfterView</h2>

    <app-after-view *ngIf="show"></app-after-view>

    <h4>-- AfterView Logs --</h4>
    <p><button (click)="reset()">Reset</button></p>
    <div *ngFor="let msg of logger.logs">{{msg}}</div>
    </div>
    `,
    styles: ['.parent {background: burlywood}'],
    providers: [LoggerService]
})
export class AfterViewParentComponent {
    show = true;

    constructor(public logger: LoggerService) {
    }

    reset() {
        this.logger.clear();
        // quickly remove and reload AfterViewComponent which recreates it
        this.show = false;
        this.logger.tick_then(() => this.show = true);
    }
}
