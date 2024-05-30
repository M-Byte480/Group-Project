import { Component } from '@angular/core';
import {
    FormBuilder,
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
    ],
    templateUrl: './email-form.component.html',
    styleUrl: './email-form.component.css',
})
export class EmailFormComponent {
    emailForm: FormGroup;
    passwordVisible: boolean = false;

    loginForm: FormGroup = new FormGroup({
        email: new FormControl<string>(''),
        password: new FormControl<string>(''),
    });

    constructor(private formBuilder: FormBuilder) {
        this.emailForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    onSubmit(): void {
        if (this.emailForm.valid) {
            console.log(this.emailForm.value);
        }
    }

    get email() {
        return this.emailForm.get('email');
    }
}
