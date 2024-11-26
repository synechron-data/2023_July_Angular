import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'async-promise',
  templateUrl: './async-promise.component.html'
})
export class AsyncPromiseComponent implements OnInit {
  promiseData?: number;
  promiseInstance?: Promise<number>;

  ngOnInit() {
    this.getPromise().then((data) => {
      this.promiseData = data;
    });

    this.promiseInstance = this.getPromise();
  }

  getPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
      setInterval(function () {
        resolve(Math.random());
      }, 2000);
    });
  }
}
