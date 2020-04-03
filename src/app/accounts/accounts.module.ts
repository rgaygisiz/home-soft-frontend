import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { AccountsRoutingModule } from './accounts-routing.module';
// todo: import the according container instead of the component
import { AccountsComponent } from './components';
import { AccountsPageComponent } from './containers';
import { fromAccount } from './reducers';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountEditPageComponent } from './containers/account-edit-page/account-edit-page.component';

@NgModule({
  declarations: [AccountsComponent, AccountsPageComponent, AccountEditComponent, AccountEditPageComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromAccount.accountsFeatureKey, fromAccount.reducer),
  ],
})
export class AccountsModule {}
