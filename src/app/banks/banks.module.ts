import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BanksRoutingModule } from './banks-routing.module';
import { BanksComponent } from './components';

@NgModule({
  declarations: [BanksComponent],
  imports: [CommonModule, BanksRoutingModule],
})
export class BanksModule {}
