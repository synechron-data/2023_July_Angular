import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  name:string;
  num: number;
  person: { id: number, name: string, address: { city: string, pin: number } };
  today: Date;
  flag: boolean;
  pList: Array<string>;

  constructor() {
    this.name = 'manish sharma';
    this.num = Math.PI;
    this.person = { id: 1, name: "Manish", address: { city: "Pune", pin: 411021 } };
    this.today = new Date();
    this.flag = true;
    this.pList = ["Manish", "Rajesh", "Ramesh", "Suresh", "Amit", "Chevala", "Jyoshna", "Preeti", "Rahul", "Ravindra", "Sachin", "Vijay", "Sanjit"];
  }

  updateFlag() {
    this.flag = !this.flag;
  }

  get format() { return this.flag ? 'shortDate' : 'fullDate'; }
}