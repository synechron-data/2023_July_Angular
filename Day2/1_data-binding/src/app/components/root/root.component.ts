import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent {
  message: string;
  flag: boolean;
  h: number;
  w: number;
  greetings: string;
  name!: string;
  count: number;

  constructor(private zone: NgZone) {
    this.message = 'Hello World';
    this.flag = false;
    this.h = 300;
    this.w = 300;
    this.greetings = 'Hello';
    this.count = 0;
  }

  doChange() {
    this.message = new Date().toTimeString();
  }

  anchorClick1() {
    this.message = new Date().toTimeString();
  }

  anchorClick2(e: Event) {
    this.message = new Date().toTimeString();
    e.preventDefault();
  }

  doUpdate(n: string) {
    this.greetings = `Hello, ${n}`;
  }

  increamentCount(cb: () => void) {
    this.count++;
    if (this.count < 50) {
      setTimeout(() => this.increamentCount(cb), 100);
    } else {
      cb();
    }
  }

  inZone() {
    this.count = 0;
    this.message = 'Started...';
    this.increamentCount(() => {
      this.message = 'Completed...';
    });
  }

  outOfZone() {
    this.count = 0;
    this.message = 'Started...';
    // this.zone.runOutsideAngular(() => {
    //   this.increamentCount(() => {
    //     this.message = 'Completed...';
    //   });
    // });

    this.zone.runOutsideAngular(() => {
      this.increamentCount(() => {
        this.zone.run(() => {
          this.message = 'Completed...';
        });
      });
    });
  }
}
