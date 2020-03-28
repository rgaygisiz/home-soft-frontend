import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { BanksRoutingModule } from './banks-routing.module';
import { BanksComponent } from './components';
import { BankPageComponent } from './containers/bank-page/bank-page.component';
import { fromBank } from './reducers';

const COMPONENTS = [BanksComponent, BankPageComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    BanksRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromBank.banksFeatureKey, fromBank.reducer),
  ],
})
export class BanksModule {}
