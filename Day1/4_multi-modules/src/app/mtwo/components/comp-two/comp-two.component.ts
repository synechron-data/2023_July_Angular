import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  template: `
    <h1 class="text-primary">Hello from Component Two Module Two</h1>
    <app-hello></app-hello>
    <app-scomp></app-scomp>
  `
})
export class CompTwoComponent { }
