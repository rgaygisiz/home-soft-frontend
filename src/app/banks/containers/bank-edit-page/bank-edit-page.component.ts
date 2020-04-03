import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kosaml-bank-edit-page',
  templateUrl: './bank-edit-page.component.html',
  styleUrls: ['./bank-edit-page.component.scss'],
})
export class BankEditPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onCancelClicked() {
    this.router.navigate(['..']);
  }
}
