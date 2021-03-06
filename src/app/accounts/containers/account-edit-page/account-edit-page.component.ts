import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'kosaml-account-edit-page',
  templateUrl: './account-edit-page.component.html',
  styleUrls: ['./account-edit-page.component.scss'],
})
export class AccountEditPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  onCancelClicked() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
