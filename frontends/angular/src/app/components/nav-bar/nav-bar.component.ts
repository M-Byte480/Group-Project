import { Component } from '@angular/core';
import { routes } from "../../app.routes";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  protected readonly routes = routes;
}
