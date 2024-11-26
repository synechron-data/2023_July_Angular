import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root/root.component';
import { MoneModule } from './mone/mone.module';
import { MtwoModule } from './mtwo/mtwo.module';
import { SharedModule } from './shared/shared.module';
import { ManishSyncPnqJul23Module } from 'manish-sync-pnq-jul23';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    MoneModule,
    MtwoModule,
    SharedModule,
    ManishSyncPnqJul23Module
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