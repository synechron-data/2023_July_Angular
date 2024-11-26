// import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'reactive-form',
//   templateUrl: './reactive-form.component.html'
// })
// export class ReactiveFormComponent {
//   regForm: FormGroup;

//   constructor() {
//     this.regForm = new FormGroup({
//       firstname: new FormControl(),
//       lastname: new FormControl(),
//       address: new FormGroup({
//         city: new FormControl(),
//         zip: new FormControl()
//       })
//     });
//   }

//   logForm() {
//     console.log(this.regForm.value);
//   }

//   resetForm() {
//     this.regForm.reset();
//   }

//   setForm() {
//     this.regForm.setValue({
//       firstname: 'Abhijeet',
//       lastname: 'Gole',
//       address: {
//         city: 'Delhi',
//         zip: '110001'
//       }
//     });
//   }

//   patchForm() {
//     this.regForm.patchValue({
//       firstname: 'Ramakant',
//       lastname: 'Debata'
//     });
//   }
// }

// ------------------------------------------------------ Form Builder
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      firstname: "",
      lastname: "",
      address: this.formBuilder.group({
        city: "",
        zip: ""
      })
    });
  }

  logForm() {
    console.log(this.regForm.value);
  }

  resetForm() {
    this.regForm.reset();
  }

  setForm() {
    this.regForm.setValue({
      firstname: 'Abhijeet',
      lastname: 'Gole',
      address: {
        city: 'Delhi',
        zip: '110001'
      }
    });
  }

  patchForm() {
    this.regForm.patchValue({
      firstname: 'Ramakant',
      lastname: 'Debata'
    });
  }
}
