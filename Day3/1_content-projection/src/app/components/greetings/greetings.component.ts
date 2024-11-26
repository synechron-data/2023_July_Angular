import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html'
})
export class GreetingsComponent {
  @Input() name?: string;
}
