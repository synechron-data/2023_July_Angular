// ------------------------------------------------ Default Bootstrapping
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HelloComponent } from './components/hello/hello.component';
// import { HiComponent } from './components/hi/hi.component';

// @NgModule({
//   declarations: [
//     HelloComponent,
//     HiComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   bootstrap: [
//     HelloComponent,
//     HiComponent
//   ]
// })
// export class AppModule { }

// ------------------------------------------------ Custom / Manual Bootstrapping
import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './components/hello/hello.component';
import { HiComponent } from './components/hi/hi.component';

@NgModule({
  declarations: [
    HelloComponent,
    HiComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
    let condition = true;

    const appDiv = document.querySelector('#appDiv');

    if (condition) {
      const helloTag = document.createElement('app-hello');
      appDiv?.appendChild(helloTag);
      appRef.bootstrap(HelloComponent);
    } else {
      const hiTag = document.createElement('app-hi');
      appDiv?.appendChild(hiTag);
      appRef.bootstrap(HiComponent);
    }
  }
}
