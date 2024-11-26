import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './components/root/root.component';
import { ListComponent } from './components/list/list.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    RootComponent,
    ListComponent,
    HighlightDirective,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER, multi: true, useFactory: () => {
        return (component: ComponentRef<any>) => {
          console.log(component);
        }
      }
    }
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule { }