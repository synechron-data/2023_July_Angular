import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  flag: boolean;
  myStyles: any;
  name:string;

  constructor() {
    this.flag = false;
    this.myStyles = { 
      'background-color': 'green',
      'color': 'white',
      'font-size': '20px'
    };
    this.name = '';
  }

  addName() {
    this.name = 'Synechron';
  }

  removeName() {
    this.name = '';
  }
}
