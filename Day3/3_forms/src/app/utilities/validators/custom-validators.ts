// import { AbstractControl, ValidationErrors } from "@angular/forms";

// export class CustomValidators {
//     static ageRange(control: AbstractControl): ValidationErrors | null {
//         if ((control.value !== '') && (isNaN(control.value) || control.value < 18 || control.value > 60)) {
//             return { 'ageRange': true };
//         } else {
//             return null;
//         }
//     }
// }

// --------------------------------------------------

import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static ageRange(min = 18, max = 60): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if ((control.value !== '') && (isNaN(control.value) || control.value < min || control.value > max)) {
                return { 'ageRange': true };
            } else {
                return null;
            }
        };
    }
}

export const passwordMatchValidator = (formGroup: FormGroup): ValidationErrors | null => { 
    if (formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value) {
        return null;
    } else {
        return { passwordMismatch: true };
    }
}