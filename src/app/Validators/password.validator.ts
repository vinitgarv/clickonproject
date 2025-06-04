import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minLengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    return value.length < 8 ? { tooShort: true } : null;
}

export function codeLengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    return value.length < 6 ? { codeshort: true } : null;
}

export function uppercaseValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    return !/[A-Z]/.test(value) ? { missingUpperCase: true } : null;
}

export function numberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    return !/[0-9]/.test(value) ? { missingNumber: true } : null;
}

export function specialCharValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    return !/[!@#$%^&*(),.?":{}|<>]/.test(value) ? { missingSpecialChar: true } : null;
}

export function codeValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    return !/[0-9]/.test(value) ? { misssingCode: true } : null;
}


export function confirmpassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value.trim();
    const confirmpassword = control.get('confirmpassword')?.value.trim();
    console.log(password === confirmpassword)
    if (!password || !confirmpassword) return null;

    return password === confirmpassword ? null : { passwordMismatch: true };
}

export function checkuserEmail(control: AbstractControl): Promise<any> {
    return userEmailAllowed(control.value);
}

function userEmailAllowed(email: string) {
    const takenEmail = ['g@gmail.com', 'garg@gmail.com', 'test@gmail.com'];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (takenEmail.includes(email)) {
                resolve({ checkEmail: true });
            }
            else {
                resolve(null);
            }
        }, 2000)
    })
}
