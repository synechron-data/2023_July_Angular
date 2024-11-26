import { Component } from '@angular/core';

@Component({
  selector: 'assign-two',
  templateUrl: './assign-two.component.html'
})
export class AssignTwoComponent {
  selected: string;

  constructor() {
    this.selected = '';
  }
}
