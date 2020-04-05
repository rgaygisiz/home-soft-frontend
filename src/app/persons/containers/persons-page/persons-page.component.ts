import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from '../../models';
import { fromPerson } from '../../reducers';

@Component({
  selector: 'kosaml-persons-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.scss'],
})
export class PersonsPageComponent {
  persons$: Observable<Person[]> = this.store.pipe(select(fromPerson.selectAllPersons));

  constructor(
    private store: Store<fromPerson.State>,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  onNewClick() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
