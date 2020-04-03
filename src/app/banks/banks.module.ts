import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { BanksRoutingModule } from './banks-routing.module';
import { BankEditComponent, BanksComponent } from './components';
import { BankEditPageComponent, BankPageComponent } from './containers';
import { fromBank } from './reducers';

const COMPONENTS = [BanksComponent, BankEditComponent, BankPageComponent, BankEditPageComponent];

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
