import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  template: `
    <h1 class="text-success">Hello from Component One Module One</h1>
    <app-hello></app-hello>
    <app-scomp></app-scomp>
  `
})
export class CompOneComponent { }
