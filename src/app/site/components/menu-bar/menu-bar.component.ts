import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kosaml-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  constructor(private router: Router) {}

  @Output()
  onLogout: EventEmitter<any> = new EventEmitter<any>();

  goTo(route) {
    this.router.navigate(['/' + route]);
  }

  logout() {
    this.onLogout.next();
  }
}
