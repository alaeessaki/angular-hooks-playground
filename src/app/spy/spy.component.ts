import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpyDirective } from '../spy.directive';

@Component({
  selector: 'app-spy',
  standalone: true,
  imports: [CommonModule, FormsModule, SpyDirective],
  templateUrl: './spy.component.html',
  styleUrl: './spy.component.scss',
  providers: [LoggerService]
})
export class SpyComponent {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor(public logger: LoggerService) {
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('-- reset --');
    this.heroes = [];
    this.logger.tick();
  }
}
