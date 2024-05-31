import { Component } from '@angular/core';
import { EmailFormComponent } from '../email-form/email-form.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [EmailFormComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {}
