import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bank } from '../../models';
import { fromBank } from '../../reducers';

@Component({
  selector: 'kosaml-bank-page',
  templateUrl: './bank-page.component.html',
  styleUrls: ['./bank-page.component.scss'],
})
export class BankPageComponent {
  banks$: Observable<Bank[]> = this.store.pipe(select(fromBank.selectAllBanks));

  constructor(
    private store: Store<fromBank.State>,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  onNewClick() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
