import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BanksRoutingModule } from './banks-routing.module';
import { BanksComponent } from './components';
import { fromBank } from './reducers';
import { BankPageComponent } from './containers/bank-page/bank-page.component';

@NgModule({
  declarations: [BanksComponent, BankPageComponent],
  imports: [
    CommonModule,
    BanksRoutingModule,
    StoreModule.forFeature(fromBank.banksFeatureKey, fromBank.reducer),
  ],
})
export class BanksModule {}
