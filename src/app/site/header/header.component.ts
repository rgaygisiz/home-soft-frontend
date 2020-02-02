import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';
import * as SiteActions from '../store/site.actions';


@Component({
  selector: 'kosaml-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'kosaml';
  isAuthenticated$: Observable<boolean> = this.store.select('auth').pipe(
    map(authState => !!authState.user),
    shareReplay()
  );

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
  }

  toggleProjectBar() {
    this.store.dispatch(new SiteActions.ToggleProjectBar());
  }

  toggleToolBar() {
    this.store.dispatch(new SiteActions.ToggleToolBar());
  }
}
