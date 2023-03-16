import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function searchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valid = /^[a-z]{3}[0-9]{3}$/i.test(control.value);
        return valid ? null : {validSearch: { value: control.value}};
    }
}
