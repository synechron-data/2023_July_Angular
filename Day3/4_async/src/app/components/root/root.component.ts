import { Component } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription, delay, filter, map, of, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  constructor() {
    // this.getPromise();
    // this.getObservable();

    // --------------------------------------------------
    // this.getPromise().then((data) => {
    //   console.log("Promise - Data: ", data);
    // }).catch((error) => {
    //   console.error("Promise - Error: ", error);
    // });

    // const obSub = this.getObservable().subscribe({
    //   next: (data) => {
    //     console.log("Observable - Data: ", data);
    //   },
    //   error: (error) => {
    //     console.error("Observable - Error: ", error);
    //   },
    // });

    // setTimeout(() => {
    //   console.log("Observable - Unsubscribe...");
    //   obSub.unsubscribe();
    // }, 13000);

    // -------------------------------------------------- Observables are single-cast
    // const observable = this.getObservable();

    // observable.subscribe({
    //   next: (data) => {
    //     console.log("Subscriber 1 - Data: ", data);
    //   }
    // });

    // observable.subscribe({
    //   next: (data) => {
    //     console.log("Subscriber 2 - Data: ", data);
    //   }
    // });

    // // -------------------------------------------------- Subject are multi-cast
    // const subject = this.getSubject();

    // subject.subscribe({
    //   next: (data) => {
    //     console.log("Subscriber 1 - Data: ", data);
    //   }
    // });

    // subject.subscribe({
    //   next: (data) => {
    //     console.log("Subscriber 2 - Data: ", data);
    //   }
    // });

    // subject.complete();

    // -------------------------------------------------- Subject as Observable
    // const observable = this.getSubjectAsObservable();

    // observable.subscribe({
    //   next: (data) => {
    //     console.log("Subscriber 1 - Data: ", data);
    //   }
    // });

    // observable.subscribe({
    //   next: (data) => {
    //     console.log("Subscriber 2 - Data: ", data);
    //   }
    // });

    // -------------------------------------------------- Subject Types
    // // const subject = this.getSubjectA();
    // // const subject = this.getSubjectB();
    // const subject = this.getSubjectC();

    // let s1 = subject.subscribe({
    //   next: (data) => {
    //     console.log("Subscriber 1 - Data: ", data);
    //   }
    // });

    // let s2: Subscription;

    // setTimeout(() => {
    //   console.log("\nAfter 6 secs, S2 subscribes...");

    //   s2 = subject.subscribe({
    //     next: (data) => {
    //       console.log("Subscriber 2 - Data: ", data);
    //     }
    //   });
    // }, 6100);

    // setTimeout(() => {
    //   console.log("\nAfter 11 secs, all unsubscribes...");
    //   s1.unsubscribe();
    //   s2.unsubscribe();
    // }, 11000);

    // -------------------------------------------------- Operators

    let numObservable = of(10, 20, 31, 43, 50, 67, 70, 80, 89, 90);

    // numObservable.subscribe({
    //   next: (n) => {
    //     console.log(n);
    //   }
    // });

    // numObservable.subscribe({
    //   next: (n) => {
    //     if (n % 2 === 0)
    //       console.log(n);
    //   }
    // });

    // numObservable.pipe(filter((n) => n % 2 === 0)).subscribe({
    //   next: (n) => {
    //     console.log(n);
    //   }
    // });

    // numObservable.pipe(map((n) => n * 10)).subscribe({
    //   next: (n) => {
    //     console.log(n);
    //   }
    // });

    // numObservable.pipe(reduce((a, n) => a + n)).subscribe({
    //   next: (n) => {
    //     console.log(n);
    //   }
    // });

    numObservable.pipe(
      filter((n) => n % 2 === 0),
      map((n) => n * 10),
      reduce((a, n) => a + n),
      delay(5000)
    ).subscribe({
      next: (n) => {
        console.log(n);
      }
    });
  }

  getSubjectC(): ReplaySubject<number> {
    let subject = new ReplaySubject<number>();
    let count = 1;

    setInterval(() => {
      subject.next(count++);
    }, 2000);

    return subject;
  }

  getSubjectB(): BehaviorSubject<number> {
    let subject = new BehaviorSubject<number>(0);
    let count = 1;

    setInterval(() => {
      subject.next(count++);
    }, 2000);

    return subject;
  }

  getSubjectA(): Subject<number> {
    let subject = new Subject<number>();
    let count = 1;

    setInterval(() => {
      subject.next(count++);
    }, 2000);

    return subject;
  }

  getSubjectAsObservable(): Observable<number> {
    let subject = new Subject<number>();

    setInterval(() => {
      subject.next(Math.random());
    }, 4000);

    return subject.asObservable();
  }

  getSubject(): Subject<number> {
    let subject = new Subject<number>();

    setInterval(() => {
      subject.next(Math.random());
    }, 4000);

    return subject;
  }

  getObservable(): Observable<number> {
    return new Observable((observer) => {
      setInterval(() => {
        // console.log("Observable - Set Interval Executed...");
        observer.next(Math.random());
      }, 4000);
    });
  }

  getPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        // console.log("Promise - Set Interval Executed...");
        resolve(Math.random());
      }, 4000);
    });
  }
}