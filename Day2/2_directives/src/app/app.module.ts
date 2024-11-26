import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './components/root/root.component';
import { AssignTwoComponent } from './components/assign-two/assign-two.component';
import { ListComponent } from './components/list/list.component';
import { AddContentDirective } from './directives/add-content.directive';
import { IsAuthorizedDirective } from './directives/is-authorized.directive';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    RootComponent,
    AssignTwoComponent,
    ListComponent,
    AddContentDirective,
    IsAuthorizedDirective,
    HighlightDirective
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