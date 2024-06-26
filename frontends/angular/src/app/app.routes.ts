import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/user-access/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent }, // todo: add auth guard
    { path: 'login', component: LoginComponent }, // todo: add login component
    { path: '**', redirectTo: '/home' }, // catch all route
];
