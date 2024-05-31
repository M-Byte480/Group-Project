import { Component } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-email-form',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        NgIf,
        MatFormFieldModule,
        MatIconButton,
        MatIcon,
        MatButton,
        MatSlideToggle,
    ],
    templateUrl: './email-form.component.html',
    styleUrl: './email-form.component.css',
})
export class EmailFormComponent {
    passwordVisible: boolean = false;

    loginForm: FormGroup = new FormGroup({
        email: new FormControl<string>('', [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl<string>('', [
            Validators.required,
            Validators.minLength(8),
        ]),
    });

    constructor() {}

    onSubmit(): void {
        console.log(this.loginForm.value);
    }

    get password(): FormControl {
        return this.loginForm.get('password') as FormControl;
    }

    get email() {
        return this.loginForm.get('email') as FormControl;
    }
}
