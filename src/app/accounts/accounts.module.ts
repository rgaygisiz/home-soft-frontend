import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AccountsRoutingModule } from './accounts-routing.module';
// todo: import the according container instead of the component
import { AccountsComponent } from './components';
import { fromAccount } from './reducers';

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    StoreModule.forFeature(fromAccount.accountsFeatureKey, fromAccount.reducer),
  ],
})
export class AccountsModule {}
