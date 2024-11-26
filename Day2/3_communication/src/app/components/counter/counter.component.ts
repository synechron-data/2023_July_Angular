import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent {
  @Input() interval: number;
  @Output() onMax: EventEmitter<boolean>;
  
  flag: boolean;
  count: number;
  clickCount: number;

  constructor() {
    this.flag = false;
    this.count = 0;
    this.interval = 1;
    this.clickCount = 0;
    this.onMax = new EventEmitter<boolean>();
  }

  manageClickCount() {
    this.clickCount++;
    if(this.clickCount > 9) {
      this.flag = true;
      this.onMax.emit(this.flag);
    }
  }

  inc() {
    this.count += this.interval;
    this.manageClickCount();
  }

  dec() {
    this.count -= this.interval;
    this.manageClickCount();
  }

  reset() {
    this.count = 0;
    this.clickCount = 0;
    this.flag = false;
    this.onMax.emit(this.flag);
  }
}
