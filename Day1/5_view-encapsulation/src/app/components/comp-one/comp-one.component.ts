// // 1. Element Inline Style
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-comp-one',
//   template: `
//     <h1 class="text-success">Hello from Component One</h1>
//     <h2 style="border-style: solid; border-width: 2px; border-color: green;">From Component One</h2>
//   `
// })
// export class CompOneComponent { }

// // 2. Template Style
// import { Component, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-comp-one',
//   template: `
//     <style>
//       .card {
//         border-style: solid;
//         border-width: 2px;
//         border-color: green;
//       }
//     </style>
//     <h1 class="text-success">Hello from Component One</h1>
//     <h2 class="card">From Component One</h2>
//   `,
//   encapsulation: ViewEncapsulation.Emulated
// })
// export class CompOneComponent { }

// // 3. Component Style
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-comp-one',
//   template: `
//     <h1 class="text-success">Hello from Component One</h1>
//     <h2 class="card">From Component One</h2>
//   `,
//   styles: [`
//     .card {
//       border-style: solid;
//       border-width: 2px;
//       border-color: green;
//     }
//   `]
// })
// export class CompOneComponent { }

// 4. External CSS
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  template: `
    <h1 class="text-success">Hello from Component One</h1>
    <h2 class="card">From Component One</h2>
  `,
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent { }

// // Style Precedence
// // 1. Element Inline Style
// // 2. Template Style
// // 3. Component Style
// // 4. External CSS
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-comp-one',
//   template: `
//     <style>
//       .card {
//         border-style: solid;
//         border-width: 2px;
//         border-color: red;
//       }
//     </style>
//     <h1 class="text-success">Hello from Component One</h1>
//     <h2 class="card" style="border-style: solid; border-width: 2px; border-color: black;">From Component One</h2>
//   `,
//   styles: [`
//     .card {
//       border-style: solid;
//       border-width: 2px;
//       border-color: yellow;
//     }
//   `],
//   styleUrls: ['./comp-one.component.css']
// })
// export class CompOneComponent { }
