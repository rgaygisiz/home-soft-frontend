import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kosaml-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  constructor(private router: Router) {}

  goTo(route) {
    this.router.navigate(['/' + route]);
  }
}
