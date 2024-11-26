import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  personList: Array<string>;
  selected: string;

  constructor() {
    this.selected = '';
    this.personList = ['Anuj', 'Dhivya', 'Gayatri', 'Lokesh', 'Pankaj', 'Rakesh', 'Shruthi', 'Vijay', 'Vishal'];
  }

  select(person:string, e: Event) {
    this.selected = person;
    e.preventDefault();
  }
}
