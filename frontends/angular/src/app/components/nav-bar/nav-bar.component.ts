import { Component } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';
import { NgClass, NgForOf } from '@angular/common';
import { NavbarItemModel } from '../../models/NavbarItem.model';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [RouterLink, NgClass, NgForOf],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
    protected readonly navItems: NavbarItemModel[] = [
        { name: 'Login', route: '/login' },
        { name: 'Home', route: '/home' },
        { name: 'About', route: '/about' },
        { name: 'Services', route: '/services' },
        { name: 'Contact', route: '/contact' },
    ];

    constructor(private router: Router) {}


    onMenuActivation(route: string): void {
      this.router.navigate([route]);
    }
}
