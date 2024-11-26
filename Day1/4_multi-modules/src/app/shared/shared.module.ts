import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScompComponent } from './components/scomp/scomp.component';

@NgModule({
  declarations: [
    ScompComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScompComponent
  ]
})
export class SharedModule { }
