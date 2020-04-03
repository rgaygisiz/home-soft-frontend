import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kosaml-account-edit-page',
  templateUrl: './account-edit-page.component.html',
  styleUrls: ['./account-edit-page.component.scss'],
})
export class AccountEditPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onCancelClicked() {
    this.router.navigate(['..']);
  }
}
