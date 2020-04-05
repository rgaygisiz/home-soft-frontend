import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'kosaml-bank-edit-page',
  templateUrl: './bank-edit-page.component.html',
  styleUrls: ['./bank-edit-page.component.scss'],
})
export class BankEditPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  onCancelClicked() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
