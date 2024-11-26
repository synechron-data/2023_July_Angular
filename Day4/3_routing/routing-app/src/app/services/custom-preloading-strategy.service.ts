import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, mergeMap, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      var delay: number = route.data['delay'];
      console.log(`Preloading: ${route.path} with delay ${delay}`);
      return timer(delay).pipe(
        mergeMap(_ => {
          console.log(`Loading Started: ${route.path}`);
          return fn();
        })
      );
    } else {
      console.warn(`No Preload for the path ${route.path}`);
      return of(null);
    }
  }
}
