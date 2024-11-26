import { Component, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() personList?: Array<string>;
  selected: string;

  constructor() {
    this.selected = '';
  }

  select(person: string, e: Event) {
    this.selected = person;
    e.preventDefault();
  }
}
