import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './components/root/root.component';
import { GreetingsComponent } from './components/greetings/greetings.component';

@NgModule({
  declarations: [
    RootComponent,
    GreetingsComponent
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