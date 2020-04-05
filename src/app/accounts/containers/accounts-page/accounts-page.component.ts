import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Account } from '../../models';
import { fromAccount } from '../../reducers';

@Component({
  selector: 'kosaml-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.scss'],
})
export class AccountsPageComponent {
  accounts$: Observable<Account[]> = this.store.pipe(select(fromAccount.selectAllAccounts));

  constructor(
    private store: Store<fromAccount.State>,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  onNewClick() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
