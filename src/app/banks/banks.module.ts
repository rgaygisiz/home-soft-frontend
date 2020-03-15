import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BanksRoutingModule } from './banks-routing.module';
import { BanksComponent } from './components';
import { fromBank } from './reducers';

@NgModule({
  declarations: [BanksComponent],
  imports: [
    CommonModule,
    BanksRoutingModule,
    StoreModule.forFeature(fromBank.banksFeatureKey, fromBank.reducer),
  ],
})
export class BanksModule {}
