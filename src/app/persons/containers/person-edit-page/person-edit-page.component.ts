import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'kosaml-person-edit-page',
  templateUrl: './person-edit-page.component.html',
  styleUrls: ['./person-edit-page.component.scss'],
})
export class PersonEditPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  onCancelClicked() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
