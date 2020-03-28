import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankPageComponent } from './containers';

const routes: Routes = [{ path: '', component: BankPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanksRoutingModule {}
