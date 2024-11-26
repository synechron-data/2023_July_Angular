import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, delay, map, of } from "rxjs";

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

    private static takenUsernames = [
        'manish',
        'manishs',
        'manishsharma',
        'manish.sharma',
        'manish_sharma'
    ];

    private static isUsernameTaken(username: string): Observable<boolean> { 
        // HTTP API call to check Username availability
        return of(CustomValidators.takenUsernames.includes(username));
    }

    static usernameAvailability(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return CustomValidators.isUsernameTaken(control.value).pipe(
                delay(1000),
                map((isTaken: boolean) => {
                    if (isTaken) {
                        return { 'usernameTaken': true };
                    } else {
                        return null;
                    }
                })
            );
        };
    }
}