import { Component } from '@angular/core';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent {
  logForm(frm: any) {
    if (frm.valid) {
      console.log(frm.value);
    }
    else {
      console.error('Invalid Form');
    }
  }
}
