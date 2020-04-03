import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankEditPageComponent, BankPageComponent } from './containers';

const routes: Routes = [
  { path: '', component: BankPageComponent },
  { path: 'edit', component: BankEditPageComponent },
  { path: 'new', component: BankEditPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanksRoutingModule {}
