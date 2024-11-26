import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'async-observable',
  templateUrl: './async-observable.component.html',
  styles: [
  ]
})
export class AsyncObservableComponent implements OnInit, OnDestroy {
  observableData?: number;
  sub?: Subscription;
  observableInstance?: Observable<number>;

  ngOnInit() {
    this.sub = this.getObservable().subscribe((data) => {
      this.observableData = data;
    });

    this.observableInstance = this.getObservable();
  }

  getObservable(): Observable<number> {
    return interval(2000).pipe(map(_ => Math.random()));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
