import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent }, // todo: add auth guard
    { path: 'login', component: HomeComponent }, // todo: add login component
    { path: '**', redirectTo: '/home' }, // catch all route
];
