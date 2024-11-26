import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  pList: Array<string>;
  message: string;

  @ViewChild('c1', { static: true })
  counterOne?: CounterComponent;

  @ViewChild('c2', { static: true })
  counterTwo?: CounterComponent;

  @ViewChildren(CounterComponent)
  counters?: QueryList<CounterComponent>;

  constructor() {
    this.pList = ['Anuj', 'Dhivya', 'Gayatri', 'Lokesh', 'Pankaj', 'Rakesh', 'Shruthi', 'Vijay', 'Vishal'];
    this.message = '';
  }

  p2_reset(counter: CounterComponent) {
    counter.reset();
  }

  p3_reset() {
    this.counterOne?.reset();
    this.counterTwo?.reset();

    // if (this.counterOne)
    //   this.counterOne.reset();

    // if (this.counterTwo)
    //   this.counterTwo.reset();
  }

  reset_all() {
    this.counters?.forEach(counter => { counter.reset() });
  }

  updateMessage(flag: boolean) {
    if (flag) {
      this.message = 'You have clicked on a counter more than 10 times';
    } else {
      this.message = '';
    }
  }
}