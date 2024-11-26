import { Component } from '@angular/core';

@Component({
    selector: 'app-hello',
    template: `
        <div class="container text-center">
            <h1 class="red">
                Hello Angular!
            </h1>

            <h1 class="text-primary">
                Hello Angular!
            </h1>

            <h1 class="text-success">
                Activity <span class="bi bi-activity"></span>
            </h1>

            <h1 class="text-warning">
                Circle <span class="bi bi-6-circle-fill"></span>
            </h1>
        </div>
   `
})
export class HelloComponent { }